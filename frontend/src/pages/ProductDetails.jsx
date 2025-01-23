import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Products.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const products = [
    {
      id: 1,
      name: "Jaipur Ethnic Kurta",
      price: 30,
      description: "A beautiful ethnic kurta from Jaipur.",
      images: [require("../assets/product1.png")],
      category: "kurta",
      rating: 4.5,
      details: [
        "Made from premium quality fabric",
        "Perfect for festive occasions",
        "Available in multiple sizes",
      ],
    },
    {
      id: 2,
      name: "Floral Printed Kurta",
      price: 35,
      description: "A floral printed kurta with a modern touch.",
      images: [
        require("../assets/product1.png"),
        require("../assets/product1.png"),
        require("../assets/product1.png"),
      ],
      category: "kurta",
      rating: 4.0,
      details: [
        "Lightweight and breathable fabric",
        "Elegant floral prints",
        "Ideal for casual outings",
      ],
    },
    {
      id: 3,
      name: "Casual Cotton Kurta",
      price: 25,
      description: "A casual cotton kurta for daily wear.",
      images: [require("../assets/product1.png"), require("../assets/product1.png")],
      category: "kurta",
      rating: 3.8,
      details: [
        "Comfortable for everyday use",
        "Classic style with modern comfort",
        "Machine washable",
      ],
    },
    {
      id: 4,
      name: "Designer Party Kurta",
      price: 40,
      description: "An elegant designer party kurta.",
      images: [
        require("../assets/product1.png"),
        require("../assets/product1.png"),
        require("../assets/product1.png"),
      ],
      category: "kurta",
      rating: 4.9,
      details: [
        "Intricate designer embroidery",
        "Perfect for parties and celebrations",
        "Available in vibrant colors",
      ],
    },
    {
      id: 5,
      name: "Summer Floral Frock",
      originalPrice: 20,
      discountPercentage: 15,
      price: 20 - (20 * 15) / 100,
      description: "A lightweight floral frock perfect for summer.",
      images: [require("../assets/product1.png"), require("../assets/product1.png")],
      category: "frock",
      rating: 4.2, 
      details: [
        "Floral print design",
        "Made from breathable cotton fabric",
        "Ideal for casual summer outings",
      ],
    },
    {
      id: 6,
      name: "Casual Denim Frock",
      originalPrice: 30,
      discountPercentage: 10,
      price: 30 - (30 * 10) / 100,
      description: "A stylish denim frock for casual wear.",
      images: [
        require("../assets/product1.png"),
        require("../assets/product1.png"),
        require("../assets/product1.png"),
      ],
      category: "frock",
      rating: 3.9,
      details: [
        "Durable denim fabric",
        "Stylish design with pockets",
        "Available in multiple sizes",
      ],
    },
  
    // Saris
    {
      id: 9,
      name: "Banarasi Silk Saree",
      originalPrice: 100,
      discountPercentage: 30,
      price: 100 - (100 * 30) / 100,
      description: "A luxurious Banarasi silk saree for special occasions.",
      images: [
        require("../assets/product1.png"),
        require("../assets/product1.png"),
        require("../assets/product1.png"),
      ],
      category: "sari",
      rating: 4.8,
      details: [
        "Handwoven silk saree",
        "Golden zari work",
        "Perfect for weddings and festivals",
      ],
    },
    {
      id: 10,
      name: "Kanjeevaram Saree",
      originalPrice: 120,
      discountPercentage: 25,
      price: 120 - (120 * 25) / 100,
      description: "A premium Kanjeevaram saree with intricate designs.",
      images: [
        require("../assets/product1.png"),
        require("../assets/product1.png"),
        require("../assets/product1.png"),
      ],
      category: "sari",
      rating: 4.6,
      details: [
        "Authentic Kanjeevaram silk",
        "Rich colors with traditional motifs",
        "Ideal for grand celebrations",
      ],
    },
  ];

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  // Filter similar products by category
  const similarProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

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
        <div style={{ flex: "1" }}>
          <img
            src={product.images[activeImage]}
            alt={product.name}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {product.images.map((img, index) => (
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
                  border:
                    activeImage === index
                      ? "2px solid #007bff"
                      : "1px solid gray",
                }}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div style={{ flex: "1" }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>

          {/* Display Rating */}
          <p style={{ fontSize: "18px", color: "#FFD700", margin: "10px 0" }}>
            Rating: <strong>{product.rating} ★</strong>
          </p>

          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            Price: ${product.price.toFixed(2)}
          </p>

          {/* Product Details in Bullet Points */}
          <ul style={{ margin: "10px 0", padding: "0 20px", listStyleType: "disc" }}>
            {product.details.map((detail, index) => (
              <li key={index} style={{ margin: "5px 0" }}>
                {detail}
              </li>
            ))}
          </ul>

          {/* Size Selector */}
          <div style={{ margin: "20px 0" }}>
            <label style={{ marginRight: "10px" }}>Size:</label>
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                style={{
                  margin: "0 5px",
                  padding: "10px",
                  borderRadius: "5px",
                  border:
                    size === selectedSize
                      ? "2px solid #007bff"
                      : "1px solid gray",
                  backgroundColor: size === selectedSize ? "#007bff" : "#fff",
                  color: size === selectedSize ? "#fff" : "#000",
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
          <button
            onClick={handleAddToCart}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
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

      {/* Similar Products */}
      <div style={{ marginTop: "40px" }}>
        <h3>Similar Products</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {similarProducts.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                width: "200px",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={item.images[0]}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <h4 style={{ fontSize: "16px", margin: "10px 0" }}>{item.name}</h4>
              <p style={{ color: "gray" }}>${item.price.toFixed(2)}</p>
              <button
                onClick={() => navigate(`/product-details/${item.id}`)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
