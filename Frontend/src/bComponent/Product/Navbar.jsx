import React from "react";
import { Link } from "react-router-dom";

const Navbarp = () => {
  return (
    <header style={{ position: "fixed", top: "0", left: "0", width: "100%", zIndex: "100" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ color: "black", margin: 0 }}>Product</h1>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              marginLeft: "20px",
            }}
          >
            <li style={{ margin: "0 10px", padding: "10px", cursor: "pointer" }}>
              <Link to="/products" style={{ color: "black", textDecoration: "none" }}>Home</Link>
            </li>
            <li style={{ margin: "0 10px", padding: "10px", cursor: "pointer" }}>
              <Link to="/AboutP" style={{ color: "black", textDecoration: "none" }}>About</Link>
            </li>
            <li style={{ margin: "0 10px", padding: "10px", cursor: "pointer" }}>
              <Link to="/ContactP" style={{ color: "black", textDecoration: "none" }}>Contact</Link>
            </li>
          </ul>
        </div>
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "150px",
            padding: "5px",
            borderRadius: "5px",
            border: "0",
          }}
        />
      </nav>
    </header>
  );
};

export default Navbarp;
