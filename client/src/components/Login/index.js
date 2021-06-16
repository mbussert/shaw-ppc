import React, { Component } from "react";
import "./index.css";

class LoginPage extends Component {
  render() {
    return (
      <form>
        <h2>Login</h2>
        <div className="user-div">
          <label for="user-login">Username:</label>
          <input className="user-name" type="text" />
        </div>

        <div className="pass-div">
          <label for="pass-login">Password:</label>
          <input className="pass" type="password" />
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    );
  }
}

export default LoginPage;
