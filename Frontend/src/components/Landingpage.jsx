import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Features from './Features';
import PremiumFeatures from './PremiumFeatures';
import NicheTemplates from './NicheTemplates';
import Footer from './Footer';
import "../assets/styles.css"
function Landingpage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <PremiumFeatures />
      <NicheTemplates />
      <Footer />
    </>
  );
}

export default Landingpage
