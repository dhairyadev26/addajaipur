import React from "react";

const ShippingPolicy = () => {
  const styles = {
    container: {
      fontFamily: "Arial",
      padding: "20px",
      lineHeight: "1.6",
      color: "#333",
      marginTop: "70px",
      fontSize: "40px"

    },
    heading: {
      color: "#9e2515",
      marginBottom: "15px",
      fontSize: "24px",
      fontWeight: "bold",
      
    },
    paragraph: {
      marginTop: "20px",
      fontSize: "16px",
      marginBottom: "30px",
      
      
    },
    list: {
      marginTop: "10px",
      paddingLeft: "20px",
      fontSize: "16px",
    },
    listItem: {
      marginBottom: "5px",
    },
    link: {
      color: "#f39c12",
      textDecoration: "underline",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Shipping Policy</h1>
      <h5 style={styles.paragraph}>
        Our shipping policy ensures quick and efficient delivery of your purchases. Below are
        the details:
      </h5>
      <ul style={styles.list}>
        <li style={styles.listItem}>All orders are processed within 1-2 business days.</li>
        <li style={styles.listItem}>Standard shipping takes 5-7 business days.</li>
        <li style={styles.listItem}>We offer free shipping for orders over $50.</li>
        <li style={styles.listItem}>
          For international orders, delivery times vary depending on the destination.
        </li>
      </ul>
      <p style={styles.paragraph}>
        If you have any questions, please contact our support team at {" "}
        <a href="mailto:support@example.com" style={styles.link}>
          support@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default ShippingPolicy;