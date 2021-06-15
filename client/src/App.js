import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import CreateUser from "./componenets/createUser";
import LoginPage from './componenets/Login';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <CreateUser />
    </div>
  );
}

export default App;
