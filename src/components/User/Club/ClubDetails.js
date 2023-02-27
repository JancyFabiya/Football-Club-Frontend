import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ClubDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../layout/Loader/Loader";
import { getClubDetailsAction } from "../../../redux/slices/userSlices";

function ClubDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, appErr, serverErr, club } = useSelector(
    (store) => store?.user
  );

  useEffect(() => {

    dispatch(getClubDetailsAction(id));

  }, [dispatch]);

  


  const allManagerHandler = (clubName) => {
    console.log('in club name', clubName);
    navigate(`/user/manager/${clubName}`)
  }
  const allPlayerHandler = (clubName) => {
    navigate(`/user/player/${clubName}`)
  }

  return (
    <Fragment>
      {loading  ? (
        <Loader />
      ) : (
        <>

          <div className="productDetails">
            <div>
              <Carousel>
                {club?.club &&
                  club.club.logo.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div>
              <div className="detailsBlock-1">
                <h2>{club?.club.clubName}</h2>
                <p>Club Name # </p>
              </div>
              <p>Club Description:</p>

              <div className="detailsBlock-2">
                <h1 >{club?.club.description}</h1>
              </div>
              <div className="detailsBlock-3">
                <span className="detailsBlock-2-span">Founded on : {club?.club.founded}</span>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">

                  </div>


                  <button
                    onClick={() => allManagerHandler(club?.club.clubName)}
                  >
                    Managers
                  </button>
                  <button
                    onClick={() => allPlayerHandler(club?.club.clubName)}
                  >
                    Players
                  </button>


                </div>

              </div>

            </div>

          </div>
        </>
      )}
    </Fragment>
  );
}

export default ClubDetails;
