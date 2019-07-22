	import React, { Component } from 'react';
	import {
	  BrowserRouter as Router,
	  Link,
	  Route,
	  Switch
	} from "react-router-dom";

	import memes from '../store/memes'
	import appa from './appa.jpg'

	class MemeShow extends Component {
	  constructor(props){
	    super(props)
	    const{ match } = props

	    this.state={
	      memeId: match.params.id
	    }
	  }

	  componentDidUpdate(prevProps){
	    const prevMatch = prevProps.match
	    const{ match } = this.props
	    if(match.params.id != prevMatch.params.id){
	      this.setState({memeId: match.params.id})
	    }
	  }
	  
	  render() {
	    const{ memeId } = this.state
	    const meme = memes.find((m)=> m.id == memeId)

	    return(
	      <div>
	        {meme &&
	          <div>
	            <h1>{meme.name}</h1>
	            <p>{meme.detail}</p>
	          </div>
	        }
	      </div>
	    )
	  }
	}
export default MemeShow;