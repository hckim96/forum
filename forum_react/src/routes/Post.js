import React, {Component} from 'react';


class Post extends Component {
    render(){
        return(
            <div>
                <h1>
                    {this.props.location.state.title}
                </h1>
                <div>
                    {this.props.location.state.text}
                </div>
            </div>
        )
    }
}


export default Post;