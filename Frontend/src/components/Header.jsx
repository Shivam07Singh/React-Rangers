import React, { useState } from "react"; // Added useState import
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/WebBuilder1.jpg";

const Header = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleGetStartedClick = () => {
    navigate("/dashboard"); // Navigate to the dashboard page
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Correct use of useState

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={image} alt="Web Builder" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <ul className={isMenuOpen ? "open" : ""}>
          <li>
            <Link to="/" style={{ color: "black" }} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" style={{ color: "black" }} onClick={toggleMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: "black" }} onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: "black" }} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <button className="btn" onClick={handleLoginClick}>
              Login
            </button>
          </li>
          <li>
            <button className="btn" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;