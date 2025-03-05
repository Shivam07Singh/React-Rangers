import React from 'react';
import image from '../assets/WebBuilder1.jpg'
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={image} alt="Web Builder Logo" />
        </div>
        <div className="footer-links">
          <div>
            <p><strong>Features</strong></p>
            <p><Link to="/dashboard" aria-label="Templates">Templates</Link></p>
            <p><Link to="/blog" aria-label="Blog">Blog</Link></p>
            <p><a href="#" aria-label="Pricing">Pricing</a></p>
          </div>
          <div>
            <p><strong>About Us</strong></p>
            <p><Link to="/contact" aria-label="Contact Us">Contact Us</Link></p>
            <p><Link to="/help" aria-label="Help">Help</Link></p>
            <p><a href="#" aria-label="Partner with Web Builder">Partner with Web Builder</a></p>
          </div>
          <div>
            <p><strong>Support</strong></p>
            <p><Link to="/contact" aria-label="Contact">Contact</Link></p>
            <p><Link to="/dashboard" aria-label="Template Index">Template Index</Link></p>
            <p><a href="#" aria-label="Report Abuse">Report Abuse</a></p>
            <p><a href="#" aria-label="Product Roadmap">Product Roadmap</a></p>
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
          &copy; {currentYear} Web Builder Inc. All rights reserved.{" "}
          <a href="#" aria-label="Privacy Policy">Privacy Policy</a> |{" "}
          <a href="#" aria-label="Terms of Service">Terms of Service</a> |{" "}
          <a href="#" aria-label="Data Processing">Data Processing</a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
