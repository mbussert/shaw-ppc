import React, { useState } from "react";
import API from "../../utils/API";
import { Container, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

function Calculator() {
  const classes = useStyles();

  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });

    console.log(formObject);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.body) {
      console.log("POST is OK");
      API.saveOrder({
        title: formObject.title,
        body: formObject.body,
      }).catch((err) => console.log(err));
    }
  }

  function clearForm(event) {
    event.preventDefault();
    setFormObject({});
  }

  return (
    <Container maxWidth="sm">
      <h1>Calculator</h1>
      <div className="calculator">
        <form autoComplete="off">
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            name="title"
            onChange={handleInputChange}
            helperText="Please enter a title for your project."
            style={{ margin: 8 }}
            margin="normal"
            fullWidth
          />
          <TextField
            id="body"
            label="Body"
            variant="outlined"
            name="body"
            onChange={handleInputChange}
            style={{ margin: 8 }}
            margin="normal"
          />
          <TextField
            id="number"
            label="Number"
            variant="outlined"
            name="number"
            onChange={handleInputChange}
            type="number"
            style={{ margin: 8 }}
            margin="normal"
          />

          <Button
            variant="contained"
            size="medium"
            disableElevation
            onClick={handleFormSubmit}
            style={{ margin: 8 }}
            margin="normal"
          >
            Calculate
          </Button>
          <Button
            variant="contained"
            size="medium"
            disableElevation
            onClick={clearForm}
            style={{ margin: 8 }}
            margin="normal"
          >
            Clear
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Calculator;
