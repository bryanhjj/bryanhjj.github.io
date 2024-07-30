import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
// import { useNavigate } from "react-router-dom"; don't need this since it's all on 1 page
import './navBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "1150px" });

    const closeMenuOnMobile = () => {
        if (isMobile) {
            setOpen(false);
        }
    };

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    const renderNavLinks = () => {
        const listClassName = isMobile? "nav-list" : "nav-list-web";
        return (
            <ul className={listClassName}>
                <li className="nav-link-container">
                    <a className='nav-link' href='#home' onClick={closeMenuOnMobile}>
                        Home
                    </a>
                </li>
                <li className="nav-link-container">
                    <a className='nav-link' href='#about' onClick={closeMenuOnMobile}>
                        About
                    </a>
                </li>
                <li className="nav-link-container">
                    <a className='nav-link' href='#skills' onClick={closeMenuOnMobile}>
                        Skills
                    </a>
                </li>
                <li className="nav-link-container">
                    <a className='nav-link' href='#my-projects' onClick={closeMenuOnMobile}>
                        My projects
                    </a>
                </li>
                <li className="nav-link-container">
                    <a className='nav-link' href='#contact' onClick={closeMenuOnMobile}>
                        Contact
                    </a>
                </li>
            </ul>
        )
    }

    return (
        <header className="header">
            <div className="navBarContainer">
                {isMobile && (
                    <div className="nav-toggle" onClick={toggleMenu}>
                        <MenuIcon/>
                    </div>
                )}

                {isMobile? (
                    <div className={`nav-menu ${isOpen? "show-menu" : ""}`}>
                        {renderNavLinks()}
                        <div className="nav-close" onClick={toggleMenu}>
                            <CloseIcon/>
                        </div>
                    </div>
                ) : (
                    renderNavLinks()
                )}
            </div>
        </header>
    );
};

/*
let sectionListArray = document.querySelectorAll('section')
const viewHeight = document.documentElement.clientHeight
         window.onscroll = (() => {
            sectionListArray.forEach(function(v) {
                let rect = v.getBoundingClientRect();
                let y = rect.y;
                let bottom = rect.bottom;
                let height = rect.height;
                if (y > viewHeight|| bottom+height < viewHeight ) {
                    v.classList.add('active')
                } else {
                    v.classList.remove('active')
                }
            })
        })
*/

// https://github.com/Taofiqq/navbar-react-css/blob/main/src/NavbarHook/NavbarHook.js (ref)
 
export default NavBar;