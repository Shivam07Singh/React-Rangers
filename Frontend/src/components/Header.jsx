import React from "react";
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

  return (
    <header className="header">
      <div className="logo">
        <img src={image} alt="Web Builder" />
      </div>
      <nav >
        <ul>
          <li>
            <Link to="/" style={{ color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" style={{ color: "black" }}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: "black" }}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: "black" }}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div
        style={{ display: "flex", gap: 10, justifyContent: "space-between", alignItems: "center" }}
      >
        <button className="btn" onClick={handleLoginClick}>
          Login
        </button>
        <button className="btn" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
