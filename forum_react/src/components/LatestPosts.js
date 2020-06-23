import React from 'react';
import Posts from './Posts';
import './LatestPosts.css';

const LatestPosts = (props) => {
    return (
        <div>
            <div className = 'latest-title'>Latest</div>
            <div>
                <Posts posts = {props.posts} isRestricted = {true}/>
            </div>
        </div>
    )
}

export default LatestPosts;
