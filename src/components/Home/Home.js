import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import ClubCard from "./ClubCard";
import { getAllClubAction } from "../../redux/slices/userSlices";


function Home() {

  const dispatch = useDispatch();
  const { loading, appErr, serverErr, allClub } = useSelector(
    (store) => store?.user
  );
  useEffect(() => {


    dispatch(getAllClubAction(" "));
  }, [dispatch]);



  return (
    <Fragment>

      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <div className="banner">
            <p>Welcome to FOOTBALL-CLUB</p>
            <h1>FIND AMAZING CLUBS BELOW</h1>
            <a href="#clubs">
              <button>
                Click <CgMouse />{" "}
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Clubs</h2>
          <div className="container" id="clubs">
            {allClub &&
              allClub.club.map((club, index) => <ClubCard club={club} key={index} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
