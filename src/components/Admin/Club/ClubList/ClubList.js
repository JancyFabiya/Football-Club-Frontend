import React, { Fragment } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

import "./ClubList.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import Loader from "../../../layout/Loader/Loader";
import Sidebar from "../../Sidebar/Sidebar";
import { deleteClubAction, getAllClubAction } from "../../../../redux/slices/adminSlices";

function ClubList() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, appErr, serverErr, allClub, dleteClub } = useSelector(
    (store) => store?.admin
  );


  const deleteClubHandler = (id) => {
    dispatch(deleteClubAction(id));
  }

  useEffect(() => {
    if (dleteClub?.success == true) {
      navigate(`/admin/clubs`);
    }


    dispatch(getAllClubAction(""))
  }, [dispatch, dleteClub])


  const columns = [
    { field: "id", headerName: "Club ID", minWidth: 200, flex: 0.5 },
    { field: "name", headerName: "Club Name", minWidth: 150, flex: 0.5 },
    { field: "founded", headerName: "Funded", minWidth: 150, flex: 0.3, type: "date" },
    {
      field: "action", headerName: "Action", minWidth: 150, flex: 0.3, type: "number", sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/club/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
            <Button
              onClick={() => deleteClubHandler(params.getValue(params.id, "id"))}
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        )
      }

    },
  ];

  const rows = [];
  console.log('11allclub', allClub);
  allClub && allClub.club.forEach((item) => {
    console.log(item, 'item');
    rows.push({
      id: item._id,
      name: item.clubName,
      founded: item.founded,
      // logo : item.logo,
    })
  })


  return (

    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="dashboard">
          <Sidebar />
          <div className="productListContainer">
            <h1 id="productListHeading">ALL CLUBS</h1>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="productListTable"
              autoHeight
            />
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default ClubList;
