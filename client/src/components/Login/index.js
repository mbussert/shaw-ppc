import React, { useState } from "react";
import API from "../../utils/API";
import axios from "axios";

function LoginPage() {

  const [userObject, getUser] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    getUser({...userObject, [name]: value})
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (userObject.email && userObject.password) {
      console.log('They match!')
      const response = axios("/api/users/login", {
        method: "POST",
        body: ({ email: userObject.email, password: userObject.password }),
        headers: { "Content-Type": "application/json" }
      })
      if (response.ok) {
        console.log('Hurray!')
        document.location.replace('/Home')
      // } else {
        // alert(response.statusText)
      }
    } else {
      console.log('Oops! Try again')
    }
  }
    return (
      <form onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div className="user-div">
          <label for="user-login">Email:</label>
          <input 
          className="user-email" 
          type="text"
          name='email'
          onChange={handleInputChange}
          />
        </div>

        <div className="pass-div">
          <label for="pass-login">Password:</label>
          <input 
          className="pass" 
          type="password"
          name='password'
          onChange={handleInputChange}
          />
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    );
}

export default LoginPage;
