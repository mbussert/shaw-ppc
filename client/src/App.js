import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home/Home";
import How from "./pages/How/How";
import Calculator from "./pages/Calculator/Calculator";
import Account from "./pages/Account/Account";
import Login from "./pages/Login/Login";
import Create from "./pages/Create/Create";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Router>
          <Navbar />
          <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/How" component={How} />
          <Route exact path="/Calculator" component={Calculator} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Create" component={Create} />
          <Route component={NotFound}/>
          </Switch>
          <Footer />
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
