import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import all from './all.jpg'

export default class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>Hello and welcome to our family</h1>
                        <h2>We are Appa, Pabu, and lil Winston</h2>
                        <img src={all} className="turn"></img>
                    </div>
                </div>
            </div>
            )
    }
}