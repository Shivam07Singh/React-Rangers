import React from 'react';
import image from '../assets/WebBuilder1.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={image} alt="Web Builder" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Features</li>
          <li>About Us</li>
        </ul>
      </nav>
      <button className="btn">Get Started</button>
    </header>
  );
};

export default Header;

