import '../Pages CSS/product.css'
import React, { useState, useEffect } from 'react'
import { products } from '../Products'
import ProductPanel from '../Components/ProductPanel'
import ProductPgDetail from '../Components/ProductPgDetail'

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
                    <ProductPanel productPanel = {productPanel} setProductDetails = {setProductDetails}/>
                    <div className="product-container">
                        <ProductPgDetail productPanel = {productPanel} productDetails = {productDetails}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
