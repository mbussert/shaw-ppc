import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import { DataGrid } from "@material-ui/data-grid";
import { IconButton, Grid } from "@material-ui/core";
import { Delete, AssignmentTurnedIn } from "@material-ui/icons";
import API from "../../../utils/API";

// const rows = [
//   {
//     id: 1,
//     date: "06/24/2021",
//     email: "elvis@gmail.com",
//     phone: "(555)555-5555",
//     lastName: "Presley",
//     firstName: "Elvis",
//     projectTotal: "200 ft",
//   },
//   {
//     id: 2,
//     date: "06/25/2021",
//     email: "elvis@gmail.com",
//     phone: "(555)555-5555",
//     lastName: "Presley",
//     firstName: "Elvis",
//     projectTotal: "200 ft",
//   },
//   {
//     id: 3,
//     date: "06/22/2021",
//     email: "elvis@gmail.com",
//     phone: "(555)555-5555",
//     lastName: "Presley",
//     firstName: "Elvis",
//     projectTotal: "200 ft",
//   },
//   {
//     id: 4,
//     date: "06/23/2021",
//     email: "elvis@gmail.com",
//     phone: "(555)555-5555",
//     lastName: "Presley",
//     firstName: "Elvis",
//     projectTotal: "200 ft",
//   },
//   {
//     id: 5,
//     date: "06/25/2021",
//     email: "elvis@gmail.com",
//     phone: "(555)555-5555",
//     lastName: "Presley",
//     firstName: "Elvis",
//     projectTotal: "200 ft",
//   },
//   {
//     id: 6,
//     date: "06/24/2021",
//     email: "elvis@gmail.com",
//     phone: "(555)555-5555",
//     lastName: "Presley",
//     firstName: "Elvis",
//     projectTotal: "200 ft",
//   },
//   {
//     id: 7,
//     date: "06/21/2021",
//     email: "elvis@gmail.com",
//     phone: "(555)555-5555",
//     lastName: "Presley",
//     firstName: "Elvis",
//     projectTotal: "200 ft",
//   },
//   {
//     id: 8,
//     date: "06/20/2021",
//     email: "elvis@gmail.com",
//     phone: "(555)555-5555",
//     lastName: "Presley",
//     firstName: "Elvis",
//     projectTotal: "200 ft",
//   },
// ];

export default function Orders() {
  const [tableData, setTableData] = useState([]);

  const [selection, setSelection] = React.useState([]);
  const [deletedRows, setDeletedRows] = useState([]);

  const handlePurge = () => {
    setDeleted([...deleted, ...selection]);
    setItems(items.filter((i) => !selection.some((s) => s.id === i.id)));
    setSelection([]);
  };

  useEffect(() => {
    API.getOrders()
      .then((res) => {
        setTableData(res.data);
      })
      .catch((error) => {
        console.log("Error retrieving order data.");
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 91 },
    {
      field: "date",
      headerName: "Date",
      width: 130,
      type: "date",
      editable: false,
    },
    {
      field: "projectTitle",
      headerName: "Project Title",
      width: 160,
      type: "string",
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
      headerName: "Project Size (Linear Ft)",
      width: "110",
    },
  ];

  let rows = [];

  tableData.map((order) =>
    rows.push({
      id: order.id,
      projectTitle: order.projectTitle,
      phone: order.phone,
      lastName: order.lastName,
      firstName: order.firstName,
      email: order.email,
      date: new Date(order.createdAt).toLocaleDateString(),
      projectTotal: order.linearFeet,
    })
  );

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Title>Recent Orders </Title>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="mark completed"
            onClick={handlePurge}
            color="action"
          >
            <AssignmentTurnedIn fontSize="medium" />
          </IconButton>

          <IconButton
            aria-label="delete row"
            onClick={handlePurge}
            color="secondary"
            fontSize="medium"
          >
            <Delete />
          </IconButton>
        </Grid>
      </Grid>

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
          onSelectionModelChange={({ selectionModel }) => {
            const rowIds = selectionModel.map((rowId) =>
              parseInt(String(rowId), 10)
            );
            const rowsToDelete = rows.filter((row) => rowIds.includes(row.id));
            setDeletedRows(rowsToDelete);
          }}
        />
      </div>
    </React.Fragment>
  );
}
