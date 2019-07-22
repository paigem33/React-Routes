import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import fast from './fast.PNG'
import yell from './yell.JPG'
import nom from './eating.PNG'
import hunt from './hunt.JPG'
import yoga from './yoga.jpeg'
import cuddle from './cuddle.png'

export default class Skills extends Component {
    render() {
        return(
            <div className="container">
                
                <h1>Skills</h1>
                <ul>
                <div className="row">
                <div className="col-sm border border-dark p-4">
                    <li>Always ready to nom</li>
                    <img src={nom}></img>
                </div>
                <div className="col-sm border border-dark p-4">
                    <li>Real loud</li>
                    <img src={yell}></img>
                    </div>
                    <div className="col-sm border border-dark p-4">
                    <li>Run the fastest</li>
                    <img src={fast}></img>
                    </div>
                </div>
                <div className="row">
                <div className="col-sm border border-dark p-4">
                    <li>Bestest hunter, will getcha, watch out</li>
                    <img src={hunt}></img>
                    </div>
                    <div className="col-sm border border-dark p-4">
                    <li>Cat yoga master</li>
                    <img src={yoga}></img>
                    </div>
                    <div className="col-sm border border-dark p-4">
                    <li>Cuddle champ</li>
                    <img src={cuddle}></img>
                    </div>
                    </div>
                </ul>
            </div>
            )
    }
}