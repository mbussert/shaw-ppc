import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import API from "../../utils/API";

import ProjectList from "../../components/ProjectList";
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

        if(response.data === false) {
          location.replace("/Login")
          return;
        }

        setLoginStatus(response.data.login);
        userId = response.data.userId;
        loadOrders(userId);
      })
      .catch((err) => console.log(err));

      return;
  }

  return (
    <div>
      <div style={{ paddingBottom: 70 }}></div>
      <Navbar loginStatus={loginStatus} />
      <Header />

      <Container disableGutters maxWidth={false} style={{ marginBottom: 40 }}>
        <Grid container direction="row" spacing={5}>
          <Grid item xs={12} md={3} lg={3} xl={3} style={{ marginBottom: 15 }}>
            <ProjectList />
          </Grid>
          <Grid item xs={12} md={9} lg={9} xl={9}>
            <Container disableGutters>
              {!orders.length ? (
                <h1 className="text-center">No Orders to Display</h1>
              ) : (
                <div>
                  <h2>Orders by this user are mapped in the console!</h2>
                  {orders.map((order) => {
                    return console.log(order);

                    //   Props to pass an Order component to be rendered on the page

                    //  <Order
                    //    key={order.id}
                    //    id={order.id}
                    //    email={order.email}
                    //    firstName={order.firstName}
                    //    height={order.height}
                    //    lastName={order.lastName}
                    //    linearFeet={order.linearFeet}
                    //    material={order.material}
                    //    phone={order.phone}
                    //    projectTitle={order.projectTitle}
                    //  />
                  })}
                </div>
              )}
              <ProjectDetails />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Account;
