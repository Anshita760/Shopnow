import "./slidingcontent.css"
import React from 'react';
import Slider from "react-slick";

const SlidingContent = () => {
    const settings1 = {
        infinite: true,
        arrows: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
        pauseOnHover: false,
    };
    const settings2 = {
        infinite: true,
        arrows: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: false,
    };

    return (
        <>
            <Slider {...settings1}>
                <div className="sliding-content">
                    <h1>Nature, Delivered to Your Doorstep</h1>
                </div>
                <div className="sliding-content">
                    <h1>Bring Life to Your Space</h1>
                </div>
                <div className="sliding-content">
                    <h1>Your Plant Journey Starts Here</h1>
                </div>
            </Slider>
            <Slider {...settings2}>
                <div className="sliding-content">
                    <p>Shop vibrant plants to transform your home and garden.</p>
                </div>
                <div className="sliding-content">
                    <p>Indoor plants, outdoor greens, endless inspiration.</p>
                </div>
                <div className="sliding-content">
                    <p>From beginner-friendly to expert picks, we’ve got you covered.</p>
                </div>
            </Slider>
        </>
    )
}

export default SlidingContent
