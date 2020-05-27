import React, {Component} from 'react';
import './Header.css';

const MenuItem = ({active, children, to }) => (
    <div className = "menu-item">
        {children}
    </div>
)

const Header = () => {
    return(
        <div className = "header">
            <div className = "header-text">
                tttt
            </div>
            <div className = "menu">
                <MenuItem>a</MenuItem>
                <MenuItem>b</MenuItem>
                <MenuItem>c</MenuItem>
            </div>
        </div>
    )
}
export default Header;
