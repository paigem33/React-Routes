import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import memes from '../store/memes'
import MemeShow from './MemeShow'
// import hipster from './hipster.jpg'

export default class Meme extends Component {
    constructor(props) {
        super(props) 
        // const{ match } = props
        
        this.state={
            memes: memes
        }
    }
//     componentDidUpdate(prevProps) {
//         const prevMatch = prevProps.match
//         const{ match } = this.props
//         if(match.params.id != prevMatch.params.id){
//             this.setState({memeId: match.params.id})
//         }
// }
    render() {
        const{ memes } = this.state
        
        return(
            <Router>
                <div>
                    <nav>
                        <h2>Classic Cat Memes</h2>
                        <ul>
                        {memes.map((meme)=>
                        <li>
	                    <Link to={`/memes/${meme.id}`}>
	                    {meme.name}
	                    </Link>
	                </li>
	                )}
	                </ul>
	                </nav>
	                <Switch>
	                    <Route path="/memes/:id" component={MemeShow} />
	               </Switch>
	               </div>
	               </Router>
            )
    }
}