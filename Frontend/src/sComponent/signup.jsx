import "./SignUp.css";
import React, { useEffect } from "react";

const SignUp = () => {
  useEffect(() => {
    const form = document.getElementById("createUserForm");
    if (form) {
      form.addEventListener("submit", signUp);
    }
  }, []);

  async function signUp(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value.trim();

    if (!name || !email || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch("http://localhost:2024/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, address, phone, gender }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to sign up.");
      }

      alert("User registered successfully!");
      window.location.href = "login.html"; // Redirect to login page
    } catch (error) {
      console.error("Error during sign up:", error);
      alert(`Sign Up Error: ${error.message}`);
    }
  }

  return (
    <div className="signup_container">
      <img id="Logo" src="assets/LOGO.jpg" alt="LOGO" />
      <div className="formParent">
        <img
          id="Welcome"
          src="assets/Black_And_White_Modern_Music_Logo-removebg-preview.png"
          alt="Welcome"
        />
        <form id="createUserForm">
          <h3>Sign Up with your Information</h3>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter email" required />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
          />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" placeholder="Enter address" />
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" placeholder="Enter phone number" />
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" placeholder="Enter gender" />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="login.html">Log in here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
