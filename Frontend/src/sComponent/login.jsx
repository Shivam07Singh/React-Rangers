import "./Login.css";
import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document
      .getElementById("createUserForm")
      .addEventListener("submit", login);
  }, []);

  async function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    try {
      const response = await fetch("http://localhost:2024/admin/login", requestOptions);
      const data = await response.json();
      if (response.ok) {
        // Store the token in localStorage or cookies
        localStorage.setItem("token", data.token);
        alert("Login successful");
        window.location.href = "index.html";
      } else {
        alert(data.msg || "Error logging in");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="login_container">
      <img id="Logo" src="assets/LOGO.jpg" alt="LOGO" />
      <div className="formParent">
        <img
          id="Welcome"
          src="assets/Black_And_White_Modern_Music_Logo-removebg-preview.png"
          alt="Welcome"
        />
        <form id="createUserForm">
          <h3>Log in with your Email</h3>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter password" required />
          <button type="submit">Login</button>
          <p className="forgot-password">
            <a href="forgot_password.html">Forgot your password?</a>
          </p>
          <p>
            Don't have an account? <a href="signup.html">Sign up here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
