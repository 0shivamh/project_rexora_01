import React, { useCallback, useContext,useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../Config/base";
import { Link } from "react-router-dom";
import {  Alert } from "react-bootstrap"
import { AuthContext } from "../Config/Auth";
import {provider} from "../Config/base"
import $ from "jquery";
const Login = ({ history }) => {

     

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

  $(document).ready(function(){
    $("#loginnav").modal('show');
  });

  return (
    <div id="LOG">
     

      <div className="modal fade" id="loginnav" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form  className="shadow-lg p-4 mb-5 bg-white" id="form1" onSubmit={handleLogin}>
      <h3 id='headtext'>
                Log in
            </h3>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            
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
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Login;
