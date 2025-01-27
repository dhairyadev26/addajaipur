import React from "react";

const Payment = () => {
  return (
    <div className="cart-container">
      <div className="progress-bar">
        <div className="step active">
          <span className="step-icon">🛒</span>
          <span>Bag</span>
        </div>
        <div className="step active">
          <span className="step-icon">📍</span>
          <span>Delivery Details</span>
        </div>
        <div className="step active">
          <span className="step-icon">💳</span>
          <span>Payment</span>
        </div>
      </div>
      <h2 className="cart-heading">Payment Page</h2>
      <p>This is where payment integration will happen!</p>
    </div>
  );
};

export default Payment;
