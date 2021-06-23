import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import API from "../../utils/API";

import ProjectList from "../../components/ProjectList";
import ProjectDetails from "../../components/ProjectDetails";
import { Grid, Container, Divider } from "@material-ui/core";

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
    <div>
      <div style={{ paddingBottom: 70 }}></div>
      <Header />
      <Container disableGutters maxWidth={false} style={{ marginBottom: 40 }}>
        <Grid container direction="row" spacing={5}>
          <Grid item xs={12} md={3} lg={3} xl={3} style={{ marginBottom: 15 }}>
            <ProjectList />
          </Grid>
          <Grid item xs={12} md={9} lg={9} xl={9}>
            <Container disableGutters>
              <ProjectDetails />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Account;
