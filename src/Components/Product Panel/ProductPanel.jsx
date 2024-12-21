import React from 'react'
import "./productPanel.css"

const ProductPanel = ({productPanel, setProductDetails}) => {
    return (
        <>
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
        </>
    )
}

export default ProductPanel
