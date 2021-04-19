import React, { useCallback, useContext,useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../Config/base";
import { Link } from "react-router-dom";
import {  Alert } from "react-bootstrap"
import { AuthContext } from "../Config/Auth";

const Login = ({ history }) => {
  
  const [error, setError] = useState("")

  let GoogleL=()=>{
    var provider = new app.auth.GoogleAuthProvider();
    app.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    
  }).catch((error) => {
    console.log(error)
  });
  app.auth().signInWithRedirect(provider);
  };

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
        document.getElementById("form1").reset();

      } catch (error) {
        setError('Please enter valid details');
      }
      
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  

  return (
    <div>
      <form  className="regi shadow-lg p-4 mb-5 bg-white" id="form1" onSubmit={handleLogin}>
      <h3 id='headtext'>
                Log in
            </h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="form-floating mb-3">
              <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
          <div className="form-floating">
            <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type='submit' className="btn cbtn btn-primary ">Login</button>
          <button type='submit' className="btn cbtn btn-primary " onClick={GoogleL}>Login With Google</button> 
          <div id="emailHelp" className="form-text"><Link to={'/Reset'} >Reset Password</Link></div> 

      </form>
      
     
    </div>
  );
};

export default withRouter(Login);
