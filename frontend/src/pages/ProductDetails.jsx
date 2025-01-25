import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/productsData"; // Importing products data
import "../styles/Products.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  // Derived fields
  const discountedPrice =
    product.originalPrice - (product.originalPrice * product.discountPercentage) / 100;

  const images = product.images || [require("../assets/product1.png")];

  const isOutOfStock = product.sizes?.every((size) => size.stock === 0);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }
    addToCart(product, quantity, selectedSize);
    alert(`${quantity} ${product.name}(s) in size ${selectedSize} added to cart.`);
    navigate("/cart");
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Main Product Details */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Image Slider */}
        <div style={{ flex: "1", position: "relative" }}>
          <img
            src={images[activeImage]}
            alt={product.name}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              opacity: isOutOfStock ? 0.5 : 1,
            }}
          />
          {isOutOfStock && (
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
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: activeImage === index ? "2px solid #007bff" : "1px solid gray",
                }}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div style={{ flex: "1" }}>
          <h2>{product.name}</h2>
          <p>{product.description || "No description available."}</p>

          {/* Display Rating */}
          <p style={{ fontSize: "18px", color: "#FFD700", margin: "10px 0" }}>
            Rating: <strong>{product.rating?.rate || "N/A"} ★</strong>
          </p>

          
          <p style={{ fontSize: "20px", fontWeight: "bold", margin: "10px 0" }}>
            <span className="discounted-price">${discountedPrice.toFixed(2)}</span>{" "}
            <span className="original-price" style={{ textDecoration: "line-through", color: "gray", marginLeft: "10px" }}>
              ${product.originalPrice.toFixed(2)}
            </span>
          </p>
          <p className="discount-percentage" style={{ color: "#28a745", fontWeight: "bold" }}>
            {product.discountPercentage}% off
          </p>
          {/* Display Colors */}
          {product.colors && (
            <div style={{ margin: "10px 0" }}>
              <p>Colors:</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      width: "25px",
                      height: "25px",
                      borderRadius: "50%",
                      backgroundColor: color,
                      border: "1px solid #ddd",
                      cursor: "pointer",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {/* Product Details in Bullet Points */}
          {product.details && (
            <ul style={{ margin: "10px 0", padding: "0 20px", listStyleType: "disc" }}>
              {product.details.map((detail, index) => (
                <li key={index} style={{ margin: "5px 0" }}>
                  {detail}
                </li>
              ))}
            </ul>
          )}

          {/* Size Selector */}
          <div style={{ margin: "20px 0" }}>
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
                    ? "2px solid #007bff"
                    : "1px solid gray",
                  backgroundColor: stock === 0
                    ? "#f2f2f2"
                    : size === selectedSize
                    ? "#007bff"
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
          <div style={{ marginBottom: "20px" }}>
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

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            style={{
              padding: "10px 20px",
              backgroundColor: isOutOfStock ? "#ccc" : "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: isOutOfStock ? "not-allowed" : "pointer",
              marginRight: "10px",
            }}
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
