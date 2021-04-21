import React from "react";
import app from "../Config/base";
import a from '../images/1.png'
import b from '../images/2.png'
import c from '../images/3.png'
import d from '../images/4.png'
import Projects from "./Projects";
const Home = () => {
  return (
    <>
      

      <div className="container px-4">
        <div className="row gx-5">
          <div className="col dash1">
            <p><i className="fa fa-user-circle" aria-hidden="true"></i></p>
            <button className='btn btn1' onClick={() => app.auth().signOut()}>Sign out</button>
          </div>
        </div>

        <div className="row gx-5">
          <div className="col dash2"  >
          <div id="slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <img src={b} className="d-block mx-auto w-50" />
              </div>
              <div className="carousel-item">
                <img src={c} className="d-block mx-auto w-50" />
              </div>
              <div className="carousel-item">
                <img src={d} className="d-block mx-auto w-50" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>
        </div>
      </div>

      <div className="container px-4">
        <div className="row gx-5 dash3">
          <div className="col ccard">
          <div className="p-3 ">Artificial Intelligence</div>
          </div>
          <div className="col ccard">
            <div className="p-3 ">Machine Learning</div>
          </div>
          <div className="col ccard">
            <div className="p-3 ">Python</div>
          </div>
          <div className="col ccard">
            <div className="p-3 ">C/C++</div>
          </div>
        </div>
      </div>

      <Projects/>

      

    </>
  );
};

export default Home;
