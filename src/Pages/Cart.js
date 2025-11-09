import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const fmt = (v) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(v);

  const loadCart = () => {
    try {
      const raw = localStorage.getItem("localCart") || "[]";
      const arr = JSON.parse(raw);
      setCartItems(Array.isArray(arr) ? arr : []);
    } catch {
      setCartItems([]);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const save = (updated) => {
    localStorage.setItem("localCart", JSON.stringify(updated));
    setCartItems([...updated]);
  };

  const increase = (id) =>
    save(
      cartItems.map((it) =>
        it.productId === id ? { ...it, quantity: it.quantity + 1 } : it
      )
    );

  const decrease = (id) =>
    save(
      cartItems.map((it) =>
        it.productId === id
          ? { ...it, quantity: Math.max(1, it.quantity - 1) }
          : it
      )
    );

  const removeItem = (id) =>
    save(cartItems.filter((it) => it.productId !== id));

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const goToPayment = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <h2 className="title">🛍️ Your PetalGlow Cart</h2>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty…</p>
          <button
            className="continue-btn"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.productId}>
                <img src={item.image} alt={item.name} className="item-img" />

                <div className="info">
                  <h4>{item.name}</h4>
                  <div className="price">{fmt(item.price)}</div>

                  <div className="qty-row">
                    <button onClick={() => decrease(item.productId)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increase(item.productId)}>+</button>
                  </div>

                  <button
                    className="remove"
                    onClick={() => removeItem(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: {fmt(subtotal)}</p>
            <p>Shipping: FREE</p>
            <p className="total">Total: {fmt(subtotal)}</p>

            <button className="checkout-btn" onClick={goToPayment}>
              Proceed to Checkout
            </button>

            <button
              className="continue-btn"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}
