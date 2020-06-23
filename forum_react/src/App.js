import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';

import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import Post from './routes/Post';
import Write from './routes/Write';
import './App.css';
import { dataBase } from './firebase';



//TODO: implement  , like , picture upload , 

class App extends Component {
  id = 0;

  state = {
    posts: [],
  };

  componentDidMount() {
    dataBase.ref('/posts').on('value', (snapshot) => {
      let posts = [];
      let id = 0;
      snapshot.forEach((snap) => {
        posts.push(snap.val());
        id++;
      });
      this.setState({ posts });
      this.id = id;
    });
  }

  render() {
    return (
      <Router
      // basename = "/forum"
      >
        <div className='container'>
          <Header posts={this.state.posts} />

          <Route
            exact
            path='/'
            render={() => <Home posts={this.state.posts} />}
          />
          <Route
            exact
            path='/posts'
            render={() => <Posts posts={this.state.posts} />}
          />
          <Route path='/profile' component={Profile} />
          <Route path='/about' component={About} />
          <Route
            path='/posts/:id'
            render={({ match }) => (
              <Post post={this.state.posts[match.params.id] } postid = {match.params.id} />
            )}
          />
          <Route
            path='/post'
            render={() => <Write onCreate={this.handleCreate} />}
          />
        </div>
      </Router>


    );
  }

  handleCreate = (data, nickname, tmpID, tmpPW) => {
    let today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    month = String(month).length === 1 ? (month = '0' + String(month)) : month;
    date = String(date).length === 1 ? (date = '0' + String(date)) : date;
    hour = String(hour).length === 1 ? (hour = '0' + String(hour)) : hour;
    minute =
      String(minute).length === 1 ? (minute = '0' + String(minute)) : minute;
    seconds =
      String(seconds).length === 1
        ? (seconds = '0' + String(seconds))
        : seconds;

    if (nickname !== 'default name') {
      dataBase.ref('posts').push({
        id: this.id++,
        title: data.title,
        date: `${year}-${month}-${date} ${hour}:${minute}:${seconds}`,
        body: data.body,
        author: nickname,
      });
    } else {
      dataBase.ref('posts').push({
        id: this.id++,
        title: data.title,
        date: `${year}-${month}-${date} ${hour}:${minute}:${seconds}`,
        body: data.body,
        author: tmpID,
        password: tmpPW,
        postLike: 0,
      });
    }
  };
}

export default App;
