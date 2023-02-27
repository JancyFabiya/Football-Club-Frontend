import React, { Fragment, useEffect } from "react";
import "./Manager.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../layout/Loader/Loader";
import ProductCard from "../../Home/ClubCard";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";
import { getAllManagerAction } from "../../../redux/slices/userSlices";
import UserCard from "../UserCard";



function Manager() {
  const { clubName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 250000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const { loading, appErr, serverErr, allManager } = useSelector(
    (store) => store?.user
  );
  console.log('allManager', allManager);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {


    dispatch(getAllManagerAction(clubName));
  }, [dispatch]);


  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

          <h2 className="productsHeading">Managers</h2>
          <div className="products">

            {allManager ?
              (
                allManager &&
                allManager?.user.map((user, index) => (
                  <UserCard user={user} key={index} />
                ))
              ) : (
                <h4 className="productsHeadingForNoRecord">We will have products soon...</h4>
              )}



          </div>


        </Fragment>
      )}
    </Fragment>
  );
}
export default Manager;
