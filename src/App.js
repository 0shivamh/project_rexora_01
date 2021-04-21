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
import { useHistory } from "react-router-dom";
import UHome from "../src/Components/uHome"

const App = () => {

  app.auth().onAuthStateChanged(function(user) {
    if (user) {
      var btn2 = document.getElementById("UH");
      btn2.remove();
    } else {
        
    }
    });
  
  return (
    <AuthProvider>
    <Router>
      <div>
      <UHome id="UH" />
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
