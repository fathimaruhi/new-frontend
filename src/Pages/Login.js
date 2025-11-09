import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Use environment variable or default to local backend
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5002";

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/api/login`, {
        email,
        password,
      });

      if (res.data.success) {
        setMessage("✅ Login successful!");
        // Redirect to home after 1 second
        setTimeout(() => navigate("/home"), 1000);
      } else {
        setMessage(`❌ ${res.data.message || "Login failed"}`);
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("❌ Network error: Could not reach server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="link">
        Don't have an account? <Link to="/">Signup</Link>
      </p>
    </div>
  );
}
