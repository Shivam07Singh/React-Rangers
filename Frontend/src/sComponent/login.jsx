import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    document
      .getElementById("createUserForm")
      .addEventListener("submit", login);
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
