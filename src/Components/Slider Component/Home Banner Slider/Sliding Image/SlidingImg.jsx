import "./slidingimg.css"
import React from 'react'
import Slider from "react-slick";
import { SliderProducts } from '../../../../Product Store/SliderProduct';

const SlidingImg = (props) => {
    // console.log(props.image)

    // const slides = SliderProducts;

    const settings3 = {
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

    return (
        <>
            <div className="sliding-img">
                {/* <Slider {...settings3}>
                    {
                        slides.map((slide, index) => {
                            return <img src={slide.url} alt="" />
                        })
                    }
                </Slider> */}
                <img src={props.image} alt="" />
            </div>
        </>
    )
}

export default SlidingImg

