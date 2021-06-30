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
import Project from "../../components/Project";

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

  // const [formObject, setFormObject] = useState({
  //   material: "Material WC-J3",
  // });

  const [loginStatus, setLoginStatus] = useState([]);

  useEffect(() => {
    loadStatus();
  }, []);

  function loadStatus() {
    API.authenticateUser()
      .then((response) => {
        setLoginStatus(response.data.login);
      })
      .catch((err) => console.log(err));
  }

  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value });
  // }

  // function validateFormSubmission(event) {
  //   event.preventDefault();

  //   // Validation steps -- could refactor into a switch statement if desired

  //   if (!formObject.projectTitle) {
  //     alert("Please enter a project title.");
  //     return;
  //   }
  //   if (!formObject.firstName) {
  //     alert("Please enter a first name for the order.");
  //     return;
  //   }
  //   if (!formObject.lastName) {
  //     alert("Please enter a last name for the order.");
  //     return;
  //   }
  //   if (!formObject.email) {
  //     alert("Please enter an email for the order.");
  //     return;
  //   }
  //   if (!formObject.phone) {
  //     alert("Please enter a phone number for the order.");
  //     return;
  //   }
  //   if (!formObject.width) {
  //     alert("Please enter a valid width for the order.");
  //     return;
  //   }
  //   if (!formObject.height) {
  //     alert("Please enter a valid height for the order.");
  //     return;
  //   }

  //   postResponse();
  // }

  // function postResponse() {
  //   // If the calculation is true, then the order is posted to the database
  //   console.log(
  //     `Thanks for posting your project! Based on the measurements you entered, your project requires a total of ${Arithmetic.calculate(
  //       formObject.width,
  //       formObject.height
  //     )} linear feet of material.`
  //   );
  //   console.log("View the order locally at localhost:3001/api/orders");

  //   API.saveOrder({
  //     projectTitle: formObject.projectTitle,
  //     firstName: formObject.firstName,
  //     lastName: formObject.lastName,
  //     email: formObject.email,
  //     phone: formObject.phone,
  //     material: formObject.material,
  //     width: formObject.width,
  //     height: formObject.height,
  //   }).catch((err) => console.log(err));
  // }

  // function clearForm() {
  //   setFormObject({ ...initialState });
  // }

  // function borderToggle() {
  //   if (border.checked) {
  //     console.log("Checked");
  //     setFormObject({ ...formObject, border: false });
  //     console.log(formObject);
  //   } else {
  //     console.log("Unchecked");
  //     setFormObject({ ...formObject, border: true });
  //     console.log(formObject);
  //   }
  // }

  return (
    <>
      <Navbar loginStatus={loginStatus} />
      <Header />
      <Project />
    </>
  );
}

export default Calculator;
