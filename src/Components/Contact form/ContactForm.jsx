import React from 'react'
import "./contactForm.css"

const ContactForm = () => {
  return (
    <>
        <div className="contact-form-container">
            <h3>Contact Us</h3>
            <form className="contact-form">
                <div className="fname-lname">
                    <div className="contact-label-input">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='First name'/>
                    </div>
                    <div className="contact-label-input">
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Last name'/>
                    </div>
                </div>
                <div className="gender">
                    <label htmlFor="">Gender</label>
                    <div className="gender-choice">
                        <div className="contact-label-input">
                            <input type="radio" name='gender' id='male'/>
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="contact-label-input">
                            <input type="radio" name='gender' id='female'/>
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className="contact-label-input">
                            <input type="radio" name='gender' id='other'/>
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                </div>
                <div className="label-text">
                    <label htmlFor="">Message</label>
                    <textarea className='msg-text-scroll' placeholder='Type you message' rows={4}/>
                </div>
                <button type='submit' className='contact-btn'>Submit</button>
            </form>
        </div>
    </>         
  )
}

export default ContactForm
