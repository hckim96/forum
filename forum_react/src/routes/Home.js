import React from 'react';
import LatestPosts from './LatestPosts';
import TopPosts from './TopPosts';

import './Home.css';


const Home = (props) => {

 return(
     <div>
         <div className = "home-posts-wrapper">
            <div className = 'home-posts'>
                <LatestPosts posts = {props.posts} />
            </div>
            <div className = 'home-posts'>
                <TopPosts/>
                
            </div>
         </div>

     </div>
 )   
}

export default Home;
