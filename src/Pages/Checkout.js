import React, { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const placeOrder = () => {
    setOrderPlaced(true);
    localStorage.removeItem("localCart");
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">💗 PetalGlow Checkout</h1>

      {!orderPlaced ? (
        <>
          <form className="checkout-form">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Address" required />
            <input type="text" placeholder="City" required />
            <input type="number" placeholder="Pin Code" required />
            <select>
              <option>Pay on Delivery</option>
              <option>Credit / Debit Card</option>
              <option>UPI / Net Banking</option>
            </select>
          </form>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Items</span>
              <span>Based on cart</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className="total-row">
              <span>Total</span>
              <span>₹ (cart total here)</span>
            </div>
          </div>

          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </>
      ) : (
        <div className="success-box">
          ✅ Order Placed Successfully!  
          <br /> Thank you for shopping with PetalGlow 💖
        </div>
      )}
    </div>
  );
}
