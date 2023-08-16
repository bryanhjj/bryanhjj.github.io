import React from "react";
// import { useNavigate } from "react-router-dom";
import './navBar.css';

const NavBar = () => {
    return (
        <div className="navBarContainer">
            <li>
                <a className='nav-item-home' href='#home'>Home</a>    
            </li>
            <li>
                <a className='nav-item' href='#about'>About</a>
            </li>
            <li>
                <a className='nav-item' href='#skills'>Skills</a>
            </li>
            <li>
                <a className='nav-item' href='#my-projects'>My projects</a>
            </li>
            <li>
                <a className='nav-item' href='#contact'>Contact</a>
            </li>
        </div>
    );
};

export default NavBar;