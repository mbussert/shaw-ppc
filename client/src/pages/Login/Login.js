import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import LoginPage from "../../components/Login";
import API from "../../utils/API";

function Login() {

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
      <Navbar
      loginStatus={loginStatus} />
      <Header />
      <LoginPage />
    </div>
  );
}

export default Login;
