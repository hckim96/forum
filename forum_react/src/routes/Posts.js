import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    render(){
        const testlist = this.props.location.state.posts.map(
            ({id,text,title,date}) => (
                <Link 
                key = {id}
                to = {{pathname: `/posts/${this.props.location.state.posts[id].title}`,
                state: {title: title,
                        text: text
                        ,id: id,
                    date: date}
            }}><div className = "post-list">
                <div>
                    {id}
                </div>
                <div className = "post-title">
                    {this.props.location.state.posts[id].title}
                </div>
                <div>
                    {date}
                </div>
            </div>
                
                </Link>
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
                    
                    {testlist.reverse()}
                </div>
                {/* <Route path = "/posts/:title" component = {Post}/> */}
            </div>
        )
    }
}

export default Posts;
