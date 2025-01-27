import React, { useState, useEffect,useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductModal = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Hook for navigation
    const sizes = useMemo(() => product?.sizes || [], [product]);
    // Update quantity when size changes
    useEffect(() => {
      if (selectedSize) {
        const selectedStock =
          sizes.find((size) => size.size === selectedSize)?.stock || 0;
        setQuantity((prevQuantity) => Math.min(prevQuantity, selectedStock));
      }
    }, [selectedSize, sizes]);

  
    const images = product.images || [require("../assets/product1.png")];
  
    const isOutOfStock = product.sizes?.every((size) => size.stock === 0);

  // Auto-slide only for the main image
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);


  const handleThumbnailClick = (index) => {
    setActiveImage(index); // Set main image on thumbnail click
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
  const selectedStock = selectedSize
    ? sizes.find((size) => size.size === selectedSize)?.stock || 0
    : 0;
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "80%",
        maxWidth: "1000px",
        maxHeight: "800px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
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
          width: "60%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#f9f9f9",
          opacity: isOutOfStock ? 0.5 : 1,
        }}
      >{isOutOfStock && (
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "18px",
          }}
        >
          Product is out of stock
        </p>
      )}
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
                width: "90%",
                margin: "5px 0",
                cursor: "pointer",
                border:
                setActiveImage === index
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
            src={images[activeImage]}
            alt="Product Main"
            style={{
              width: "90%",
              maxHeight: "90%",
              objectFit: "contain",
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
          overflowY: "auto",
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

        {/* Size Selector */}
<div style={{ margin: "20px 0", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
  <label style={{ marginRight: "10px" }}>Size:</label>
  {product.sizes?.map(({ size, stock }) => (
    <button
      key={size}
      disabled={stock === 0}
      className={stock === 0 ? "out-of-stock" : size === selectedSize ? "selected" : ""}
      style={{
        margin: "0 5px",
        padding: "10px",
        borderRadius: "5px",
        border: stock === 0
          ? "1px solid #ddd"
          : size === selectedSize
          ? "2px solid #000"
          : "1px solid gray",
        backgroundColor: stock === 0
          ? "#f2f2f2"
          : size === selectedSize
          ? "#d98484"
          : "#fff",
        color: stock === 0 ? "#ccc" : size === selectedSize ? "#fff" : "#000",
        position: "relative",
        cursor: stock > 0 ? "pointer" : "not-allowed",
      }}
      onClick={() => stock > 0 && setSelectedSize(size)}
    >
      {size}
      {stock === 0 && (
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "2px",
            background: "rgba(0, 0, 0, 0.3)",
            transform: "translate(-50%, -50%) rotate(45deg)",
          }}
        ></span>
      )}
    </button>
  ))}
</div>

 {/* Quantity Selector */}
 <div style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label style={{ marginRight: "10px" }}>Quantity:</label>
        <button
          style={{
            padding: "5px 10px",
            marginRight: "5px",
            borderRadius: "5px",
            border: "1px solid gray",
            cursor: "pointer",
          }}
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          disabled={quantity === 1} // Disable decrement button if quantity is 1
        >
          -
        </button>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "1px solid gray",
            cursor: selectedStock > quantity ? "pointer" : "not-allowed",
          }}
          onClick={() =>
            setQuantity(prevQuantity => Math.min(prevQuantity + 1, selectedStock))
          }
          disabled={quantity >= selectedStock} // Disable increment button if quantity reaches stock
        >
          +
        </button>
      

      {/* Stock Warning */}
      {selectedStock > 0 && (
        <p style={{ color: "red", textAlign: "center", fontSize: "14px" }}>
          {selectedStock - quantity === 1
            ? "Only 1 item left!"
            : selectedStock - quantity === 2
            ? "Only 2 items left!"
            : ""}
        </p>
      )}
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
