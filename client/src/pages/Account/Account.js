import React from "react";
import Header from "../../components/Header";
import ProjectList from "../../components/ProjectList";
import ProjectDetails from "../../components/ProjectDetails";
import { Grid, Paper } from "@material-ui/core";

function Account() {
  return (
    <div>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <ProjectList />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <ProjectDetails />
        </Grid>
      </Grid>
    </div>
  );
}

export default Account;
