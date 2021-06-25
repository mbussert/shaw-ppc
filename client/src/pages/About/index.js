import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import About from "../../components/About"
import API from "../../utils/API";

function AboutPage() {

    const [loginStatus, setLoginStatus] = useState([]);

    useEffect(() => {
      loadStatus();
    }, []);
  
    function loadStatus() {
  
      API.authenticateUser()
        .then((response) => {
          console.log(response)
          setLoginStatus(response.data.login);
        })
        .catch((err) => console.log(err));
    }

    return (
        <div>
            <Navbar loginStatus={loginStatus} />
            <Header />
            <About/>
        </div>
    );
}

export default AboutPage;