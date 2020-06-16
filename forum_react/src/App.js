import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {browserHistory} from 'react-router';
import Header from './components/Header';

import Profile from "./components/Profile";

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Post from './routes/Post';
import Write from './routes/Write';
import './App.css';
import { dataBase } from './firebase';

import NavBar from "./components/NavBar";
// import history from "./utils/history";


//TODO: implement comment, view, date more specific , like , login , who wrote this post 

class App extends Component {
  constructor() {
    super();
  }

  id = 0;
  state = {
    
    posts : [
    ],
  }
  
  componentDidMount() {

    dataBase.ref("/posts").on("value", snapshot => {
      let posts = [];
      let id = 0;
      snapshot.forEach((snap) => {
        posts.push(snap.val());
        id++;
      })
      this.setState({posts})
      this.id = id
    })

  }
  render() {
    
    return(
      
      <Router 
      // basename = "/forum"
      history = {browserHistory} 
      >
        <div className = "container">

          <Header posts = {this.state.posts}/>
          <Route exact path = "/" component = {Home}/>
    <Route exact path = "/posts" render = {() => <Posts posts = {this.state.posts}/>}/>
          <Route path="/profile" component={Profile} />
          <Route path ="/about" component = {About}/>
          <Route path = "/posts/:id" render = {({match}) => <Post post = {this.state.posts[match.params.id]}/>}/>
          <Route path = "/post" render = {() => <Write onCreate = {this.handleCreate}/>}/>
        </div>

      </Router>

    )
  }

  handleCreate = (data) => {
    

    let today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
  let date = today.getDate();

  if (String(month).length === 1) {
    month = '0' + String(month)
  } 
  if (String(date).length === 1) {
    date = '0' + String(date)
  }
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

   dataBase.ref("posts").push({
    id: this.id++,
    title: data.title,
      date: `${year}-${month}-${date}`,
      body: data.body

    })

    
  }
}


export default App;
