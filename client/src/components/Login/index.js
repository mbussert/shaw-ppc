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

      axios.post("/api/users/login", userObject, { headers: { "Content-Type": "application/json" } })
      .then(response => {
        if (response.status === 200) {
          alert("You have successfully logged in!");
          console.log("You have successfully logged in!");
        } else {
          alert("Failed to log in. Please try again.");
        }
      })
    }
  }
    return (
      <form onSubmit={handleFormSubmit}>
        <h2>Login</h2>
        <div className="user-div">
          <label htmlFor="user-login">Email:</label>
          <input 
          className="user-email" 
          type="text"
          name='email'
          onChange={handleInputChange}
          />
        </div>

        <div className="pass-div">
          <label htmlFor="pass-login">Password:</label>
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
