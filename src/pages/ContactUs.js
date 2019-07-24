import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import uhoh from './uhohcat.jpeg'
// import phone from './phone.png'
import hipster from './photos/hipster.jpg'

export default class ContactUs extends Component {
    render() {
        return(
            <section class="jumbotron text-center">
            <div class="container">
              <h1 class="jumbotron-heading">Contact us!</h1>
              
              <img src={hipster}></img>
              <p class="lead text-muted">You call this cat food hide at bottom of staircase to trip human yet hell is other people. Meow meow mama as lick i the shoes or attack the dog then pretend like nothing happened but soft kitty warm kitty little ball of furr kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? so kitty power and trip owner up in kitchen i want food. Hide when guests come over. </p>
            </div>
          </section>
            )
    }
}