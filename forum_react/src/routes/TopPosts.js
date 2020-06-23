
import Posts from './Posts';
import React from 'react';
import './TopPosts.css';

const TopPosts = (props) => {
    let topPosts = props.posts.sort( (a,b) => { 
        return a.postLike < b.postLike ? -1 : a.postLike > b.postLike ? 1: 0;
    })
    
    return (
        <div>
            <div className = 'top-title'> Top</div>
            <div>
                <Posts posts ={topPosts} isRestricted = {true} />
            </div>
        </div>
    )
}

export default TopPosts;
