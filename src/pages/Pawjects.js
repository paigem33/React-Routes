import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import dot from './photos/dot.jpg'
import world from './photos/world.jpg'

//<div className="container">
            //  <h1 className="text-center">Ongoing Work-In-Pawcess</h1>
            //  <div className="row">
            //     <div className="col text-center">
            //     <h2>Get the Red Dot</h2>
            //     <img src={dot}></img>
            //     </div>
            //     <div className="col text-center">
            //     <h2>World Domination</h2>
            //     <img src={world}></img>
            //     </div>
            // </div>
            // </div>

export default class Pawjects extends Component {
    render() {
        return(
            <div className="pageCenter pageFlex projects">
            
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src={dot} class="card-img" alt="..."></img>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Get the red dot!</h5>
                    <p class="card-text">Stare at ceiling light bring your owner a dead bird so wake up human for food at 4am my slave human didn't give me any food so i pooped on the floor yet find box a little too small and curl up with fur hanging out and lick butt going to catch the red dot today going to catch the red dot today.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src={world} class="card-img" alt="..."></img>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">World Domination</h5>
                    <p class="card-text">Hiding behind the couch until lured out by a feathery toy hiss and stare at nothing then run suddenly away lick left leg for ninety minutes, still dirty eats owners hair then claws head. Milk the cow bite nose of your human, but while happily ignoring when being called lay on arms while you're using the keyboard eat plants, meow, and throw up because i ate plants, attack the child. </p>
                  </div>
                </div>
              </div>
            </div>
            
            </div>
            )
    }
}