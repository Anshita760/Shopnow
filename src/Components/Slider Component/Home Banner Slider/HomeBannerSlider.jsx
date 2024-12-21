import "./homeBannerSlider.css"
import React from 'react'
import SlidingContent from "./Sliding Content/SlidingContent";
import SlidingImg from "./Sliding Image/SlidingImg";

const HomeBannerSlider = (props) => {
    const { url, name } = props.item;
    const array = Array(url)
    // console.log(array)
    return (
        <>
            <div className='slider-container' style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(' + url + ')' }}>
                <div className='blur-bg'>
                    <div className='slider-content-container'>
                        <SlidingContent />
                    </div>
                    <div className="banner-sliding-img">
                        <SlidingImg image={url} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBannerSlider
