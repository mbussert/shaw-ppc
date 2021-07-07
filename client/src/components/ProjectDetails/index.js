import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Typography,
  Divider,
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
  h3: {
    lineHeight: "1.5rem",
  },
}));

function ProjectDetails(props) {
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
        <Grid container item justify="center">
          {props.orders.map((order) => {
            return (
              <Card
                style={{ backgroundColor: "#c4c4c420", color: "white", borderRadius: "2rem", border: "solid 2px #da9f63", boxShadow: "0 7.6vh 10.6vh -3.0vh rgba(0, 0, 0, 0.85)", padding: 15, margin: 20, width: 345 }}
                margin="dense"
                raised={true}
              >
                <Grid container item justify="center">
                  <CardHeader title={order.projectTitle} />
                </Grid>

                <Divider />
                <CardContent>
                  <h3 className={classes.h3}>Project ID: {order.id}</h3>
                  <h3 className={classes.h3}>
                    Created: {new Date(order.createdAt).toLocaleDateString()}
                  </h3>

                  <h3 className={classes.h3}>{order.material}</h3>
                  <h3 className={classes.h3}>Height: {order.height} (in)</h3>
                  <h3 className={classes.h3}>Width: {order.width} (in)</h3>
                  <h3 className={classes.h3}>
                    Border: {order.border ? "Yes" : "No"}
                  </h3>
                  <h3 className={classes.h3}>
                    Total Linear Feet: {order.linearFeet} (LFT)
                  </h3>
                </CardContent>
                <Divider />
                <CardActions>
                  <Grid item container justify="center">
                    <button
                      size="large"
                      onClick={(event) => props.deleteOrderFromDatabase(event)}
                      value={order.id}
                      variant="contained"
                      style={{
                        backgroundColor: "#D89D62",
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: 600,
                        marginTop: 10,
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                        borderRadius: "5px",
                        border: "transparent",
                        cursor: "pointer"
                      }}
                    >
                      DELETE PROJECT
                    </button>
                  </Grid>
                </CardActions>
              </Card>
            );
          })}
        </Grid>
        <Grid container item justify="center" style={{ marginTop: 20 }}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#c4c4c420", color: "white", border: "solid 2px #da9f63", boxShadow: "0 7.6vh 10.6vh -3.0vh rgba(0, 0, 0, 0.85)", marginRight: 10 }}
            href="/Calculator"
          >
            New Project
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectDetails;
