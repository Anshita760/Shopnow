import '../Component CSS/footer.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-left">
            <a href='#' className='social-media-icon'>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href='#' className='social-media-icon'>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href='#' className='social-media-icon'>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href='#' className='social-media-icon'>
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
          <div className="footer-right">
            <NavLink className='footer-page-link'>
              <span>ABOUT</span>
            </NavLink>
            <NavLink to='/ContactUs' className='footer-page-link'>
              <span>CONTACT US</span>
            </NavLink>
            <NavLink to='/Product' className='footer-page-link'>
              <span>ALL PRODUCTS</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
