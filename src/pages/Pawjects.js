import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import dot from './dot.jpg'
import world from './world.jpg'


export default class Pawjects extends Component {
    render() {
        return(
            <div className="container">
             <h1 className="text-center">Ongoing Work-In-Pawcess</h1>
             <div className="row">
                <div className="col text-center">
                <h2>Get the Red Dot</h2>
                <img src={dot}></img>
                </div>
                <div className="col text-center">
                <h2>World Domination</h2>
                <img src={world}></img>
                </div>
            </div>
            </div>
            )
    }
}