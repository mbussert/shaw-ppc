import React from "react";
import Header from "../../components/Header";
import ProjectList from "../../components/ProjectList";
import ProjectDetails from "../../components/ProjectDetails";
import { Grid, Paper, Container } from "@material-ui/core";

function Account() {
  return (
    <div>
      <Header />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4} md={2} lg={2} xl={2}>
          <ProjectList />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={8}
          lg={8}
          xl={12}
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Container
            disableGutters
            justify="center"
            alignItems="center"
            maxWidth="md"
            style={{ paddingBottom: 40 }}
          >
            <ProjectDetails />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Account;
