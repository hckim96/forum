import React, {Component} from 'react';


class Post extends Component {
    render(){
        return(
            <div className = "post-wrapper">
                <h1 className = "title">
                    {this.props.location.state.title}
                </h1>
                <div className = "body">
                    {this.props.location.state.text}
                </div>
                <div className = "comment">
                    
                </div>
            </div>
        )
    }
}


export default Post;