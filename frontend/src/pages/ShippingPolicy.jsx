import React from "react";

const ShippingPolicy = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ color: "#2980b9", marginBottom: "15px" }}>Shipping Policy</h1>
      <p>
        Our shipping policy ensures quick and efficient delivery of your purchases. Below are
        the details:
      </p>
      <ul style={{ marginTop: "10px" }}>
        <li>All orders are processed within 1-2 business days.</li>
        <li>Standard shipping takes 5-7 business days.</li>
        <li>We offer free shipping for orders over $50.</li>
        <li>
          For international orders, delivery times vary depending on the destination.
        </li>
      </ul>
      <p style={{ marginTop: "15px" }}>
        If you have any questions, please contact our support team at{" "}
        <a href="mailto:support@example.com" style={{ color: "#f39c12", textDecoration: "underline" }}>
          support@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default ShippingPolicy;
