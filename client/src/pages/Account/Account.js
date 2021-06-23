import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import API from "../../utils/API";

import ProjectList from "../../components/ProjectList";
import ProjectDetails from "../../components/ProjectDetails";
import { Grid, Container } from "@material-ui/core";

function Account() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  function loadOrders() {
    // 1 is the first ID locally created in the database (i.e. the first account)
    // 1 is currently hardcoded for testing; need to use React to get the user's ID that is logged in

    API.getOrdersById(1)
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

  return (
    <Container disableGutters maxWidth={false} style={{ marginBottom: 40 }}>
      <Header />
      <Grid container direction="row">
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <ProjectList />
        </Grid>
        <Grid item xs={12} md={8} lg={8} xl={8}>
          <Container disableGutters>
            <ProjectDetails />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Account;
