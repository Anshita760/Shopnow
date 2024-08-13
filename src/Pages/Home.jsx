import '../Pages CSS/home.css'
import React from 'react'
import NavBar from "../Components/NavBar"
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import Products from '../Components/Products';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
        <div className="home-container">
            <div className='hero-section'>
                <div className='hero-overlay'>
                    <header className="App-header">
                        <NavBar/>
                    </header>
                    <Hero/>
                </div>
            </div>
            <div className="banner">
                <Banner/>
            </div>
            <div className="product">
                <Products/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    </>
  )
}

export default Home
