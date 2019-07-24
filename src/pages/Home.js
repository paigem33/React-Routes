import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import all from './photos/all.jpg'

export default class Home extends Component {
    render() {
        return(
            <section class="jumbotron text-center">
            <div class="container">
              <h1 class="jumbotron-heading">Welcome to our Kitty-Cat Gang!</h1>
              
              <img src={all}></img>
              <p class="lead text-muted">Poop on floor and watch human clean up pounce on unsuspecting person bird bird bird bird bird bird human why take bird out i could have eaten that i will ruin the couch with my claws. I cry and cry and cry unless you pet me, and then maybe i cry just for fun more napping, more napping all the napping is exhausting, human is washing you why halp oh the horror flee scratch hiss bite but mark territory, yet chase imaginary bugs i could pee on this if i had the energy, and roll on the floor purring your whiskers off. </p>
            </div>
          </section>
            )
    }
}