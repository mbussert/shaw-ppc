import React, { useState } from "react";
import API from "../../utils/API";
import axios from "axios";
import { Link } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function LoginPage() {

  const [userObject, getUser] = useState({});
  const [loginAlert, setLoginAlert] = useState({
    displaySnackbar: false
  });

  function emailOnly(event) {
    const emailValidation = /^[a-zA-Z0-9@.]*$/
    const emailResult = emailValidation.test(event);
    return emailResult
  }

  function handleInputChange(e) {

    if(e.target.name === "email") {
      const checkEmail = emailOnly(e.target.value);
      if(checkEmail === false) {
        e.target.value = e.target.value.substring(0, e.target.value.length - 1);
      }
    }

    const { name, value } = e.target;
    getUser({...userObject, [name]: value})
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (userObject.email && userObject.password) {

      axios.post("/api/users/login", userObject, { headers: { "Content-Type": "application/json" } })
      .then(
        (response) => {
          if (response.status === 200) {
            location.href = '/Calculator'
          }
        }, () => {
          setOpen(true);
          setLoginAlert({displaySnackbar: true});
        }
      )
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
      setLoginAlert(false);
    }

    return (

      <div>

      {loginAlert.displaySnackbar === true ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="warning">
            Failed to log in. Email or password invalid.
          </Alert>
        </Snackbar>
      ) : null}
        
         <form className="login-form" onSubmit={handleFormSubmit}>
        <h2 className="login-title">Please Login</h2>
        <div className="user-div">
          <label htmlFor="user-login">Email</label>
          <input 
          className="user-email" 
          type="text"
          name='email'
          onChange={handleInputChange}
          />
        </div>

        <div className="pass-div">
          <label htmlFor="pass-login">Password</label>
          <input 
          className="pass" 
          type="password"
          name='password'
          onChange={handleInputChange}
          />
        </div>

        <button className="login-btn" type="submit">
          Submit
        </button>
        
        <p className="create-acct-opt">New User? Create an account <Link to="./Create">here</Link>.</p>

      </form>

      </div>


    );
}

export default LoginPage;
