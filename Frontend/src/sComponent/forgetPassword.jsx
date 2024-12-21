import React, { useState } from "react";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:2024/admin/forgetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send reset email.");
      }

      alert(result.msg);
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during password reset:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="forgetpassword-container">
      <div className="form-parent">
        
        <form onSubmit={handleSubmit}>
          <h3>Forget Password</h3>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your registered email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
