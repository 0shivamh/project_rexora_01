import React, { useCallback,useState } from "react";
import { withRouter } from "react-router";
import app from "../Config/base";
import { Link } from "react-router-dom";
import {  Alert } from "react-bootstrap"
import {provider} from "../Config/base"

const SignUp = ({ history }) => {
  
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  let GoogleL=()=>{
    app.auth()
  .signInWithPopup(provider)
  .then((result) => {
    setMessage("Successfully Sign in")
  }).catch((error) => {
    setError('try again');
  });
    
    

  }

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password,password1 } = event.target.elements;
    if (password==password1){
    try {
      

      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      setError("Something Wrong");
    }}
    else{
      setError("password does not match");
    document.getElementById("form1").reset();}
  }, [history]);

  return (
    <div>
      <form  className="regi shadow-lg p-4 mb-5 bg-white"  id='form1' onSubmit={handleSignUp}>
      <h3 id='headtext'>
                Sign Up
            </h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="form-floating mb-3">
              <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
          <div className="form-floating mb-3">
            <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password"  />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input name="password1" type="password" className="form-control" id="floatingPassword1" placeholder="Password"  />
            <label htmlFor="floatingPassword1">Confirm Password</label>
          </div>
          <button type='submit' className="btn cbtn btn-primary ">Sign Up</button> 
          <button type='submit' className="btn cbtn btn-primary " onClick={GoogleL}>Sign Up With Google</button>

           
      </form>
    </div>
  );
};

export default withRouter(SignUp);
