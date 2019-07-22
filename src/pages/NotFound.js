import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import uhoh from './uhohcat.jpeg'
import pathetic from './pathetic.png'

export default class NotFound extends Component {
    render() {
        return(
            <div>
            <h1>Not Found</h1>
            <img src={pathetic}></img>
            </div>
            )
    }
}