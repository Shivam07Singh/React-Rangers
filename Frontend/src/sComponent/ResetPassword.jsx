import { useState, useEffect } from "react";

const ResetPassword = () => {
  const [token, setToken] = useState(""); // State to store the token
  const [newPassword, setNewPassword] = useState("");

  // Extract token from the URL query string
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    setToken(tokenFromUrl); // Store the token in the state
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:2024/admin/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }), // Use token from the state
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to reset password.");
      }

      alert(result.msg);
      window.location.href = "/login"; // Redirect to login page
    } catch (error) {
      console.error("Error during password reset:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="resetpassword_container">
      <h3>Reset Password</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          placeholder="Enter new password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
