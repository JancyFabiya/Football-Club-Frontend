import React, { Fragment, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function ClubCard({ club }) {





  // const options = {
  //   size: "small",
  //   // value: product.ratings,
  //   readOnly: true,
  //   precision: 0.5,
  // };

  return (


    <Link className="productCard" to={`/user/club/${club._id}`}>
      <img src={club.logo[0].url} alt="" />

      <p>{club.clubName}</p>
      <div>
        <span className="productCardSpan">
          {" "}
        </span>
      </div>

    </Link>

  );
}

export default ClubCard;
