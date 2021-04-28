import { Component } from "react"
import { Link } from "react-router-dom"
import * as React from 'react';
import app from "../Config/base";
export default class Nav extends Component{
  

    render(){
        app.auth().onAuthStateChanged(function(user) {
          if (user) {
            var btn2 = document.getElementById("sbtn");
            btn2.remove();
            // window.location.reload();

          } else {
            
            var btn1 = document.getElementById("outbtn");
            var btn3 = document.getElementById("pr");
            btn1.remove();
            btn3.remove();
            // window.location.reload()
          }
          });
        
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
            <Link className="btn btn-main" id="lbtn" to={'/Login'} role="button" >Login</Link> 

            <Link className="btn btn-main" id='sbtn' to={'/SignUp'} role="button"  >Sign Up</Link>

            <button className='btn btn1 ' id="outbtn" onClick={() => app.auth().signOut() }>Sign out</button>


            <a><i className="fa fa-user-circle Pofile"  id="pr" data-toggle="modal" data-target="#PROFILE" aria-hidden="true"></i></a>
            </form>
            
          </div>
        </nav>
        )
    }

}