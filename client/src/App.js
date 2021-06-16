import React, { Component } from "react";
import "./App.scss";
import CreateUser from "./componenets/createUser";
import LoginPage from './componenets/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/navbar';
import Wrapper from "./components/Wrapper";
import Home from './pages/Home/Home';
import How from './pages/How/How';
import Calculator from './pages/Calculator/Calculator';
import Account from './pages/Account/Account';
import Login from './pages/Login/Login';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Wrapper>
      <Router>
      <Navbar/>
      <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/How" component={How} />
          <Route exact path="/Calculator" component={Calculator} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Login" component={Login} />  
      </Router>
      </Wrapper>
      </Footer>
    </div>
  );
}

export default App;
