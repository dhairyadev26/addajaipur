import React from "react";
import "../styles/Products.css";


// Define inline style objects
const styles = {
  productCard: {
    position: 'relative', // Position relative for absolute positioning of wishlist icon
    backgroundcolor: 'transparent',
     // Rounded corners
   
    width: 'calc(30% - 1rem)', // Four products per row with spacing
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '0rem', // Bottom padding for spacing
  
    
  },
  productCardHover: {
    transform: 'translateY(-8px)', // Hover effect to lift the card
    backgroundColor: 'rgb(255, 255, 255)', // Make it slightly more opaque on hover
  },
  image: {
    width: '200px', // Maintain aspect ratio
    height: '400px', // Maintain aspect ratio
    maxWidth: '100%', // Ensure image fits card without overflow
    // Rounded corners for images
  },
  productInfo: {
    textAlign: 'center', // Center text within the card
  },
  price: {
    fontSize: '.9rem', // Slightly smaller font size for price text
    marginTop: '.5rem', // Spacing above price text
  },
  wishlistIconContainer: {
    position: 'absolute', // Position the wishlist icon at the top right
    top: '.5rem',
    right: '.5rem',
  },
  productItem: {
    color: '#555', // Color for text
    marginTop: '.5rem', // Add margin for spacing
    textAlign: 'center', // Center text
  },
  boldPrice: {
    fontWeight: 'bold',
    color: '#333', // Dark color for price
    marginBottom: '.5rem', // Add margin at bottom
  },
};

const ProductCard = ({ product }) => {
  return (
    <div
      className="product-card"
      style={styles.productCard}
    >
      <img
        src={product.image}
        alt={product.name}
        style={styles.image}
      />
      <div style={styles.productInfo}>
        <h3>{product.name}</h3>
        <p style={styles.price}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

