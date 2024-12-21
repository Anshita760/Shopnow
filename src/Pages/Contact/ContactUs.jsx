import React from 'react'
import "./contactUs.css"
import ContactForm from '../../Components/Contact form/ContactForm'
import NavBar from '../../Components/Navbar/NavBar'
import Footer from '../../Components/Footer/Footer'

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
                        <div className="contact-form-side-img"></div>
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
