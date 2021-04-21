import React from "react";
import app from "../Config/base";
import Projects from "./Projects";
import Headpart from "./Headpart";
import Navbar from  "./navbar"
const Home = () => {
   

  app.auth().onAuthStateChanged(function(user) {
    if (user) {
    } else {
        
    }
    });

  return (
    <>
      

      <div className="container px-4">
        <div className="row gx-5">
          <div className="col dash1">
            <p><i className="fa fa-user-circle" aria-hidden="true"></i></p>
            <button className='btn btn1' onClick={() => app.auth().signOut() }>Sign out</button>
          </div>
        </div>

        <Headpart/>
      </div>

      
     
      <Projects/>

      

    </>
  );
};

export default Home;
