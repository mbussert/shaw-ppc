import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import CreateUser from "../../components/createUser";
import API from "../../utils/API";

function Create() {

  const [loginStatus, setLoginStatus] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
    loadStatus();
  }, []);

  function loadStatus() {

    API.authenticateUser()
      .then((response) => {
        setLoginStatus(response.data.login);

        // Prevents logged in users from creating new accounts
        if(response.data.login === "The user is logged in.") {
          location.replace("/")
        }
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div>
      <Navbar loginStatus={loginStatus} />
      <Header />
      <CreateUser />
    </div>
  );
}

export default Create;
