import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import fast from './photos/fast.PNG'
import yell from './photos/yell.JPG'
import nom from './photos/eating.PNG'
import hunt from './photos/hunt.JPG'
import yoga from './photos/yoga.jpeg'
import cuddle from './photos/cuddle.png'


            // <div className="container">
                
            //     
            //     <ul>
            //     <div className="row">
            //     <div className="col-sm border border-dark p-4">
            //         <li>Always ready to nom</li>
            //         <img src={nom}></img>
            //     </div>
            //     <div className="col-sm border border-dark p-4">
            //         <li>Real loud</li>
            //         <img src={yell}></img>
            //         </div>
            //         <div className="col-sm border border-dark p-4">
            //         <li>Run the fastest</li>
            //         <img src={fast}></img>
            //         </div>
            //     </div>
            //     <div className="row">
            //     <div className="col-sm border border-dark p-4">
            //         <li>Bestest hunter, will getcha, watch out</li>
            //         <img src={hunt}></img>
            //         </div>
            //         <div className="col-sm border border-dark p-4">
            //         <li>Cat yoga master</li>
            //         <img src={yoga}></img>
            //         </div>
            //         <div className="col-sm border border-dark p-4">
            //         <li>Cuddle champ</li>
            //         <img src={cuddle}></img>
            //         </div>
            //         </div>
            //     </ul>
            // </div>
            
export default class Skills extends Component {
    render() {
        return(
            <div className="pageCenter">
                <h1>Skills</h1>
                <div className="pageFlex">
                <div class="card skills">
                  <img src={nom} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">The best at eating</h5>
                    <p class="card-text">Real loud.</p>
                  </div>
                </div>
                
                <div class="card skills">
                  <img src={yell} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">The bestest at yelling</h5>
                    <p class="card-text">Always ready to nom.</p>
                  </div>
                
                </div>
                
                <div class="card skills">
                  <img src={fast} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Real fast</h5>
                    <p class="card-text">The fastest</p>
                  </div>
                </div>
                
                <div class="card skills">
                  <img src={hunt} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">The best hunters</h5>
                    <p class="card-text">Gets all the mice</p>
                  </div>
                </div>
                
                <div class="card skills">
                  <img src={yoga} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Cat yoga</h5>
                    <p class="card-text">Stretchy lil guys</p>
                  </div>
                </div>
                
                <div class="card skills">
                  <img src={cuddle} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Cuddle masters</h5>
                    <p class="card-text">Snuggle the bestest</p>
                  </div>
                </div>
                
                </div>
                </div>
            )
    }
}

