import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 900,
    height: "100%",
  },
  h1: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 25,
  },
}));

function ProjectDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        columns={1}
        direction="column"
        style={{ paddingTop: 5 }}
        justify="center"
      >
        <Grid container item style={{ paddingBottom: 15 }} justify="center">
          <h1 className={classes.h1}>Project Details</h1>
        </Grid>
        <Grid item>
          <Card style={{ padding: 15 }} margin="dense" raised={true}>
            <CardHeader title="Custom Project Name"></CardHeader>
            <CardContent>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="baseline"
                spacing={2}
              >
                <Grid item xs>
                  <h4>Custom Wall Name</h4>
                </Grid>
                <Grid item xs>
                  <h4>Material</h4>
                </Grid>
                <Grid item xs>
                  <h4>45ft</h4>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid container item justify="center">
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{ marginRight: 10 }}
          >
            New Wall
          </Button>
          <Button size="large" variant="contained" color="secondary">
            Delete Project
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectDetails;
