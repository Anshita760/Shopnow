import React, { useState, useEffect } from 'react'
import '../Component CSS/products.css'
import { NavLink } from 'react-bootstrap'
import { products } from '../Products'

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
        const randomSubset = shuffledProducts.slice(0, 4); // Adjust slice parameters as needed
        setProduct(randomSubset);
    }, [products]);

    return (
        <>  
            <div className="product-section">
                <div className="product-content">
                    <h1>Our Products</h1>
                    <div className="product-list">
                        <div className="left-products">
                            {product.map((img, key)=>{
                                return (
                                    <div className="products" onClick={()=>{setitem(key)}}>
                                        <div className="product-img-box">
                                            <img className='product-img' src={img.url} alt={img.alt} key={key}/>
                                        </div>
                                        <div className="product-details">
                                            <h6>{img.name}</h6>
                                            <span className='price'>{img.price}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="right-product">
                            {product.slice(0,1).map((img, key)=>{
                                return(
                                    <NavLink key={key} className={item === key ? 'highlighted-product' : 'hp-display-none'}>
                                        <div className="hp-img-box">
                                            <img className='hp-img' key={key} src={img.url} alt={img.alt} />
                                        </div>
                                        <div className="hp-details">
                                            <h5>{img.name}</h5>
                                            <span className='price'>{img.price}</span>
                                            <p className='hp-detail-p'>{img.desc.substring(0, 120)}...</p>
                                        </div>
                                    </NavLink>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
