import React, {Component} from 'react';


const Post = ({match}) => {
    return(
        <div>
            {match.params.title}
        </div>
    )
}


export default Post;