import React from 'react';
import image from '../assets/WebBuilder1.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={image} alt="Web Builder" />
      </div>
      <nav >
        <ul>
          <li >
            <Link to="/" style={{color: 'black'}}>Home</Link>
          </li>
          <li>
          <Link to="/blog" style={{color: 'black'}}>Blog</Link>
          </li>
          <li>
          <Link to="/contact" style={{color: 'black'}}>Contact Us</Link>
          </li>
          <li>
            <Link to="/about" style={{color: 'black'}}>About</Link>
          </li>
        </ul>
      </nav>
      <div style={{display: 'flex', gap: 10, justifyContent: 'space-between', alignItems: 'center'}}>
      <button className="btn">Login</button>
      <button className="btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;

