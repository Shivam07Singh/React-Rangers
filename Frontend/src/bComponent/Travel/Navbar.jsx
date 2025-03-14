import React from 'react';

const Navbar = () => {
  return (
    <header style={{ position: "absolute", top: "0", left: "0", width: "100%", zIndex: "100" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 20px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ color: "black", margin: 0 }}></h1>
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
              <a href="/travels" style={{ color: "black", textDecoration: "none" }}>Home</a>
            </li>
            <li style={{ margin: "0 10px", padding: "10px", cursor: "pointer" }}>
              <a href="/AboutT" style={{ color: "black", textDecoration: "none" }}>About</a>
            </li>
            <li style={{ margin: "0 10px", padding: "10px", cursor: "pointer" }}>
              <a href="/ContactT" style={{ color: "black", textDecoration: "none" }}>Contact</a>
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

export default Navbar;
