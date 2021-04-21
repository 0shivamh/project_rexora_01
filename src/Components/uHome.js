import { Component } from "react"
import * as React from 'react';
import Nav from './nav.component'
import Projects from "./Projects"
import Headpart from  "./Headpart"
import app from "../Config/base"


export default class uHome extends Component{

    

    render(){
        
        function myFunction() {
            // var x = document.getElementById("myDIV");
            // if (x.style.display === "none") {
            //   x.style.display = "block";
            // } else {
            //   x.style.display = "none";
            // }
            alert('hi')
          }

        return(
            <div>
                    <Nav/>
                <div id="tab">
                        <div className="container px-4">
                            <Headpart/>
                        </div>
                        <Projects/>
                        </div>
            </div>
                    
        )
    }
}