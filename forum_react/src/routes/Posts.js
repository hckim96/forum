import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    render(){
        return(
            <div className = "posts">
                <div className = "titles">
                    <Link to = "/posts/post1" className = "post">Post1</Link>
                    <Link to = "/posts/post2" className = "post">Post2</Link>
                    <Link to = "/posts/post3" className = "post">Post3</Link>
                    <Link to = {{pathname: `/posts/${this.props.location.state.posts[0].title}`,
                    }}>abcd</Link>
                    
                </div>
                {/* <Route path = "/posts/:title" component = {Post}/> */}
            </div>
        )
    }
}

export default Posts;
