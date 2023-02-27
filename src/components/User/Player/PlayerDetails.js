import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./PlayerDetails.css";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../layout/Loader/Loader";

import FavoriteIcon from '@mui/icons-material/Favorite';
import { getPlayerDetailsAction } from "../../../redux/slices/userSlices";

function PlayerDetails() {
  const { id } = useParams();
  console.log('mngn id', id);
  console.log('getManagerDetailsAction', id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, appErr, serverErr, player } = useSelector(
    (store) => store?.user
  );
  console.log('player det', player);
  useEffect(() => {

    dispatch(getPlayerDetailsAction(id));



  }, [dispatch]);



  const [open, setOpen] = useState(false);


  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  }



  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>

          <div className="productDetails">
            <div>
              <Carousel>
                {player &&
                  player?.user?.avatar.map((item, i) => (
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
                <h2>{player?.user.name}</h2>
                <p>Player # </p>
              </div>
              <p>Profile Description:</p>

              <div className="detailsBlock-2">
                <h1> {player?.user?.description}</h1>

              </div>
              <div className="detailsBlock-3">
                <span className="detailsBlock-2-span">Age: {player?.user.age}</span>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">

                  </div>





                </div>

              </div>

            </div>
          </div>

        </>
      )}

    </Fragment>
  );
}

export default PlayerDetails;
