import '../Pages CSS/home.css'
import React, { useEffect, useState } from 'react'
import NavBar from "../Components/NavBar"
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Products from '../Components/Products';
import Footer from '../Components/Footer';
import SliderComp from '../Components/SliderComp';
// import { SliderProducts } from '../SliderProduct';

const Home = () => {
    const [stickyHead, setStickyHead] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setStickyHead(window.scrollY > 50);
        });
    })
    return (
        <>
            <div className="home-container">
                {/* <div className='hero-section'>
                <header className={stickyHead ? "is-sticky" : "App-header"}>
                    <NavBar/>
                </header>
                <div className='hero-overlay'>
                    <Hero/>
                </div>
            </div> */}
                {/* <div className="banner-slider">
                    <SliderComp>
                        <header className={stickyHead ? "is-sticky" : "App-header"}>
                            <NavBar />
                        </header>
                        <div className='hero-overlay'>
                            <Hero />
                        </div>
                    </SliderComp>
                </div> */}
                <div className="banner-slider">
                    <SliderComp />
                </div>
                <div className="category">
                    <Banner />
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
