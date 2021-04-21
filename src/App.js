import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Reset from "./Components/Reset";
import { AuthProvider } from "./Config/Auth";
import PrivateRoute from "./Config/PrivateRoute";
import UHome from "../src/Components/uHome"

const App = () => {
  
  return (
    <AuthProvider>
    <Router>
      <div>
      <UHome/>
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
