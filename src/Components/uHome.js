import { Component } from "react"
import * as React from 'react';
import Nav from './nav.component'
import Projects from "./Projects"
import UProjects from "./UProjects"
import Headpart from  "./Headpart"
import app from "../Config/base"


export default class uHome extends Component{

    

    render(){

        app.auth().onAuthStateChanged(function(user) {
            if (user) {
              var btn2 = document.getElementById("idk");
              btn2.remove();
            } else {
                
            }
            });
          

        return(
            <div>
                    <Nav/>
                    <div id="idk">
                        <div className="container px-4">
                            <Headpart/>
                        </div>
                        <UProjects/>
                        </div>
            </div>
                    
        )
    }
}