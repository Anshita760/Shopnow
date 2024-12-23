import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

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
                    <li><NavLink to="/ContactUs" className='contact-btn'>Contact Us</NavLink></li>
                    <li>
                    <NavLink className="shopping-cart">
                        <span className="material-symbols-outlined cart">shopping_cart</span>
                        <div className="cart-count">
                            <span>0</span>
                        </div>
                    </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar
