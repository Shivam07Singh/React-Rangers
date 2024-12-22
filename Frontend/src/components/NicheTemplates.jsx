import React from 'react';
import { Link } from 'react-router-dom';

const NicheTemplates = () => {
  return (
    <section className="niche-templates">
      <div className="niche-image">
        <img
          src="https://www.yola.com/ws/media-library/d90805f1237a4a64afaa8ac1ac1a5159/website-templates-1.webp"
          alt="Templates Preview"
        />
      </div>
      <div className="niche-content">
        <h2>Professional-looking niche templates</h2>
        <p>
          We have plenty of beautiful, conversion-optimized, and mobile-friendly templates tailored to specific businesses.
        </p>
        <div className="niche-buttons">

          <button className="btn-start" ><Link to="/dashboard" style={{ color: 'white' }}>Start Building </Link></button>
          <button className="btn-explore">Explore Templates</button>
        </div>
      </div>
    </section>
  );
};

export default NicheTemplates;
