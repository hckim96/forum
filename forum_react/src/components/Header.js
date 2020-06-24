import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

import NavBar from './NavBar';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-text'>hc</div>
      <div className='navbar'>
        <NavBar />
      </div>
      <div>
        <input className='input' placeholder='search..' />
      </div>
      <div className='menu'>
        <NavLink exact to='/' className='menu-item' activeClassName='active'>
          home
        </NavLink>
        <NavLink to='/posts' className='menu-item' activeClassName='active'>
          posts
        </NavLink>

        <NavLink to='/about' className='menu-item' activeClassName='active'>
          about
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
