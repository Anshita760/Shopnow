import '../Component CSS/footer.css'
import React from 'react'
import { NavLink } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-left">
            <NavLink className='social-media-icon'>
              <i className="fa-brands fa-instagram"></i>
            </NavLink>
            <NavLink className='social-media-icon'>
              <i className="fa-brands fa-facebook"></i>
            </NavLink>
            <NavLink className='social-media-icon'>
              <i className="fa-brands fa-twitter"></i>
            </NavLink>
            <NavLink className='social-media-icon'>
              <i className="fa-brands fa-pinterest"></i>
            </NavLink>
          </div>
          <div className="footer-right">
            <NavLink className='footer-page-link'>
              <span>ABOUT</span>
            </NavLink>
            <NavLink className='footer-page-link'>
              <span>CONTACT US</span>
            </NavLink>
            <NavLink className='footer-page-link'>
              <span>ALL PRODUCTS</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
