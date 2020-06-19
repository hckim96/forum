import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    
    render(){
        const { isRestricted } = this.props
        let testlist = this.props.posts.map(

            ({id,text,title,date,author}) => (
                <Link 
                className = 'post-list-link'
                key = {id}
                to = {{pathname: `/posts/${id}`

            }}>
                    <div className = "post-list">
                
                        <div className = 'top'>
                            <div className = "post-id">
                                #{id}
                            </div>
                        </div>
                        <div className = 'middle'>
                            <div className = "post-title">
                                {this.props.posts[id].title}

                            </div>
                        </div>
                        <div className ='bottom'>
                            <div className ='bottom-top'>
                                <div className = 'post-author'>
                                    {author}
                                </div>
                            </div>
                            <div className = 'bottom-bottom'>
                                <div className = "post-date">
                                    {date}
                                </div>
                            </div>

                            
                        </div>
                    </div>
                
                </Link>
            )
        )
        if (isRestricted) {
            testlist = testlist.slice(-5);
        }
        return(
            <div className = "posts-wrapper">
                <div className = "posts-header">
                    <div className = 'posts-header-no'>NO.</div>
                    <div className = 'posts-header-title'>Title</div>
                    <div className = 'posts-header-author-date'>Author/Date</div>
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
