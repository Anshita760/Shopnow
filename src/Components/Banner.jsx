import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Component CSS/banner.css"

const Banner = () => {
  return (
    <div>
        <div className="banner-area">
            <h2>Categories</h2>
            <div className="banner-content">
                    <NavLink to='/' className="top-product text-align-start">
                        <div className="top-product-container product1"></div>
                        <div className="top-product-content">
                            <p>Indoor Plants</p>
                        </div>
                    </NavLink>
                    <NavLink to='/' className="top-product text-align-center">
                        <div className="top-product-container product2"></div>
                        <div className="top-product-content">
                            <p>Outdoor Plants</p>
                        </div>
                    </NavLink>
                    <NavLink to='/' className="top-product text-align-end">
                        <div className="top-product-container product3"></div>
                        <div className="top-product-content">
                            <p>Home Decore Plants</p>
                        </div>
                    </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Banner
