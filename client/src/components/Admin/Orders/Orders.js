import React from "react";
import Title from "../Title/Title";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "date",
    headerName: "Date",
    width: 180,
    type: "date",
    editable: false,
  },
  {
    field: "clientName",
    headerName: "Client",
    width: 160,
    type: "string",
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: false,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
    editable: false,
  },

  {
    field: "projectTotal",
    headerName: "Project Size",
    width: "110",
  },
];

const rows = [
  {
    id: 1,
    date: "06/24/2021",
    email: "elvis@gmail.com",
    phone: "(555)555-5555",
    lastName: "Presley",
    firstName: "Elvis",
    projectTotal: "200 ft",
  },
  {
    id: 2,
    date: "06/25/2021",
    email: "elvis@gmail.com",
    phone: "(555)555-5555",
    lastName: "Presley",
    firstName: "Elvis",
    projectTotal: "200 ft",
  },
  {
    id: 3,
    date: "06/22/2021",
    email: "elvis@gmail.com",
    phone: "(555)555-5555",
    lastName: "Presley",
    firstName: "Elvis",
    projectTotal: "200 ft",
  },
  {
    id: 4,
    date: "06/23/2021",
    email: "elvis@gmail.com",
    phone: "(555)555-5555",
    lastName: "Presley",
    firstName: "Elvis",
    projectTotal: "200 ft",
  },
  {
    id: 5,
    date: "06/25/2021",
    email: "elvis@gmail.com",
    phone: "(555)555-5555",
    lastName: "Presley",
    firstName: "Elvis",
    projectTotal: "200 ft",
  },
  {
    id: 6,
    date: "06/24/2021",
    email: "elvis@gmail.com",
    phone: "(555)555-5555",
    lastName: "Presley",
    firstName: "Elvis",
    projectTotal: "200 ft",
  },
  {
    id: 7,
    date: "06/21/2021",
    email: "elvis@gmail.com",
    phone: "(555)555-5555",
    lastName: "Presley",
    firstName: "Elvis",
    projectTotal: "200 ft",
  },
  {
    id: 8,
    date: "06/20/2021",
    email: "elvis@gmail.com",
    phone: "(555)555-5555",
    lastName: "Presley",
    firstName: "Elvis",
    projectTotal: "200 ft",
  },
];

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          checkboxSelection
          disableSelectionOnClick
          sortingOrder={["desc", "asc"]}
          sortModel={[
            {
              field: "date",
              sort: "asc",
            },
          ]}
        />
      </div>
    </React.Fragment>
  );
}
