import React from "react";
import {
  Container,
  ListItem,
  Divider,
  ListItemText,
  List,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
  },
}));

function ProjectList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Project List</h1>
      <List>
        <ListItem button>
          <ListItemText primary="Custom Wall 1" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Custom Wall 2" />
        </ListItem>
      </List>
    </div>
  );
}

export default ProjectList;
