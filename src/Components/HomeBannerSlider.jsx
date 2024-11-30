import React, { useState } from 'react'
import "../Component CSS/homeBannerSlider.css"

const HomeBannerSlider = (props) => {
    const { url, name } = props.item;

    return (
        <>
            <div className='slider-container' style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(' + url + ')' }}>
                <div className='blur-bg'>
                    <h3>{name}</h3>
                    <div className="sliding-img">
                        <img src={url} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBannerSlider
