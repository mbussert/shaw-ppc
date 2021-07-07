import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
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
  Hidden,
} from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import Arithmetic from "./arithmetic.js";
import Modal from "../../components/modal/Modal";
import useModal from "../../components/modal/useModal";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Prompt } from "react-router-dom";
import { placeholder } from "sequelize/types/lib/operators";

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

  const [formObject, setFormObject] = useState({
    material: "Material WC-J3",
    border: true,
  });

  const [loginStatus, setLoginStatus] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadStatus();
  }, []);

  function loadStatus() {
    API.authenticateUser()
      .then((response) => {
        setLoginStatus(response.data.login);
      })
      .catch((err) => console.log(err));
  }

  const [orderAlert, setOrderAlert] = useState({
    displaySnackbar: false,
  });

  const [successAlert, setSuccessAlert] = useState({
    displaySnackbar: false,
  });

  function alphabeticalOnly(event) {
    const alphabeticalValidation = /^[a-zA-Z]+$/;
    const azResult = alphabeticalValidation.test(event);
    return azResult;
  }

  function emailOnly(event) {
    const emailValidation = /^[a-zA-Z0-9@.]*$/;
    const emailResult = emailValidation.test(event);
    return emailResult;
  }

  function phoneOnly(event) {
    const phoneValidation = /^[0-9()-]*$/;
    const phoneResult = phoneValidation.test(event);
    return phoneResult;
  }

  function numberOnly(event) {
    const decimalValidation = /^\d+(\.\d{1,4})?$/;
    const decResult = decimalValidation.test(event);
    return decResult;
  }

  function handleInputChange(event) {
    if (event.target.name === "firstName" || event.target.name === "lastName") {
      const checkName = alphabeticalOnly(event.target.value);
      if (checkName === false) {
        event.target.value = event.target.value.substring(
          0,
          event.target.value.length - 1
        );
      }
    }

    if (event.target.name === "email") {
      const checkEmail = emailOnly(event.target.value);
      if (checkEmail === false) {
        event.target.value = event.target.value.substring(
          0,
          event.target.value.length - 1
        );
      }
    }

    if (event.target.name === "phone") {
      const checkPhone = phoneOnly(event.target.value);
      if (checkPhone === false) {
        event.target.value = event.target.value.substring(
          0,
          event.target.value.length - 1
        );
      }
    }

    if (event.target.name === "width" || event.target.name === "height") {
      const checkNum = numberOnly(event.target.value);
      if (checkNum === false) {
        event.target.value = event.target.value.substring(
          0,
          event.target.value.length - 1
        );
      }
    }

    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function validateFormSubmission(event) {
    event.preventDefault();

    // Validation steps -- could refactor into a switch statement if desired

    if (!formObject.projectTitle) {
      alert("Please enter a project title.");
      return;
    }
    if (!formObject.firstName) {
      alert("Please enter a first name for the order.");
      return;
    }
    if (!formObject.lastName) {
      alert("Please enter a last name for the order.");
      return;
    }
    if (!formObject.email) {
      alert("Please enter an email for the order.");
      return;
    }
    if (!formObject.phone) {
      alert("Please enter a phone number for the order.");
      return;
    }
    if (!formObject.width) {
      alert("Please enter a valid width for the order.");
      return;
    }
    if (!formObject.height) {
      alert("Please enter a valid height for the order.");
      return;
    }

    postResponse();
  }

  function postResponse() {
    // If the calculation is true, then the order is posted to the database
    console.log(
      `Thanks for posting your project! Based on the measurements you entered, your project requires a total of ${Arithmetic.calculate(
        formObject.width,
        formObject.height,
        formObject.border
      )} linear feet of material.`
    );

    API.saveOrder({
      projectTitle: formObject.projectTitle,
      firstName: formObject.firstName,
      lastName: formObject.lastName,
      email: formObject.email,
      phone: formObject.phone,
      material: formObject.material,
      width: formObject.width,
      height: formObject.height,
      border: formObject.border,
    })
      .then(
        (response) => {
          if (response.status === 200) {
            setOpen(true);
            setSuccessAlert({ displaySnackbar: true });
            clearForm();
          }
        },
        () => {
          setOpen(true);
          setOrderAlert({ displaySnackbar: true });
          return;
        }
      )
      .catch((err) => console.log(err));
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOrderAlert(false);
    setSuccessAlert(false);
  };

  function clearForm() {
    setFormObject({
      projectTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      material: "Material WC-J3",
      width: "",
      height: "",
      border: true,
    });

    document.getElementById("calculator-form").reset();
  }

  function borderToggle() {
    if (border.checked) {
      setFormObject({ ...formObject, border: true });
    } else {
      setFormObject({ ...formObject, border: false });
    }
  }

  const { isShowing, toggle } = useModal();

  function showModal() {
    if (loginStatus != "The user is logged in.") {
      return <Modal isShowing={isShowing} />;
    } else {
      return null;
    }
  }

  // Determines if the user has input a value into the form
  // Used only when a user navigates away from the page when the form is partially filled out
  function checkForm() {
    if (
      formObject.projectTitle ||
      formObject.firstName ||
      formObject.lastName ||
      formObject.email ||
      formObject.width ||
      formObject.height
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Navbar loginStatus={loginStatus} />
      <Header />
      {showModal()}

      {successAlert.displaySnackbar === true ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Your order has been submitted. Thank you!
          </Alert>
        </Snackbar>
      ) : null}

      {orderAlert.displaySnackbar === true ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="warning">
            Failed to submit your order. Please try again.
          </Alert>
        </Snackbar>
      ) : null}

      <Prompt
        when={checkForm()}
        message="Are you sure you want to leave this page? Your order will not be saved."
      />

      <Container maxWidth="sm" style={{ paddingBottom: 50 }}>
        <Card style={{ backgroundColor: "#c4c4c420", color: "white", borderRadius: "2rem", border: "solid 2px #da9f63", padding: 20 }} margin="dense" raised={true}>
          <div className="calculator">
            <form id="calculator-form" autoComplete="off">
              <Grid container justify="flex-end">
                <Hidden xsDown>
                  <Grid item>
                    <Tooltip
                      title="You may use a unique project name or feel free to simply use your store name/number."
                      placement="right"
                    >
                      <InfoIcon style={{color: "#da9f63"}} />
                    </Tooltip>
                  </Grid>
                </Hidden>
              </Grid>
              <Grid container justify="center">
                <TextField
                  id="title"
                  label="Title"
                  variant="outlined"
                  name="projectTitle"
                  onChange={handleInputChange}
                  helperText="Please enter a title for your project."
                  style={{ color: "white", margin: 8 }}
                  margin="dense"
                  fullWidth
                  required
                />

                <TextField
                  id="firstname"
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  onChange={handleInputChange}
                  helperText="Please enter your first name."
                  style={{ margin: 8 }}
                  margin="dense"
                  required
                />
                <TextField
                  id="lastname"
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  onChange={handleInputChange}
                  helperText="Please enter your last name."
                  style={{ margin: 8 }}
                  margin="dense"
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
                  margin="dense"
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
                  margin="dense"
                  required
                />

                <FormControl fullWidth style={{ margin: 8 }} margin="dense">
                  <Select disabled defaultValue={1} variant="outlined">
                    <MenuItem value={1}>Material WC-J3</MenuItem>
                  </Select>
                  <FormHelperText style={{ margin: 8 }}>
                    Required
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Divider
                style={{ margin: 20 }}
                margin="normal"
                variant="middle"
              />
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
                        style={{color: "#da9f63"}} 
                        defaultChecked
                        margin="dense"
                      />
                    }
                    label="Add 6 inch border (recommended)"
                  />

                  <Hidden xsDown>
                    <Tooltip
                      title="Adds a 6 inch margin (3 inches on top and bottom)."
                      placement="right"
                    >
                      <InfoIcon style={{color: "#da9f63"}}  />
                    </Tooltip>
                  </Hidden>
                </Grid>

                <Grid container justify="center">
                  <Grid item style={{ paddingBottom: 25 }}>
                    <Button
                      variant="contained"
                      size="medium"
                      disableElevation
                      onClick={validateFormSubmission}
                      style={{ backgroundColor: "#da9f63", color: "white", margin: 8 }}
                      margin="normal"
                    >
                      Calculate
                    </Button>
                    <Button
                      variant="contained"
                      size="medium"
                      disableElevation
                      onClick={() => clearForm()}
                      style={{ backgroundColor: "#c4c4c420", color: "white", border: "solid 2px #da9f63", margin: 8 }}
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
    </>
  );
}

export default Calculator;
