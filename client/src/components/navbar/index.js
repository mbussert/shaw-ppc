import React, {useState} from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import API from "../../utils/API";
import { GiHamburgerMenu } from 'react-icons/gi';

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

  const [open, setOpen] = React.useState(false);
  // const node = React.useRef();
  return (
    <div>
      <div className="navLogo">
        <Link to="./"><img className="navImg" src="/images/wall-pro-logo.png" /></Link>
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
            <div className="line"></div>
          </ul>
        </nav>
      </div>
      
      
      <div className="hamburgerMQ">
        <GiHamburgerMenu open={open} setOpen={setOpen}/>
      </div>
      <nav className="mobileNav">
          <ul className="mobileLinks">
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
          </ul>
        </nav>
    </div>
  );
}

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">💁🏻‍♂️</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">💸</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="contact">📩</span>
        Contact
        </a>
    </StyledMenu>
  )
}

export default Navbar;