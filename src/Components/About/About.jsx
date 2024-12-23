import "./about.css"
import React from 'react'

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-img">
                    <img src="assets/medium-shot-smiley-woman-with-plant-home.jpg" alt="" />
                </div>
                <div className="about-desc">
                    <h2>About Us</h2>
                    <p>This is a website developed to help those interested in plants, trees and shrubs to find the right plants for their home, gardens and workplace.</p>
                    <p>Plants add colour and vibrancy to our environments as well as providing a habitat for many living things that work together to stabilise and optimise the ecosystem.</p>
                </div>
            </div>
        </>
    )
}

export default About
