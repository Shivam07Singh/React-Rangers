import "./SignUp.css";
import React, { useEffect } from "react";

const SignUp = () => {
  useEffect(() => {
    document.getElementById("createUserForm").addEventListener("submit", signUp);
  }, []);

  function signUp(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const API_KEY = "AIzaSyCiO6ZwN79HD20uJSVEZevF8UOhtWOTa7Y";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    };

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      requestOptions
    )
      .then((resp) => resp.json())
      .then((res) => {
        if (res.error) {
          alert("Error signing up: " + res.error.message);
        } else {
          alert("User registered successfully!");
          window.location.href = "login.html";
        }
      })
      .catch((err) => console.error("Error:", err));
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
          <h3>Sign Up with your Email</h3>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter password" required />
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
