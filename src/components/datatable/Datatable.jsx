import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, UserRows } from "../../datatablesource";
import "./Datatable.scss";
import { Link } from "react-router-dom";

const paginationModel = { page: 0, pageSize: 8 };
const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div>
              <Link to="/users/action" style={{ textDecoration: "none" }}>
                <button className="viewButton">View</button>
              </Link>
            </div>
            <div>
              <button className="deleteButton">Delete</button>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>

      <DataGrid
      className="datagrid"
        rows={UserRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
