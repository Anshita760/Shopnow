import React from 'react'
import NavBar from '../Components/NavBar'
import { NavLink } from 'react-router-dom'
import "../Component CSS/productPgDetail.css"

const ProductPgDetail = ({productPanel, productDetails}) => {
    return (
        <>
            <div className="product-pg-detail">
                <div className="product-nav">
                    <div className="nav-comp">
                        <NavBar />
                    </div>
                    <NavLink className="shopping-cart">
                        <span className="material-symbols-outlined cart">shopping_cart</span>
                        <div className="cart-count">
                            <span>0</span>
                        </div>
                    </NavLink>
                </div>
                <div className="product-detail-container">
                    <div className="product-detail-content">
                        <div className="product-full-img">
                            {productPanel.slice(0, 1).map((img, key) => {
                                return (
                                    <div className='product-img' key={key}>
                                        <img src={productPanel[productDetails].url} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="product-full-detail">
                            {productPanel.slice(0, 1).map((img, key) => {
                                return (
                                    <div className='product-img-detail' key={key}>
                                        <h2>{productPanel[productDetails].name}</h2>
                                        <h1>{productPanel[productDetails].price}</h1>
                                        <div className="divider"></div>
                                        <h6>Plant Description</h6>
                                        <p>{productPanel[productDetails].desc}</p>
                                    </div>
                                )
                            })}
                            <div className="buy-cart-btn">
                                <button className="buy-btn">Buy Now</button>
                                <button className='cart-btn'>
                                    Go To Cart
                                    <span className="material-symbols-outlined cart-btn-chevron">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPgDetail
