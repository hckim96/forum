import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';
import './Posts.css';

const Post = ({match}) => {
    return(
        <div>
            {match.params.title}
        </div>
    )
}
const Posts = () => {
    return(
        <div className = "posts">
            <div className = "titles">
                <Link to = "/posts/post1" className = "post">Post1</Link>
                <Link to = "/posts/post2" className = "post">Post2</Link>
                <Link to = "/posts/post3" className = "post">Post3</Link>
            </div>
            <Route path = "/posts/:title" component = {Post}/>
        </div>
    )
}

export default Posts;
