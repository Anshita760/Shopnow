import "../Component CSS/sliderComp.css"
import React, { useState } from 'react'
import Slider from "react-slick";
import HomeBannerSlider from './HomeBannerSlider';
import { SliderProducts } from '../SliderProduct';

const SliderComp = () => {
    const [slides, setSlides] = useState(SliderProducts);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let productBgImg = slides.map((slide, index) => {
        // console.log(slide)
        return(
            <HomeBannerSlider item={slide} key={index} />
        )
    })
    // console.log(slides)
    return (
        <>
            <Slider {...settings}>
                {productBgImg}
            </Slider>
        </>
    )
}

export default SliderComp