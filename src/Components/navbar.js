import { Component } from "react"
import { Link } from "react-router-dom"
import * as React from 'react';

import app from "../Config/base";
export default class Navbar extends Component{
  

    render(){

        return(
            <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-white rounded sticky-top">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to className="nav-link" to={'/'} >Home </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>    
            </ul>
            <form className="ml-auto">
            <button className="btn btn-main" id="lbtn" onClick={() => app.auth().signOut()} role="button">Log Out</button> 

          </form>
            
          </div>
        </nav>
        )
    }

}