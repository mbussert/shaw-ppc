import React from "react";
import { Link } from "react-router-dom";
import './style.scss'

function Navbar() {
  return (
    <nav>
        
        <ul className="links">
            
            <li><Link to="./">Home</Link></li>
            <li><Link to="./How">How it Works</Link></li>
            <li><Link to="./Calculator">Calculator</Link></li>
            <li><Link to="./Account">Account</Link></li>
            <li><Link to="./Login">Login</Link></li>
            
        </ul>

        {/* <label className="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label> */}

    </nav>
  
  );
}

export default Navbar;