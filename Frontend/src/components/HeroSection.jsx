import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero1">
      <div className="hero-content">
        <h1>Create a professional, free website in minutes</h1>
        <p>Get leads, sell products, and grow your business online.</p>
        <button className="btn-start">
          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Try Free</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
