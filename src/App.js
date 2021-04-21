import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Reset from "./Components/Reset";
import Nav from './Components/nav.component';
import { AuthProvider } from "./Config/Auth";
import PrivateRoute from "./Config/PrivateRoute";
import Projects from "../src/Components/Projects";
import Headpart from  "../src/Components/Headpart";
import app from "../src/Config/base"; 

const App = () => {

  const Check=() =>{
    app.auth().onAuthStateChanged(function(user) {
      if (user) {
        alert("hi");
      } else {
        alert("hhhh");
      }
      });
   }

  return (
    <AuthProvider>
    <Router>
      <div>
      <Nav/>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/reset" component={Reset} />
      </div>
    </Router>
  </AuthProvider>
  );
};

export default App;
