import '../Pages CSS/product.css'
import React, { useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import { products } from '../Products'

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
                                <NavBar />
                            </div>
                            <div className="product-detail-container">
                                <div className="product-detail-content">
                                    <div className="product-full-img">
                                        {productPanel.map((img, key) => {
                                            return (
                                                <div className=''>

                                                </div>
                                            )
                                        })}
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
