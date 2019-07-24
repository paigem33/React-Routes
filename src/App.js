import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import lawd from "./pages/photos/ohlawd.jpg"
import Home from './pages/Home'
import AboutMeow from './pages/AboutMeow'
import Skills from './pages/Skills'
import Pawjects from './pages/Pawjects'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'
import Meme from './pages/Meme'
import MemeShow from './pages/MemeShow'
import navImg1 from './pages/photos/navImg1.jpeg'
import 'bootstrap/dist/css/bootstrap.css'; 

export default class App extends Component {
  render() {
    return(
      <div>
      
      <Router>
        
        <div id="mainNav" class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <img src={navImg1} className="navImg my-0 mr-md-auto font-weight-normal"></img>
            <nav class="my-2 my-md-0 mr-md-3">
            <Link to="/" className="p-2 display-8">Home</Link>
              <Link to="/aboutmeow" className="p-2">About Me-ow</Link>
              <Link to="/skills" className="p-2">Skills</Link>
              <Link to="/pawjects" className="p-2">Pawjects</Link>
              <Link to="/contactus" className="p-2">Contact Us</Link>
              <Link to="/memes" className="p-2">Cat Memes</Link>
            </nav>
          </div>
        
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutmeow" exact component={AboutMeow} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/pawjects" exact component={Pawjects} />
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/memes" exact component={Meme} />
            <Route component= {NotFound} />
          </Switch>
      </Router>
      <footer class="text-muted">
        <div class="container">
          <p>&copy;2019 Kitty-Cat Gang</p>
        </div>
      </footer>
      </div>
      );
  }
}


