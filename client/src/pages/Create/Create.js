import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import CreateUser from "../../components/createUser";
import API from "../../utils/API";

function Create() {

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
      <h1>Create an account</h1>
      <CreateUser />
    </div>
  );
}

export default Create;
