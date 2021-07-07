import React, {useState} from "react";
import { Link } from "react-router-dom";
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


  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  
  const hamNavClick = () => {
    setNavbarOpen(!navbarOpen)
    // console.log('mobilehamnavclick');
  }
  // const [status, setStatus] = useState({ display: "show" });

  // function hideNav() {
  //     setStatus({display: "hide"})
  // }



  return (
    <div>
      <div className="navLogo">
        <Link to="./"><img className="navImg" src="/images/wall-pro-logo.png" alt="WallPro logo" /></Link>
        <div className="hamburger">
        <GiHamburgerMenu onClick={hamNavClick}/>
        <GiHamburgerMenu />
        </div>
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
           
            <div className="line"></div>
          </ul>
        </nav>
      </div>
  <div className="spaceForce">
    <div className="mobile-nav" style={navbarOpen ? {display:"flex"} : {display:"none"}}>
        <nav className="mobile-nav">
          <ul className="mobile-links">
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
          </ul>
        </nav>
        </div>
  </div>
  </div>
  );
}


export default Navbar;
