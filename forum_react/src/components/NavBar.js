// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout,user } = useAuth0();
    // const username = user.name;


  return (
    <div>
      {!isAuthenticated && (
        <button className = "button" onClick={() => loginWithRedirect({})}>Log in</button>
      )}

        
{isAuthenticated &&(
           <div >
               <div className = "button">   </div>
        <Link className = "button"to="/profile">Profile</Link>
           </div>
           
       )}
      {isAuthenticated &&
       <button className = "button" onClick={() => logout()}>Log out</button>
       }
      
    </div>
  );
};

export default NavBar;