// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout,user } = useAuth0();

  
  return (
    <div className = "nav-bar">
      {!isAuthenticated&& (
        <div>
        <button className = "button" onClick={() => {
          loginWithRedirect({});
        }}>Log in</button>
        </div>
      )}
      

        
      
       {(!(!user)) && (
         <div  className = "button2">
           hello, {user.nickname} !
         </div>
       )}
        
{isAuthenticated &&(
        <Link className = "button" to="/profile">Profile </Link>
           
       )}
      {isAuthenticated &&
       <button className = "button" onClick={ () => { logout();
        
      }}>Log out </button>
       }
      
    </div>
  );
};

export default NavBar;