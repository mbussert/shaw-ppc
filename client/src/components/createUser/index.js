import React, { useState } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function CreateUser() {
  const [userObject, setUser] = useState({});

  const [createAlert, setCreateAlert] = useState({
    displaySnackbar: false
  });

  function alphabeticalOnly(event) {
    const alphabeticalValidation = /^[a-zA-Z]+$/
    const azResult = alphabeticalValidation.test(event);
    return azResult;
  }

  function emailOnly(event) {
    const emailValidation = /^[a-zA-Z0-9@.]*$/
    const emailResult = emailValidation.test(event);
    return emailResult
  }

  function handleInputChange(e) {

    if(e.target.name === "first" || e.target.name === "last") {
      const checkName = alphabeticalOnly(e.target.value);
      if(checkName === false) {
        e.target.value = e.target.value.substring(0, e.target.value.length - 1);
      }
    }

    if(e.target.name === "email") {
      const checkEmail = emailOnly(event.target.value);
      if(checkEmail === false) {
        e.target.value = e.target.value.substring(0, e.target.value.length - 1);
      }
    }

    const { name, value } = e.target;
    setUser({ ...userObject, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if(!userObject.first || !userObject.last || !userObject.email) {
      alert("You are missing a required input field. Please try again.")
    }

    if(userObject.pass1 !== userObject.pass2) {
      alert("Your passwords do not match. Please try again.");
      return;
    }

    if (userObject.first && userObject.last && userObject.email) {
      API.saveUser({
        first: userObject.first,
        last: userObject.last,
        email: userObject.email,
        password: userObject.pass1
      })
      .then((res) => {
        if (res.status === 200) {
          location.href = '/Login'
        }
      }, () => {
        // alert("Failed to create an account. Please try again.")
        setOpen(true);
        setCreateAlert({displaySnackbar: true});
      })
      .catch((err) => 
      console.log(err))
    }
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setCreateAlert(false);
  }

  return (

    <div>

      {createAlert.displaySnackbar === true ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="warning">
            Failed to create an account. Please try again.
          </Alert>
        </Snackbar>
      ) : null}

    
    <form className="create-form" onSubmit={handleFormSubmit}>
      <h2 className="create-title">Create an account</h2>
      <div className="userFirst-div">
        <label>First Name</label>
        <input
          className="add-first"
          type="text"
          name="first"
          onChange={handleInputChange}
        />
      </div>

      <div className="userLast-div">
        <label>Last Name</label>
        <input
          className="add-last"
          name="last"
          onChange={handleInputChange}
          type="text"
        />
      </div>

      <div className="userEmail-div">
        <label>Email</label>
        <input
          className="add-email"
          name="email"
          onChange={handleInputChange}
          type="text"
        />
      </div>

      <div className="userPass-div">
        <label>Password</label>
        <input
          className="add-pass"
          name="pass1"
          onChange={handleInputChange}
          type="password"
          placeholder="Password must be 8 characters or more"
        />
      </div>

      <div className="userPass-div-div">
        <label>Re-Enter Password</label>
        <input
          className="pass-add-pass"
          name="pass2"
          onChange={handleInputChange}
          type="password"
        />
      </div>

      <button className="create-btn" type="submit">
        Create an Account
      </button>

      <p className="login-opt">Already have an account? Sign in <Link to="./Login">here</Link>.</p>
    </form>

  </div>
  );
}

export default CreateUser;
