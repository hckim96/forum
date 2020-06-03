import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    render(){
        const testlist = this.props.location.state.posts.map(
            ({id,text,title}) => (
                <Link 
                key = {id}
                to = {{pathname: `/posts/${this.props.location.state.posts[id].title}`,
                state: {title: title,
                        text: text}
            }}>{this.props.location.state.posts[id].title}</Link>
            )
        )
        return(
            <div className = "posts">
                <div className = "titles">
                    {/* <Link to = "/posts/post1" className = "post">Post1</Link>
                    <Link to = "/posts/post2" className = "post">Post2</Link>
                    <Link to = "/posts/post3" className = "post">Post3</Link>
                    <Link to = {{pathname: `/posts/${this.props.location.state.posts[0].title}`,
                    }}>{this.props.location.state.posts[0].title}</Link> */}
                    
                    {testlist}
                </div>
                {/* <Route path = "/posts/:title" component = {Post}/> */}
            </div>
        )
    }
}

export default Posts;
