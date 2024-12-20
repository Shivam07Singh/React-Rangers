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
        <div className="forgetpassword_container">
            <img id="Logo" src="assets/LOGO.jpg" alt="LOGO" />
            <div className="formParent">
                <img
                    id="Welcome"
                    src="assets/Black_And_White_Modern_Music_Logo-removebg-preview.png"
                    alt="Welcome"
                />
                <form onSubmit={handleSubmit}>
                    <h3>Forget Password</h3>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your registered email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Send Reset Link</button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;

