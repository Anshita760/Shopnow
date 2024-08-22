import React from 'react'
import "../Pages CSS/contactUs.css"
import ContactForm from '../Components/ContactForm'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const ContactUs = () => {
    return (
        <>
            <div className="contact-us-page">
                <div className="nav-comp">
                    <NavBar />
                </div>
                <div className="contact-form-section">
                    <div className="contact-form-comp">
                        <div className="form-comp">
                            <ContactForm />
                        </div>
                        <div className="contact-form-side-img">
                            <img src="assets/hero-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default ContactUs
