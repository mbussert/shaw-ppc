import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import API from "../../utils/API";

function Navbar(props) {
  function verifyStatus() {
    if (props.loginStatus === "The user is logged in.") {
      return (
        <Link to="./" onClick={logOutUser}>
          Log Out
        </Link>
      );
    } else {
      return <Link to="./Login">Log In</Link>;
    }
  }

  function showAccount() {
    if (props.loginStatus === "The user is logged in.") {
      return (
        <li>
          <Link to="./Account">Account</Link>
        </li>
      );
    } else {
      return null;
    }
  }

  function logOutUser() {
    API.logOutUser()
      .then(() => {
        // Refreshes the page if on the homepage to ensure the navbar gets refreshed with the new state

        if ((window.location.href = "/")) {
          location.reload();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
    <div className="navLogo">
          <Link to="./"><img className="navImg" src="/images/wall-pro-logo.png"/></Link>
        
    <nav>
      <ul className="links">
        <li>
          <Link to="./How">How it Works</Link>
        </li>
        <li>
          <Link to="./Calculator">Calculator</Link>
        </li>
        {showAccount()}
        {/* <li>
          <Link to="./Account">Account</Link>
        </li> */}
        <li>{verifyStatus()}</li>
        {/* <li>
          <Link to="./Create">Create</Link>
        </li>
        <li>
          <Link to="./About">About</Link>
        </li> */}
        <div>
          <div className="line"></div>
        </div>
      </ul>
    </nav>
    </div>
    </div>
  );
}

export default Navbar;
