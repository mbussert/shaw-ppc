import React from "react";
import {
  Grid,
  ListItem,
  Divider,
  ListItemText,
  List,
  Button,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100vw",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    height: "100%",
  },
}));

function ProjectList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center">
        <Paper elevation={3}>
          <Grid item>
            <List>
              {props.orders.map((order) => {
                return (
                  <>
                    <ListItem button>
                      <ListItemText primary={order.projectTitle} />
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
            </List>
          </Grid>
          <Grid
            container
            item
            justify="center"
            style={{ paddingTop: 30, paddingBottom: 46 }}
          >
            <Button color="primary" variant="contained" href="/Calculator">
              New Project
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default ProjectList;
