import React, { Fragment, useState } from "react";
import "./UpdateClub.css";
import { useDispatch, useSelector } from "react-redux";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../../../layout/Loader/Loader";
import Sidebar from "../../Sidebar/Sidebar";
import { getClubDetailsAction, updateClubAction } from "../../../../redux/slices/adminSlices";


function UpdateClub() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { loading, appErr, serverErr, club, updateClub } = useSelector(
    (store) => store?.admin
  );



  const [clubName, setClubName] = useState("");
  const [founded, setFounded] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState([]);


  const [oldImages, setOldImages] = useState([]);

  const [preview, setPreview] = useState([]);

  const clubId = id;


  useEffect(() => {

    if (club == undefined) {
      dispatch(getClubDetailsAction(clubId));
    } else {
      setClubName(club.club.clubName);
      setDescription(club.club.description);
      setFounded(club.club.founded);
      setOldImages(club.club.logo);
    }


  }, [
    dispatch,
    clubId,
    club

  ]);
  useEffect(() => {
    if (updateClub?.success == true) {
      navigate('/admin/clubs')
    };
  }, [updateClub]);

  const updateClubSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("clubName", clubName);
    myForm.set("founded", founded);
    myForm.set("description", description);

    logo.forEach((image) => {
      myForm.append("logo", image);
    });
    const upData = { clubId, myForm }
    dispatch(updateClubAction(upData));
  };

  const updateClubImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setLogo([]);
    setPreview([]);
    setOldImages([]);

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
                onSubmit={updateClubSubmitHandler}
              >
                <h1>Update Club</h1>
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
                    // type="date"
                    type="text" onfocus="(this.type = 'date')" id="date"

                    placeholder="Founded On"
                    required
                    value={founded}
                    onChange={(e) => setFounded(e.target.value)}
                  />
                </div>

                <div>
                  <DescriptionIcon />
                  <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="1"
                  ></textarea>
                </div>



                <div id="createProductFormFile">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateClubImagesChange}
                    multiple
                  />
                </div>

                <div id="createProductFormImage">
                  {oldImages &&
                    oldImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.url}
                        alt="Old Product Preview"
                      />
                    ))}
                </div>

                <div id="createProductFormImage">
                  {preview.map((image, index) => (
                    <img key={index} src={image} alt="Product Preview" />
                  ))}
                </div>

                <Button
                  id="createProductBtn"
                  type="submit"
                >
                  Update
                </Button>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default UpdateClub;

//export default UpdateProduct
