import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import appa from './photos/appa.jpg'
import realAppa from './photos/realAppa.jpg'
import pabu from './photos/pabu.jpg'
import realPabu from './photos/realPabu.jpeg'
import winston from './photos/winston.jpg'
import realWinston from './photos/realWinston.jpeg' 

export default class AboutMeow extends Component {
    render() {
        return(
            <div>
            <h1 className="text-center">Learn more about our gang</h1>
            <div className="pageCenter pageFlex">
              <div class="card about">
                  <img src={appa} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Appa</h5>
                    <p class="card-text">I am named after Appa the Air Bison, pictured below!</p>
                    <img src={realAppa} class="card-img-top" alt="..."></img>
                  </div>
                </div>
                
                <div class="card about">
                  <img src={pabu} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Pabu</h5><p class="card-text">I am named after Pabu the Fire Ferret, pictured below!</p>
                    <img src={realPabu} class="card-img-top" alt="..."></img>
                  </div>
                </div>
                
                <div class="card about">
                  <img src={winston} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Winston</h5>
                    <p class="card-text">I am named after Winston Churchill, pictured below! I really live up to my name, don't I?</p>
                    <img src={realWinston} class="card-img-top" alt="..."></img>
                  </div>
                </div>
                </div>
            </div>
            )
    }
}