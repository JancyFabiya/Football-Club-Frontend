import React, { Fragment } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

import "./ManagerList.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import Loader from "../../../layout/Loader/Loader";
import Sidebar from "../../Sidebar/Sidebar";
import { deleteManagerAction, getAllManagerAction } from "../../../../redux/slices/adminSlices";

function ManagerList() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading, appErr, serverErr, allManager, dleteManager } = useSelector(
    (store) => store?.admin
  );

  const deleteManagerHandler = (id) => {
    dispatch(deleteManagerAction(id));
  }

  useEffect(() => {
    if (dleteManager?.success == true) {
      navigate(`/admin/managers`);
    }


    dispatch(getAllManagerAction(""))
  }, [dispatch, dleteManager])


  const columns = [
    { field: "id", headerName: "Manager ID", minWidth: 200, flex: 0.5 },
    { field: "name", headerName: "Name", minWidth: 350, flex: 1 },
    { field: "age", headerName: "Age", minWidth: 150, flex: 0.3, type: "number" },
    { field: "description", headerName: "Description", minWidth: 270, flex: 0.5, },
    { field: "club", headerName: "Club", minWidth: 270, flex: 0.5 },
    {
      field: "action", headerName: "Action", minWidth: 150, flex: 0.3, type: "number", sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/manager/${params.getValue(params.id, "id")}`}>

              <EditIcon />
            </Link>
            <Button
              onClick={() => deleteManagerHandler(params.getValue(params.id, "id"))}
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        )
      }

    },
  ];

  const rows = [];

  allManager && allManager.user.forEach((item) => {
    rows.push({
      id: item._id,
      age: item.age,
      description: item.description,
      club: item.clubName,
      name: item.name,
    })
  })


  return (
    <Fragment>

      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <div className="dashboard">
            <Sidebar />
            <div className="productListContainer">
              <h1 id="productListHeading">ALL Managers</h1>
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
    </Fragment>
  )
}

export default ManagerList;
