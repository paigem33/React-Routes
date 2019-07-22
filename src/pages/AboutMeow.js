import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import appa from './appa.jpg'
import realAppa from './realAppa.jpg'
import pabu from './pabu.jpg'
import realPabu from './realPabu.jpeg'
import winston from './winston.jpg'
import jolie from './realWinston.jpeg'

export default class AboutMeow extends Component {
    render() {
        return(
            <div className="container">
            <h1 className="text-center">Learn more about our gang</h1>
              <div className="row">
                <div className="col-sm text-center border border-dark">
                  <h2>I am Appa</h2>
                    <img src={appa} className="turn"></img>
                    <p>I am named after Appa the Air Bison, shown below!</p>
                    <img src={realAppa}></img>
                </div>
                <div className="col-sm text-center border border-dark">
                  <h2>I am Pabu</h2>
                    <img src={pabu}></img>
                    <p>I am named after Pabu the Fire Ferret, shown below!</p>
                    <img src={realPabu}></img>
                </div>
                <div className="col-sm text-center border border-dark">
                  <h2>I am Winston</h2>
                    <img src={winston}></img>
                    <p>I am named after Winston Churchill, and I am an aspiring model, as shown below!</p>
                    <img src={jolie}></img>
                </div>
              </div>
            </div>
            )
    }
}