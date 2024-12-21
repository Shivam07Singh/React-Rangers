import React from 'react';
import image from '../assets/WebBuilder1.jpg'
const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-logo">
        <img src={image} alt="Web Builder" />
      </div>
      <div className="footer-links">
        <div>
          <p style={{color: 'white'}}><strong>Features</strong></p>
          <p><a href="#">Pricing</a></p>
          <p><a href="#">Templates</a></p>
          <p><a href="#">Blog</a></p>
        </div>
        <div>
          <p style={{color: 'white'}}><strong>About Us</strong></p>
          <p><a href="#">Contact Us</a></p>
          <p><a href="#">Partner with Web Builder</a></p>
          <p><a href="#">Help</a></p>
        </div>
        <div>
          <p style={{color: 'white'}}><strong>Support</strong></p>
          <p><a href="#">Contact</a></p>
          <p><a href="#">Report Abuse</a></p>
          <p><a href="#">Template Index</a></p>
          <p><a href="#">Product Roadmap</a></p>
        </div>
      </div>
      <div className="footer-testimonial">
        <p style={{color: 'white'}}>
          "With this level of service, I'm sure I'll be a long and happy
          customer with Web Builder."
        </p>
        <p style={{color: 'white'}}>— Helena, Gozo, Malta</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p style={{color: 'white'}}>
        &copy; 2024 Web Builder Inc. All rights reserved.{" "}
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> |{" "}
        <a href="#">Data Processing</a>
      </p>
      <p  style={{color: 'white'}} className="built-with">
        Built with <span className="yola-logo">web Builder</span>
      </p>
    </div>
  </footer>
  );
};

export default Footer;
