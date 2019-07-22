import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import uhoh from './uhohcat.jpeg'
// import phone from './phone.png'
import hipster from './hipster.jpg'

export default class ContactUs extends Component {
    render() {
        return(
            <div>
            <h1>Give us a ring</h1>
            <img src={hipster}></img>
            </div>
            )
    }
}