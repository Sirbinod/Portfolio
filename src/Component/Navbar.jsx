import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css";
import Footer from "./Footer";

const Navbar = () =>{
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if (window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className="navbar_container">
                <NavLink to='/' className="navbar_logo" onClick={closeMobileMenu}>
                    Sarbin Shrestha
                </NavLink>
                <div className="menu_icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                <li className='nav_item'>
              <NavLink to='/' exact activeClassName="active_class" className='nav_links' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav_item'>
            <NavLink
                to='/about'
                exact activeClassName="active_class" className='nav_links'
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className='nav_item'>
              <NavLink
               exact activeClassName="active_class" to='/service'
                className='nav_links'
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
            </li>
            <li className='nav_item'>
              <NavLink
                to='/protfolio'
                className='nav_links'
                onClick={closeMobileMenu}
              >
                Products
              </NavLink>
            </li>
            
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;