import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home/Home";
import How from "./pages/How/How";
import Calculator from "./pages/Calculator/Calculator copy.js";
import Account from "./pages/Account/Account";
import Login from "./pages/Login/Login";
import Create from "./pages/Create/Create";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin";

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Wrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/How" component={How} />
            <Route exact path="/Calculator" component={Calculator} />
            <Route exact path="/Account" component={Account} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Create" component={Create} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
