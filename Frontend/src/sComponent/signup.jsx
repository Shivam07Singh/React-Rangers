import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const SignUp = () => {

  useEffect(() => {
    const form = document.getElementById("signUpForm");
    if (form) {
      form.addEventListener("submit", signUp);
    }
  }, []);
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  async function signUp(event) {
    event.preventDefault();

    const name = document.getElementById("signUpName").value.trim();
    const email = document.getElementById("signUpEmail").value.trim();
    const password = document.getElementById("signUpPassword").value.trim();
    const address = document.getElementById("signUpAddress").value.trim();
    const phone = document.getElementById("signUpPhone").value.trim();
    const gender = document.getElementById("signUpGender").value.trim();

    if (!name || !email || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch(`${apiBaseUrl}/admin/signup`, {
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
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during sign up:", error);
      alert(`Sign Up Error: ${error.message}`);
    }
  }

  return (
    <div className="signUp-page">
      <div className="signUp-container">
        <form id="signUpForm" className="signUp-formParent">
          <h3>Sign Up with your Information</h3>
          <div className="signUp-inputGroup">
            <label htmlFor="signUpName">Name</label>
            <input
              type="text"
              id="signUpName"
              className="signUp-input"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="signUp-inputGroup">
            <label htmlFor="signUpEmail">Email</label>
            <input
              type="email"
              id="signUpEmail"
              className="signUp-input"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="signUp-inputGroup">
            <label htmlFor="signUpPassword">Password</label>
            <input
              type="password"
              id="signUpPassword"
              className="signUp-input"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="signUp-inputGroup">
            <label htmlFor="signUpAddress">Address</label>
            <input
              type="text"
              id="signUpAddress"
              className="signUp-input"
              placeholder="Enter address"
            />
          </div>
          <div className="signUp-inputGroup">
            <label htmlFor="signUpPhone">Phone</label>
            <input
              type="text"
              id="signUpPhone"
              className="signUp-input"
              placeholder="Enter phone number"
            />
          </div>
          <div className="signUp-inputGroup">
            <label htmlFor="signUpGender">Gender</label>
            <input
              type="text"
              id="signUpGender"
              className="signUp-input"
              placeholder="Enter gender"
            />
          </div>
          <button type="submit" className="signUp-button">
            Sign Up
          </button>
          <p>
            Already have an account? <Link to="/login">Log in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
