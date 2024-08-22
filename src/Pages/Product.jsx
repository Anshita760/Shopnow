import '../Pages CSS/product.css'
import React, { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import { products } from '../Products'
import { NavLink } from 'react-router-dom'

const Product = () => {
    const [productPanel, setProductPanel] = useState([])
    const [productDetails, setProductDetails] = useState(0)
    const shuffleArray = (array) => {
        let currentIdx = array.length, temp, randomIdx;

        // While there remain elements to shuffle...
        while (currentIdx !== 0) {
            // Pick a remaining element...
            randomIdx = Math.floor(Math.random() * currentIdx);
            currentIdx--;

            // And swap it with the current element.
            temp = array[currentIdx];
            array[currentIdx] = array[randomIdx];
            array[randomIdx] = temp;
        }
        // console.log("array: ",array)
        return array;
    };

    useEffect(() => {
        // Shuffle the products and then slice the array to get a random subset
        const shuffledProducts = shuffleArray([...products]);
        setProductPanel(shuffledProducts);
    }, [products]);
    return (
        <>
            <div className="product-pg">
                <div className="product-pg-content">
                    <div className="product-panel">
                        <div className="product-overflow">
                            {productPanel.map((img, key) => {
                                return (
                                    <div className="product-card" onClick={() => { setProductDetails(key) }}>
                                        <img src={img.url} alt={img.alt} key={key} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="product-container">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
