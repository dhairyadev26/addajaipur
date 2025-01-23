import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For main image index
  const [selectedSize, setSelectedSize] = useState(""); // For size selection
  const [quantity, setQuantity] = useState(1); // For quantity selection
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Hook for navigation

  // Array of available sizes
  const sizes = ["S", "M", "L", "XL", "XXL"];

  // Array of images for carousel
  const images = [
    product.image,
    "https://via.placeholder.com/150/FF0000", // Replace with actual images
    "https://via.placeholder.com/150/00FF00",
    "https://via.placeholder.com/150/0000FF",
    "https://via.placeholder.com/150/FFFF00",
  ];

  // Auto-slide only for the main image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index); // Set main image on thumbnail click
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }
    alert(
      `Added ${quantity} ${product.name}(s) in size ${selectedSize} to the cart!`
    );
    addToCart(product, quantity, selectedSize);
    onClose(); // Close the modal after adding to cart
  };

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`); // Navigate to the product details page
    onClose(); // Close the modal when navigating
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "70%",
        height: "70%",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        overflow: "hidden",
        display: "flex",
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "24px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        &times;
      </button>

      {/* Left Side: Images */}
      <div
        style={{
          width:"50",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Thumbnails */}
        <div
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "auto",
            padding: "10px",
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "100%",
                margin: "5px 0",
                cursor: "pointer",
                border:
                  currentImageIndex === index
                    ? "2px solid #007bff"
                    : "1px solid gray",
                borderRadius: "5px",
              }}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt="Product Main"
            style={{
              width: "80%",
             maxHeight: "600px",
              borderRadius: "5px",
              transition: "opacity 2s ease-in-out",
            }}
          />
        </div>
      </div>

      {/* Right Side: Product Details */}
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <h2>{product.name}</h2>

        {/* Product Ratings */}
        {product.rating && (
          <div style={{ marginBottom: "10px" }}>
            <p
              style={{
                fontSize: "16px",
                margin: "5px 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ color: "gold", marginRight: "8px" }}>
                {"★".repeat(Math.round(product.rating.rate)) +
                  "☆".repeat(5 - Math.round(product.rating.rate))}
              </span>
              <span>
                {product.rating.rate.toFixed(1)} / 5 (
                {product.rating.count} reviews)
              </span>
            </p>
          </div>
        )}

        {/* Price Section */}
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          Price: $
          {(
            product.originalPrice -
            (product.originalPrice * product.discountPercentage) / 100
          ).toFixed(2)}
        </p>
        <p style={{ color: "gray", textDecoration: "line-through" }}>
          ${product.originalPrice.toFixed(2)}
        </p>
        <p style={{ color: "green" }}>{product.discountPercentage}% off</p>

        {/* Size Selection */}
        <div style={{ margin: "20px 0" }}>
          <label style={{ fontSize: "16px", marginRight: "10px" }}>
            Select Size:
          </label>
          {sizes.map((size) => (
            <button
              key={size}
              style={{
                padding: "10px",
                margin: "0 5px",
                borderRadius: "5px",
                border:
                  selectedSize === size
                    ? "2px solid #007bff"
                    : "1px solid gray",
                backgroundColor: selectedSize === size ? "#007bff" : "#fff",
                color: selectedSize === size ? "#fff" : "#000",
                cursor: "pointer",
              }}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quantity Selector */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontSize: "16px", marginRight: "10px" }}>
            Quantity:
          </label>
          <button
            style={{
              padding: "5px 10px",
              marginRight: "5px",
              borderRadius: "5px",
              border: "1px solid gray",
              cursor: "pointer",
            }}
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span style={{ margin: "0 10px" }}>{quantity}</span>
          <button
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              border: "1px solid gray",
              cursor: "pointer",
            }}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <button
          onClick={handleViewDetails}
          style={{
            marginBottom: "10px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View Product Details
        </button>

        <button
          onClick={handleAddToCart}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
