import React, {Component} from 'react';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import {Redirect} from 'react-router';
import { createHashHistory } from 'history';
import Header from './components/Header';

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Post from './routes/Post';
import Write from './routes/Write';
import './App.css';

class App extends Component {

  id = 4;
  state = {
    posts : [
      {id:0, text: "post0 text", title: "post0 title", date: "2020-06-01"},
      {id:1, text: "post1 text", title: "post1 title", date: "8882020-06-02"},
      {id:2, text: "post2 text", title: "post2 title", date: "2020-06-03"},
      {id:3, text: "post3 text", title: "post3 title", date: "2020-06-04"}
    ]
  }
  render() {
    return(
      <Router basename = "/forum">
        <div className = "container">
          <Header posts = {this.state.posts}/>

          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/posts" component = {Posts}/>

          <Route path ="/about" component = {About}/>
          <Route path = "/posts/:title" component = {Post}/>
          <Route path = "/post" render = {() => <Write  onCreate = {this.handleCreate}/>}/>


        </div>
      </Router>
    )
  }

  handleCreate = (data) => {
    
    this.setState({
      posts: this.state.posts.concat({id:this.id++, ... data})
    })
    // this.props.history.push('/posts');
    // useHistory().push('/posts');
    // return <Redirect to ='/posts'/>;
    createHashHistory().replace('/posts');
    
  }
  
}

export default App;
