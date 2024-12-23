import "./sliderComp.css"
import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import HomeBannerSlider from './Home Banner Slider/HomeBannerSlider';
import NavBar from "../Navbar/NavBar"
import { SliderProducts } from '../../Product Store/SliderProduct';

const SliderComp = () => {
    // Slider settings
    const slides = SliderProducts;

    // Settings for Hero background slider
    const settings = {
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: false,
    };


    // Dynamic Background slides
    let homeBannerBg = slides.map((slide, index) => {
        return (
            <HomeBannerSlider item={slide} key={index} />
        )
    })

    // Sticky Header
    const [stickyHead, setStickyHead] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setStickyHead(window.scrollY > 400);
        });
    })
    return (
        <>
            <div className="header-section">
                <header className={stickyHead ? "is-sticky" : "App-header"}>
                    <NavBar />
                </header>
            </div>
            <div className="slider-img-container">
                <Slider {...settings}>
                    {homeBannerBg}
                </Slider>
            </div>
        </>
    )
}

export default SliderComp