import "./Login.css";
import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.getElementById("createUserForm").addEventListener("submit", login);
  }, []);

  function login(event) {
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
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      requestOptions
    )
      .then((resp) => resp.json())
      .then((res) => {
        if (res.error) {
          alert("User not registered, Sign up first");
        } else {
          window.location.href = "index.html";
        }
      })
      .catch((err) => console.error("Error:", err));
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
