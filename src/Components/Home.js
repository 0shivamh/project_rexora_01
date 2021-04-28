import React, { useCallback,useState } from "react";
import app from "../Config/base";
import Projects from "./Projects";
import Headpart from "./Headpart";
const Home = () => {
  
  let user = app.auth().currentUser;
  let email=user.email;
  

  const handleprofile = useCallback(async event => {
    event.preventDefault();
    const { name, about, } = event.target.elements;
    app.auth().onAuthStateChanged(function(user) {
      if (user) {
        
      } else {
          
      }
  });

   

  });
  
    

  return (
    <>
   

      <div className="container px-4">
        <div className="row gx-5">
          <div className="col dash1">
            <a><i className="fa fa-user-circle Pofile"  data-toggle="modal" data-target="#PROFILE" aria-hidden="true"></i></a>
            {/* <button classNameName='btn btn1' onClick={() => app.auth().signOut() }>Sign out</button> */}
          </div>
        </div>
        <Headpart/>
      </div>  
      <Projects/>

        <div className="modal fade" id="PROFILE" tabIndex="-1" aria-labelledby="PROFILELabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form  className=" shadow-lg p-4 mb-5 bg-white"  id='form1' onSubmit={handleprofile}>
            <h3 id='headtext'>
                      PROFILE
                  </h3>
                  {/* {error && <Alert variant="danger">{error}</Alert>} */}
                <div className="input-group mb-3">
                  <span className="input-group-text"  id="inputGroup-sizing-default">Name</span>
                  <input name='name' type="text" className="form-control" id="name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div  className="input-group mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                  <input type="text" className="form-control" id="email"value={email} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" disabled/>
                </div>
                <div className="input-group">
                  <span className="input-group-text">About</span>
                  <textarea name='about' className="form-control" id="about" aria-label="With textarea"></textarea>
                </div>
                <button type='submit' className="btn cbtn btn-primary ">Save</button> 
                  
            </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
