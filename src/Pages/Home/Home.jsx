import './home.css'
import React, { useEffect, useState } from 'react'
import Banner from '../../Components/banner/Banner';
import Products from '../../Components/Products/Products';
import Footer from '../../Components/Footer/Footer';
import SliderComp from '../../Components/Slider Component/SliderComp';
import About from '../../Components/About/About';
// import { SliderProducts } from '../SliderProduct';

const Home = () => {

    return (
        <>
            <div className="home-container">
                <div className="banner-slider">
                    <SliderComp />
                </div>
                <div className="category">
                    <Banner />
                </div>
                <div className="about-section">
                    <About/>
                </div>
                <div className="product">
                    <Products />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home
