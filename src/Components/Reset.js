import React, {  useState } from "react"
import {  Alert } from "react-bootstrap"
// import {useAuth}  from "../Config/Auth"
import { Link } from "react-router-dom"
import app from '../Config/base';
import $ from 'jquery';
export default function Reset() {
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  async function handleSubmit(e) {
    const email=document.getElementById('floatingInput').value;
    console.log(email)
    e.preventDefault()

      var auth = app.auth();

    auth.sendPasswordResetEmail(email).then(function() {
      setMessage("Check your inbox for further instructions")
    }).catch(function(error) {
      setError("Failed to reset password")

    });
    document.getElementById("form1").reset();
  }

  $(document).ready(function(){
    $("#resetnav").modal('show');
  });
  return (
    <div>
          

      <div className="modal fade" id="resetnav" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog">
      <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form  className="shadow-lg p-4 mb-5 bg-white" id='form1' onSubmit={handleSubmit}>
      <h3 id='headtext'>
                Forgot password?
            </h3>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <div className="form-floating mb-3">
              <input name="email" type="email"  class="form-control"  id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
          <button type='submit' className="btn cbtn btn-primary ">Reset</button> 

          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
          <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
          </form>

      </div>
      </div>
      </div>
      </div>
      
    </div>
  )
}