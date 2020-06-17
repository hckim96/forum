import React, {Component} from 'react';

class Post extends Component {
    render(){
        return(
            <div className = "post-wrapper">
                <h1 className = "title">
                    {this.props.post.title}
                </h1>
                <div className = "body">
                    {this.props.post.body}
                </div>
                <div className = "comment">
                    
                </div>
            </div>
        )
    }
}


export default Post;