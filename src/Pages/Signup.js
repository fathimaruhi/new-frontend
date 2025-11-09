import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Use environment variable or default to localhost backend
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5002";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Account created successfully!");
        // Redirect to login after 1.5 seconds
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(`❌ ${data.message || "Signup failed"}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("❌ Network error: Could not reach server.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p className="link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;
