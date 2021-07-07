import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import API from "../../utils/API";


function Home() {

  const [loginStatus, setLoginStatus] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
    loadStatus();
  }, []);

  function loadStatus() {

    API.authenticateUser()
      .then((response) => {
        setLoginStatus(response.data.login);
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div>
      <Navbar loginStatus={loginStatus} />
      <div className="home-container">
        
        <div className="ppc-logo-bg">
          <span style={{color: "#da9f63"}}>SHAW</span> 
          <span style={{color: "#a3becf"}}>PPC</span>   
          <br/>
          <span style={{color: "white"}}> DESIGN</span>
        </div>

        <div className="home-text-bg">
        <p className="home-text">
        Welcome to WallPro. The tool designed to assist the purchasing process for clients. <br/><br/>
        Partnered with Shaw/PPC Design providing custom interior signs and displays in almost an unlimited variety of materials.
        </p>
        </div>

        <button className="create-account-btn">
          <Link to="./Create">CREATE AN ACCOUNT</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
