import React from "react";
import { Link } from "react-router-dom";
import wallPro from "../../assets/img/wall-pro-logo.png"
import shawppc from "../../assets/img/shaw-ppc-logo.png"

function Footer() {
  return (
    
      <footer id="footer-relative" className="footer-background">
        
        <div className="footer-line"></div>


        <div className="footer-container">
        
          <div className="footer-card">
            <ul className="footer-links">
              <li>
                <Link to="./">Home</Link>
              </li>
              <li>
                <Link to="./How">How it Works</Link>
              </li>
              <li>
                <Link to="./Calculator">Calculator</Link>
              </li>
              <li>
                <Link to="./Account">Account</Link>
              </li>
              <li>
                <Link to="./Login">Login</Link>
              </li>
              <li>
                <Link to="./Create">Create</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-card">
           <img src={wallPro} className="wall-pro-logo" alt="Wall Pro Logo"/>
           <Link className="footer-link-btn" to="./Calculator">
            <p className="foot-project">NEW PROJECT</p>
           </Link>
          </div>

          <div className="footer-card">
            <p>Sign up now for your free account so you can track all of your
               projects in one convenient place
            </p>
            <Link className="footer-link-btn" to="./Login">
              <h5 className="foot-signup">SIGN UP</h5>
            </Link>
          </div>

          <div className="footer-card">
             <img src={shawppc} className="shawppc-logo" alt="shaw ppc logo"/>
          </div>

          <div className="footer-card">
             <h3>icons</h3>
             <img src="" className="footer-icons" alt="Facebook Icon"/>
             <img src="" className="footer-icons" alt="Instagram Icon"/>
             <img src="" className="footer-icons" alt="Twitter Icon"/>
          </div>
        </div>


      </footer>
    
  );
}

export default Footer;
