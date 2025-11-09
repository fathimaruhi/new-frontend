import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Signup from "../../new-frontend/src/Pages/Signup";
import Login from "../../new-frontend/src/Pages/Login";
import Home from "../../new-frontend/src/Pages/Home";
import Products from "../../new-frontend/src/Pages/Products";
import Cart from "../../new-frontend/src/Pages/Cart";
import About from "../../new-frontend/src/Pages/About";
import Contact from "../../new-frontend/src/Pages/Contact";
import Checkout from "../../new-frontend/src/Pages/Checkout";   // ✅ New Checkout Page

import { CartProvider } from "../../new-frontend/src/context/CartContext"; // ✅ Cart Context

function App() {
  return (
    <CartProvider>   {/* ✅ Wrap whole app to share cart data everywhere */}
      <Router>
        <Routes>

          {/* Default page → Signup */}
          <Route path="/" element={<Signup />} />

          {/* Other Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />   {/* ✅ Added */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch unknown paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
