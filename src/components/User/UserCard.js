import React, { Fragment, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Rating } from "@mui/material";
import logo from '../../images/logo.jpg'



function UserCard({ user }) {
  console.log('usercard', user);






  return (


    <Link className="productCard" to={`/user/manager/detail/${user._id}`}>
      <img src={user.avatar[0].url} alt="" />

      <p>{user.name}</p>
      <div>
        <span className="productCardSpan">
          {" "}
        </span>
      </div>

    </Link>

  );
}

export default UserCard;
