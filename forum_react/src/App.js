import React, {Component} from 'react';
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import {Redirect,browserHistory} from 'react-router';
import { createHashHistory } from 'history';
import Header from './components/Header';
import {Link} from 'react-router-dom';


import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Post from './routes/Post';
import Write from './routes/Write';
import './App.css';
import { dataBase } from './firebase';


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
    console.log(this.state.posts)

  }
  render() {
    
    return(
      
      <Router basename = "/forum">
        <div className = "container">
          <Header posts = {this.state.posts}/>

          <Route exact path = "/" component = {Home}/>
    <Route exact path = "/posts" render = {() => <Posts posts = {this.state.posts}/>}/>
          
          <Route path ="/about" component = {About}/>
          <Route path = "/posts/:id" render = {({match}) => <Post post = {this.state.posts[match.params.id]}/>}/>
          <Route path = "/post" render = {() => <Write onCreate = {this.handleCreate}/>}/>
        </div>

      </Router>

    )
  }

  handleCreate = (data) => {
    
    //TODO :: push to database and redirect to posts page

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
