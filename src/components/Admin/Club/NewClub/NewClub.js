import React, { Fragment, useState } from "react";
import "./NewClub.css";
import { useDispatch, useSelector } from "react-redux";

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import StorageIcon from "@mui/icons-material/Storage";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../../../layout/Loader/Loader";
import Sidebar from "../../Sidebar/Sidebar";
import { newClubAction } from "../../../../redux/slices/adminSlices";



function NewClub() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, appErr, serverErr, newClub } = useSelector(
    (store) => store?.admin
  );

  const [clubName, setClubName] = useState("");
  const [founded, setFounded] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState([]);
  const [preview, setPreview] = useState([]);




  const createClubSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("clubName", clubName);
    myForm.set("founded", founded);
    myForm.set("description", description);

    logo.forEach((image) => {
      myForm.append("logo", image);
    });
    dispatch(newClubAction(myForm));
  };

  const createClubImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setLogo([]);
    setPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreview((old) => [...old, reader.result]);
          setLogo((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };




  useEffect(() => {
    if (newClub?.success == true) {
      navigate('/admin/clubs')
    };
  }, [newClub]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <div className="dashboard">
            <Sidebar />
            <div className="newProductContainer">
              <form
                action=""
                className="createproductForm"
                encType="multipart/form-data"
                // onSubmit={formik.handleSubmit}
                onSubmit={createClubSubmitHandler}
              >
                <h1>Create Club</h1>
                <div>
                  <SpellcheckIcon />
                  <input
                    type="text"
                    placeholder="Club Name"
                    required
                    value={clubName}
                    onChange={(e) => setClubName(e.target.value)}

                  />
                </div>

                <div>
                  <AccessAlarmIcon />
                  <input
                    type="date"
                    placeholder="Founded On"
                    required

                    value={founded}
                    onChange={(e) => setFounded(e.target.value)}
                  />
                </div>

                <div>
                  <DescriptionIcon />
                  <textarea
                    placeholder=" Description"

                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="1"
                  ></textarea>
                </div>






                <div id="createProductFormFile">
                  <input
                    type="file"
                    name="logo"
                    accept="image/*"

                    onChange={createClubImagesChange}

                    multiple
                  />
                </div>

                <div id="createProductFormImage">

                  {preview?.map((image, index) => (

                    <img key={index} src={image} alt="Logo Preview" />
                  ))}
                </div>

                <Button
                  id="createProductBtn"
                  type="submit"
                >
                  Create
                </Button>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default NewClub;
