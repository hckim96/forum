import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';


class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Header/>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/posts" component = {Posts}/>

          <Route path ="/about" component = {About}/>
        </div>
      </Router>
    )
  }
 
}

export default App;
