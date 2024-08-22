import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Component CSS/navbar.css"

const NavBar = () => {
    
  return (
    <>
        <nav className='navbar'>
            <div className="navbar-content">
                <NavLink to='/' className="logo">
                    <img src="assets/tree-logo.png" alt="" />
                </NavLink>
                <ul className="nav-links">
                    <li><NavLink to="/Home" className='nav-link'>Home</NavLink></li>
                    <li><NavLink className='nav-link'>About Us</NavLink></li>
                    <li><NavLink to="/Product" className='nav-link'>Products</NavLink></li>
                    <li><NavLink to="/ContactUs" className='nav-link'>Contact Us</NavLink></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar
