import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CartStyles.css";

const Delivery = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  const handleProceedToPayment = () => {
    if (address.trim() === "") {
      alert("Please enter your delivery address.");
      return;
    }
    navigate("/payment"); // Navigate to payment page
  };

  return (
    <div className="cart-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="step active">
          <span className="step-icon">🛒</span>
          <span>Bag</span>
        </div>
        <div className="step active">
          <span className="step-icon">📍</span>
          <span>Delivery Details</span>
        </div>
        <div className="step">
          <span className="step-icon">💳</span>
          <span>Payment</span>
        </div>
      </div>

      {/* Delivery Form */}
      <h2 className="cart-heading">Delivery Address</h2>
      <div className="delivery-form">
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address here..."
          className="delivery-input"
        ></textarea>
        <button className="checkout-btn" onClick={handleProceedToPayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Delivery;
