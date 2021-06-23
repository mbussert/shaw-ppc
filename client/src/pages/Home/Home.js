import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
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
  );
}

export default Home;
