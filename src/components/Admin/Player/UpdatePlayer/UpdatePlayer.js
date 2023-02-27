import React, { Fragment, useState } from "react";
import "./UpdatePlayer.css";
import { useDispatch, useSelector } from "react-redux";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../../../layout/Loader/Loader";
import Sidebar from "../../Sidebar/Sidebar";
import { getAllClubAction, getPlayerDetailsAction, updatePlayerAction } from "../../../../redux/slices/adminSlices";


function UpdateManager() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { loading, appErr, serverErr, allClub, player, updatePlayer } = useSelector(
    (store) => store?.admin
  );

  console.log('player', player);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [description, setDescription] = useState("");
  const [clubName, setClubName] = useState("");

  const [avatar, setAvatar] = useState([]);
  const [avatarPreviw, setAvatarPreviw] = useState([]);




  const [oldImages, setOldImages] = useState([]);



  const playerId = id;

  useEffect(() => {
    if (player == undefined) {
      dispatch(getPlayerDetailsAction(playerId));
    } else {
      setName(player.user.name);
      setDescription(player.user.description);
      setAge(player.user.age);
      setClubName(player.user.clubName);
      setOldImages(player.user.avatar);
    }


    dispatch(getAllClubAction(" "));
  }, [
    dispatch,
    player,
    playerId
  ]);


  useEffect(() => {
    if (updatePlayer?.success == true) {
      navigate('/admin/players')
    };
  }, [updatePlayer]);


  const updatePlayerSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("age", age);
    myForm.set("description", description);
    myForm.set("clubName", clubName);

    avatar.forEach((image) => {
      myForm.append("avatar", image);
    });
    const upplayer = { playerId, myForm }
    dispatch(updatePlayerAction(upplayer));
  };

  const createPlayerImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setAvatar([]);
    setAvatarPreviw([]);
    setOldImages([]);


    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreviw((old) => [...old, reader.result]);
          setAvatar((old) => [...old, reader.result]);
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
                onSubmit={updatePlayerSubmitHandler}
              >
                <h1>Update Player</h1>
                <div>
                  <SpellcheckIcon />
                  <input
                    type="text"
                    placeholder="Player Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <ManageAccountsIcon />
                  <input
                    type="number"
                    placeholder="Age"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div>
                  <DescriptionIcon />
                  <textarea
                    placeholder="Profile Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="1"
                  ></textarea>
                </div>




                <div>
                  <AccountTreeIcon />
                  <select onChange={(e) => setClubName(e.target.value)} value={clubName}>
                    <option value="">Choose Club</option>

                    {allClub &&
                      allClub?.club.map((option) => (
                        <option key={option.value} value={option.clubName}>
                          {option.clubName}
                        </option>
                      ))}
                  </select>
                </div>



                <div id="createProductFormFile">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={createPlayerImagesChange}
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
                  {avatarPreviw.map((image, index) => (
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

export default UpdateManager;

