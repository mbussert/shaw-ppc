import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import About from "./pages/About";
<<<<<<< HEAD
import Admin from "./pages/Admin";
=======
import Contact from "./pages/Contact/Contact";
>>>>>>> bcc82db5dcd0bb95e399c078a9bd300b9e4c212c

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Router>
          <Navbar />
          <Switch>
<<<<<<< HEAD
            <Route exact path="/" component={Home} />
            <Route exact path="/How" component={How} />
            <Route exact path="/Calculator" component={Calculator} />
            <Route exact path="/Account" component={Account} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Create" component={Create} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Admin" component={Admin} />
            <Route component={NotFound} />
=======
          <Route exact path="/" component={Home} />
          <Route exact path="/How" component={How} />
          <Route exact path="/Calculator" component={Calculator} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Create" component={Create} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={NotFound}/>
>>>>>>> bcc82db5dcd0bb95e399c078a9bd300b9e4c212c
          </Switch>
          <Footer />
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
