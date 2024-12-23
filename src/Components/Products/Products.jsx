import React, { useState, useEffect } from 'react'
import './products.css'
import { NavLink } from 'react-router-dom'
import { products } from '../../Product Store/Products'
import Slider from "react-slick";

const Products = () => {
    const [product, setProduct] = useState([])
    const [item, setitem] = useState(0)

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
        // const randomSubset = shuffledProducts.slice(0, 4); // Adjust slice parameters as needed
        setProduct(shuffledProducts);
    }, [products]);
    
    console.log("products", product)
    // Product Slides setting
    const setting = {
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // fade: true,
        pauseOnHover: false,
    };
    return (
        <>
            <div className="hm-product-section">
                <div className="hm-product-content">
                    <h2>Our Products</h2>
                    <div className="hm-product-list">
                        <div className="left-products">
                            <Slider {...setting}>
                                {product.map((img, key) => {
                                    return (
                                        <div className="products" key={key} onClick={() => { setitem(key) }}>
                                            <div className="hm-product-img-box">
                                                <img className='hm-product-img' src={img.url} alt={img.alt} key={key} />
                                            </div>
                                            <div className="hm-product-details">
                                                <div className="product-content">
                                                    <h6>{img.name}</h6>
                                                    <span className='price'>{img.price}</span>
                                                </div>
                                                <button className='add-cart-btn'>Add to cart</button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                        {/* <div className="right-product">
                            {product.slice(0, 1).map((img, key) => {
                                return (
                                    <NavLink key={key} className='highlighted-product'>
                                        <div className="hp-img-box">
                                            <img className='hp-img' key={key} src={product[item].url} alt={product[item].alt} />
                                        </div>
                                        <div className="hp-details">
                                            <h5>{product[item].name}</h5>
                                            <span className='price'>{product[item].price}</span>
                                            <p className='hp-detail-p'>{product[item].desc.substring(0, 120)}...</p>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div> */}
                    </div>
                    <NavLink to='/Product' className='see-product-btn'>
                        <button>See All Products</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Products
