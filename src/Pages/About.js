import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css"; // make sure to create this

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">

      {/* Hero Banner */}
      <div className="about-hero">
        <h1>About PetalGlow</h1>
        <p>Luxury. Elegance. Beauty – Delivered to your doorstep.</p>
        <button className="about-btn" onClick={() => navigate("/products")}>
          Explore Products
        </button>
      </div>

      {/* About Story */}
      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          At PetalGlow, beauty is more than cosmetics — it's self-love.
          Our mission is to bring you high-quality, premium products that feel luxurious,
          smell divine, and make every woman feel confident in her own skin.
        </p>
      </div>

      {/* Mission Cards */}
      <div className="about-grid">
        <div className="about-card">
          <h3>🌸 Premium Quality</h3>
          <p>
            Every product is hand-picked, carefully tested, and packed with love.
          </p>
        </div>

        <div className="about-card">
          <h3>💖 Cruelty-Free</h3>
          <p>
            We believe beauty shouldn't harm anyone. Our products are gentle and safe.
          </p>
        </div>

        <div className="about-card">
          <h3>✨ Affordable Luxury</h3>
          <p>
            Experience elegance without breaking the bank.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="about-bottom">
        <h2>Thank You For Being Here</h2>
        <p>
          PetalGlow is made with love, passion and care for every woman who loves beauty.
          Your glow is our inspiration ✨
        </p>
      </div>

    </div>
  );
}
