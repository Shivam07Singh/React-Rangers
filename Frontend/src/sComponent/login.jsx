import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

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
          window.location.href = "/";
        }
      })
      .catch((err) => console.error("Error:", err));
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="form-parent">
          <form id="createUserForm">
            <h3>Log in with your Email</h3>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Enter password" required />
            </div>
            <button type="submit">Login</button>
            <p className="forgot-password">
              <Link to="/forget">Forgot your password?</Link>
            </p>
            <p>
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
