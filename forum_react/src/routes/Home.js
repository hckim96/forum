import React from 'react';
import LatestPosts from './LatestPosts';
import PopularPosts from './PopularPosts';

import './Home.css';


const Home = (props) => {

 return(
     <div>
         <div className = "home-posts-wrapper">
            <div className = 'home-posts'>
                <LatestPosts posts = {props.posts} />
            </div>
            <div className = 'home-posts'>
                <PopularPosts/>
                
            </div>
         </div>

     </div>
 )   
}

export default Home;
