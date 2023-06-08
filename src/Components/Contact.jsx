import React from 'react';
//import './ContactUs.css';
import '../App.css'

const ContactUs = () => {
  return (
    <div className="contact-us">
      
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="form-input" />
        <input type="email" placeholder="Your Email" className="form-input" />
        <textarea placeholder="Your Message" className="form-textarea"></textarea>
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
