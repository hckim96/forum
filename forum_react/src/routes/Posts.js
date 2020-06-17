import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    render(){
        const testlist = this.props.posts.map(

            ({id,text,title,date}) => (
                <Link 
                key = {id}
                to = {{pathname: `/posts/${id}`,

            }}><div className = "post-list">
                <div className = "post-id">
                    {id}
                </div>
                <div className = "post-title">
                    {this.props.posts[id].title}

                </div>
                <div className = "post-date">
                    {date}
                </div>
            </div>
                
                </Link>
            )
        )
        return(
            <div className = "posts-wrapper">
                <div className = "posts-header">
                    <div>NO.</div>
                    <div>Title</div>
                    <div>Date</div>
                </div>
                <div className = "posts">
                    
                    {testlist.reverse()}
                </div>
                <div className = "post-tail">
                    <Link className = "post-link"to = {{pathname: "/post", state: {posts: this.props.posts}}}>POST</Link>

                    </div>
            </div>
        )
    }
}

export default Posts;
