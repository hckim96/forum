import React from 'react';
import LatestPosts from '../components/LatestPosts';
import TopPosts from '../components/TopPosts';

import './Home.css';


const Home = (props) => {

 return(
     <div>
         <div className = "home-posts-wrapper">
            <div className = 'home-posts'>
                <LatestPosts posts = {props.posts} />
            </div>
            <div className = 'home-posts'>
                <TopPosts posts = {props.posts}/>
                
            </div>
         </div>

     </div>
 )   
}

export default Home;
