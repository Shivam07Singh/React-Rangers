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
          <p><strong>Features</strong></p>
          <p><a href="#">Pricing</a></p>
          <p><a href="#">Templates</a></p>
          <p><a href="#">Blog</a></p>
        </div>
        <div>
          <p><strong>About Us</strong></p>
          <p><a href="#">Contact Us</a></p>
          <p><a href="#">Partner with Web Builder</a></p>
          <p><a href="#">Help</a></p>
        </div>
        <div>
          <p><strong>Support</strong></p>
          <p><a href="#">Contact Support</a></p>
          <p><a href="#">Report Abuse</a></p>
          <p><a href="#">Template Index</a></p>
          <p><a href="#">Product Roadmap</a></p>
        </div>
      </div>
      <div className="footer-testimonial">
        <p>
          "With this level of service, I'm sure I'll be a long and happy
          customer with Web Builder."
        </p>
        <p>— Helena, Gozo, Malta</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
        &copy; 2024 Web Builder Inc. All rights reserved.{" "}
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> |{" "}
        <a href="#">Data Processing</a>
      </p>
      <p className="built-with">
        Built with <span className="yola-logo">web Builder</span>
      </p>
    </div>
  </footer>
  );
};

export default Footer;
