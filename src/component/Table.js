import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";

const columns = [
  {
    field: "avatar",
    renderHeader: (params) => (
      <b style={{ fontSize: "15px", fontFamily: "Poppins" }}>{"User "}</b>
    ),
    width: 300,
    renderCell: (params) => <Avatar src={params.value} variant="round" />,
  },
  {
    field: "email",
    renderHeader: (params) => (
      <b style={{ fontSize: "15px", fontFamily: "Poppins" }}>{"Email "}</b>
    ),
    width: 400,
  },
  {
    field: "createdAt",
    renderHeader: (params) => (
      <b style={{ fontSize: "15px", fontFamily: "Poppins" }}>{"Created At "}</b>
    ),
    width: 300,
  },
];

export default function Table({ tableData }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid
          style={{ fontFamily: "Poppins" }}
          rows={tableData}
          columns={columns}
          checkboxSelection
          hideFooterPagination
          hideFooterSelectedRowCount
        />
      </div>
    </div>
  );
}
