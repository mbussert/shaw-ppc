import React from "react";
import { Link } from "react-router-dom";
import wallPro from "../../assets/img/wall-pro-logo.png"
import shawppc from "../../assets/img/shaw-ppc-logo.png"
import fbicon from "../../assets/img/icons/facebook-icon.png"
import inicon from "../../assets/img/icons/linkedin-icon.png"

function Footer() {
  return (
    
      <footer id="footer-position" className="footer-background">
        
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
                <Link to="./Contact">Contact</Link>
              </li>
              <li>
                <Link to="./About">DEV Team</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-card">
           <Link className="footer-link-btn" to="./Calculator">
           <img src={wallPro} className="wall-pro-logo" alt="Wall Pro Logo"/>
            <h5 className="foot-project">NEW PROJECT</h5>
           </Link>
          </div>

          <div className="footer-card">
            <p className="footer-signup-text">Sign up now for your free account so you can track all of your
               projects in one convenient place
            </p>
            <Link className="footer-link-btn" to="./Create">
              <h5 className="foot-signup">SIGN UP</h5>
            </Link>
          </div>

          <div className="footer-card">
            <a href="http://www.shawandslavsky.com/" target="_blank" rel="noreferrer" >
             <img src={shawppc} className="shawppc-logo" alt="shaw ppc logo"/>
             </a>
          </div>

          <div className="icons-container">
            <a href="https://www.facebook.com/ShawPPC-Design-Group-185602394803971/" target="_blank" rel="noreferrer">
             <img src={fbicon} className="footer-icons" alt="Facebook Icon"/>
            </a>

            <a href="https://www.linkedin.com/company/shaw-ppc-design/" target="_blank" rel="noreferrer">
             <img src={inicon} className="footer-icons" alt="Linkedin Icon"/>
            </a>

          </div>
        </div>


      </footer>
    
  );
}

export default Footer;
