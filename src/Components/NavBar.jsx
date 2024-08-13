import React from 'react'
import { Navbar, NavLink } from 'react-bootstrap'
import "../Component CSS/navbar.css"

const NavBar = () => {
    
  return (
    <div>
        <Navbar sticky="top">
            <div className="navbar-content">
                <div className="logo">
                    <a href="#">
                        <img src="assets/tree-logo.png" alt="" />
                    </a>
                </div>
                <ul className="nav-links">
                    <li><NavLink href="#" className='nav-link'>Home</NavLink></li>
                    <li><NavLink href="#" className='nav-link'>About Us</NavLink></li>
                    <li><NavLink href="#" className='nav-link'>Products</NavLink></li>
                    <li><NavLink href="#" className='nav-link'>Contact Us</NavLink></li>
                </ul>
            </div>
        </Navbar>
    </div>
  )
}

export default NavBar
