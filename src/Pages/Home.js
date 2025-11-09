import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/products");
  };

  return (
    <div className="hero-section">
      <div className="hero-box">
        <div className="overlay">
          <h1> PetalGlow Beauty </h1>
          <p className="tagline">
            Luxury skincare & beauty with a touch of soft pink elegance 💗
          </p>
          <button className="shop-btn" onClick={handleExplore}>
            Explore More
          </button>
        </div>
      </div>

      <div className="features">
        <div className="card">
          <h3>🌸 Premium Quality</h3>
          <p>Dermatologist tested, gentle on all skin types.</p>
        </div>

        <div className="card">
          <h3>🐰 Cruelty-Free</h3>
          <p>No animal testing — clean beauty you can trust.</p>
        </div>

        <div className="card">
          <h3>🚚 Fast Delivery</h3>
          <p>Your glow, delivered to your doorstep.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
