import React, { useState } from "react";
import API from "../../utils/API";
import {
  Container,
  Button,
  TextField,
  Select,
  MenuItem,
  Divider,
  FormControl,
  FormHelperText,
  Tooltip,
  Grid,
  Card,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: "25ch",
//   },
// }));

function Calculator() {
  // const classes = useStyles();

  const initialState = {
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    material: "Material WC-J3",
    width: null,
    height: null,
    border: true,
  };

  const [formObject, setFormObject] = useState(initialState);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject((prevState) => ({ ...prevState, [name]: value }));

    console.log(formObject);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.body) {
      console.log("POST is OK");
      API.saveOrder({
        title: formObject.title,
        firstname: formObject.firstname,
      }).catch((err) => console.log(err));
    }
  }

  function clearForm() {
    setFormObject({ ...initialState });
  }

  function borderToggle() {
    if (border.checked) {
      console.log("Checked");
      setFormObject({ ...formObject, border: false });
      console.log(formObject);
    } else {
      console.log("Unchecked");
      setFormObject({ ...formObject, border: true });
      console.log(formObject);
    }
  }

  return (
    <Container maxWidth="sm">
      <h1>Calculator</h1>
      <Card style={{ padding: 20 }} margin="normal" raised={true}>
        <div className="calculator">
          <form autoComplete="off">
            <Grid container justify="flex-end">
              <Grid item>
                <Tooltip
                  title="You may use a unique project name or feel free to simply use your store name/number."
                  placement="right"
                >
                  <InfoIcon color="primary" />
                </Tooltip>
              </Grid>
            </Grid>
            <Grid container justify="center">
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
                required
              />

              <TextField
                id="firstname"
                label="First Name"
                variant="outlined"
                name="firstname"
                onChange={handleInputChange}
                helperText="Please enter your first name."
                style={{ margin: 8 }}
                margin="normal"
                required
              />
              <TextField
                id="lastname"
                label="Last Name"
                variant="outlined"
                name="lastname"
                onChange={handleInputChange}
                helperText="Please enter your last name."
                style={{ margin: 8 }}
                margin="normal"
                required
              />
              <TextField
                id="email"
                label="Email Address"
                variant="outlined"
                name="email"
                onChange={handleInputChange}
                helperText="Please enter your email address."
                style={{ margin: 8 }}
                margin="normal"
                required
              />
              <TextField
                id="phone"
                label="Phone Number"
                variant="outlined"
                name="phone"
                type="text"
                onChange={handleInputChange}
                helperText="e.g. (555)555-5555"
                style={{ margin: 8 }}
                margin="normal"
                required
              />

              <FormControl fullWidth style={{ margin: 8 }} margin="normal">
                <Select disabled defaultValue={1} variant="outlined">
                  <MenuItem value={1}>Material WC-J3</MenuItem>
                </Select>
                <FormHelperText style={{ margin: 8 }}>Required</FormHelperText>
              </FormControl>
            </Grid>
            <Divider style={{ margin: 20 }} margin="normal" variant="middle" />
            <Grid container spacing={2} justify="center">
              <Grid item xs={6} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  id="width"
                  label="Width"
                  variant="outlined"
                  name="width"
                  type="number"
                  onChange={handleInputChange}
                  style={{ margin: 8 }}
                  margin="normal"
                  helperText="Inches"
                />
                <TextField
                  id="height"
                  label="Height"
                  variant="outlined"
                  name="height"
                  onChange={handleInputChange}
                  type="number"
                  style={{ margin: 8 }}
                  margin="normal"
                  helperText="Inches"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={borderToggle}
                      name="border"
                      id="border"
                      color="primary"
                      defaultChecked
                      margin="dense"
                    />
                  }
                  label="Add 6 inch border (recommended)"
                />
              </Grid>
              <Grid container justify="center">
                <Grid item style={{ paddingBottom: 25 }}>
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
                    onClick={() => clearForm()}
                    style={{ margin: 8 }}
                    margin="normal"
                  >
                    Clear
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default Calculator;
