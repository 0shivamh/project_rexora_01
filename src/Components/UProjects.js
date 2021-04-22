import { Component } from "react"
import * as React from 'react';
import p1 from '../images/projects/robot.png'
import p2 from '../images/projects/engineering.png'
import p3 from '../images/projects/chip.png'
import man from '../images/projects/man.png'
import { Link } from "react-router-dom"
export default class UProjects extends Component{

  
render(){

    
    return(
        <div>

        <div className='Projectdash container '>
        <p className="h3">Top Projects  </p>
            <div className="slidecard card-body">
                <div className="d-flex justify-content-center">
                <img  className="circle img-fluid" src={p1} />
                </div>
                <h5 className="card-title text-center">Email Automation using python</h5>
                <p className="card-text">Sending Email. You may be familiar with sending emails from Outlook or Thunderbird or through a website such as Gmail or Yahoo! Mail. Unfortunately.</p>
                <Link to="/login" className="btn btn-primary">View</Link>
            </div>

            <div className="slidecard card-body">
                <div className="d-flex justify-content-center">
                <img  className="circle img-fluid" src={p2} />
                </div>
                <h5 className="card-title text-center">IOT Based Smart Parking System</h5>
                <p className="card-text">The proposed system is used to indicate the user about the vacancy of the parking slots. </p>
                <Link to="/login" className="btn btn-primary">View</Link>
            </div>

            <div className="slidecard card-body">
                <div className="d-flex justify-content-center">
                <img  className="circle img-fluid" src={p3} />
                </div>
                <h5 className="card-title text-center">Virtual Assistant Using Python</h5>
                <p className="card-text">Virtual desktop assistant is an awesome thing. If you want your machine to run on your command like Jarvis did for Tony</p>
                <Link to="/login" className="btn btn-primary">View</Link>
            </div>
   
        </div>

       
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <p className="h3">Top Performer</p>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Shivam</h5>
                            <p className="card-text">I write code</p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                    </div>
                
                    
                </div>
                <div className="carousel-item">
                <div className="row gx-5">
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="row gx-5">
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className  ="col">
                        <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="row gx-5">
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                            <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                        <div className="col">
                        <div className="profile card-body">
                            <div className="d-flex justify-content-center">
                            <img  className="pic img-fluid" src={man} />
                            </div>
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text">Hello hi sjdkjdvnmm,asjyhbsdui </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>




    </div>




    )
}

}