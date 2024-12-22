import React from 'react';
import image from '../assets/WebBuilder1.jpg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={image} alt="Web Builder" />
        </div>
        <div className="footer-links">
          <div>
            <p style={{ color: 'white' }}><strong>Features</strong></p>
            <p><Link to="/dashboard">Templates</Link></p>
            <p><Link to="/blog">Blog</Link></p>
            <p><a href="#">Pricing</a></p>

          </div>
          <div>
            <p style={{ color: 'white' }}><strong>About Us</strong></p>
            <p><Link to="/contact">Contact Us</Link></p>
            <p><Link to="/contact">Help</Link></p>
            <p><a href="#">Partner with Web Builder</a></p>
          </div>
          <div>
            <p style={{ color: 'white' }}><strong>Support</strong></p>
            <p><Link to="/contact">Contact</Link></p>
            <p><Link to="/dashboard">Template Index</Link></p>
            <p><a href="#">Report Abuse</a></p>
            <p><a href="#">Product Roadmap</a></p>
          </div>
        </div>
        <div className="footer-testimonial">
          <p style={{ color: 'white' }}>
            "With this level of service, I'm sure I'll be a long and happy
            customer with Web Builder."
          </p>
          <p style={{ color: 'white' }}>— Helena, Gozo, Malta</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{ color: 'white' }}>
          &copy; 2024 Web Builder Inc. All rights reserved.{" "}
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> |{" "}
          <a href="#">Data Processing</a>
        </p>
        <p style={{ color: 'white' }} className="built-with">
          Built with <span className="yola-logo">web Builder</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
