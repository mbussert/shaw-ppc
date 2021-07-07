import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import API from "../../utils/API";
import ProjectDetails from "../../components/ProjectDetails";
import { Grid, Container, Divider } from "@material-ui/core";

let userId;

function Account() {
  const [orders, setOrders] = useState([]);
  const [loginStatus, setLoginStatus] = useState([]);

  useEffect(() => {
    loadStatus();
  }, []);

  function loadOrders(userId) {
    API.getOrdersById(userId)
      .then((res) => {
        if (res.data.length === 0) {
          console.log("No orders found.");
        }
        if (res.data.status === "error") {
          throw console.log(res.data.message);
        }
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadStatus() {
    API.authenticateUser()
      .then((response) => {
        // Users that are not logged in cannot visit the Account page

        if (response.data === false) {
          location.replace("/Login");
          return;
        }

        setLoginStatus(response.data.login);
        userId = response.data.userId;
        loadOrders(userId);
      })
      .catch((err) => console.log(err));

    return;
  }

  function deleteOrderFromDatabase(event) {
    event.preventDefault();

    API.deleteOrder(event.target.value)
    .then(res => loadOrders(userId))
    .catch(err => console.log(err));
  }

  return (
    <div>
      <div style={{ paddingBottom: 70 }}></div>
      <Navbar loginStatus={loginStatus} />
      <Header />

      <Container disableGutters maxWidth="lg" style={{ marginBottom: 40 }}>
        <Grid container spacing={5} justify="center">
          <Grid item xs={12} md={9} lg={9} xl={9}>
            {orders.length <= 0 ? (
              <h1 className="header-text">No Orders to Display</h1>
            ) : (
              <ProjectDetails deleteOrderFromDatabase={deleteOrderFromDatabase} orders={orders} />
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Account;
