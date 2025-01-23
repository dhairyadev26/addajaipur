import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";
import { FaHeart } from "react-icons/fa";
import ProductModal from "../components/ProductModal";

// Import images directly
import product1 from "../assets/product1.png";
// Import other images as needed
// import kurta2 from "../assets/kurta2.jpg";
// import kurta3 from "../assets/kurta3.jpg";
// import kurta4 from "../assets/kurta4.jpg";
// import frock1 from "../assets/frock1.jpg";
// import frock2 from "../assets/frock2.jpg";
// import saree1 from "../assets/saree1.jpg";
// import saree2 from "../assets/saree2.jpg";

const Products = ({ addToWishlist }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [notification, setNotification] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Product data with original price, discount percentage, ratings, and images
  const kurtis = [
    {
      id: 1,
      name: "Jaipur Ethnic Kurta",
      originalPrice: 30,
      discountPercentage: 30,
      rating: { rate: 4.5, count: 120 },
      image: product1,
    },
    {
      id: 2,
      name: "Floral Printed Kurta",
      originalPrice: 35,
      discountPercentage: 20,
      rating: { rate: 4.0, count: 95 },
      // image: kurta2,
    },
    {
      id: 3,
      name: "Casual Cotton Kurta",
      originalPrice: 25,
      discountPercentage: 10,
      rating: { rate: 3.8, count: 70 },
      // image: kurta3,
    },
    {
      id: 4,
      name: "Designer Party Kurta",
      originalPrice: 40,
      discountPercentage: 25,
      rating: { rate: 4.9, count: 150 },
      // image: kurta4,
    },
  ];

  const frocks = [
    {
      id: 5,
      name: "Summer Floral Frock",
      originalPrice: 20,
      discountPercentage: 15,
      rating: { rate: 4.2, count: 110 },
      // image: frock1,
    },
    {
      id: 6,
      name: "Casual Denim Frock",
      originalPrice: 30,
      discountPercentage: 10,
      rating: { rate: 3.9, count: 85 },
      // image: frock2,
    },
  ];

  const saris = [
    {
      id: 9,
      name: "Banarasi Silk Saree",
      originalPrice: 100,
      discountPercentage: 30,
      rating: { rate: 4.8, count: 210 },
      // image: saree1,
    },
    {
      id: 10,
      name: "Kanjeevaram Saree",
      originalPrice: 120,
      discountPercentage: 25,
      rating: { rate: 4.6, count: 190 },
      // image: saree2,
    },
  ];

  const products = [...kurtis, ...frocks, ...saris];

  const handleWishlistToggle = (product) => {
    if (wishlistItems.includes(product.id)) {
      setWishlistItems(wishlistItems.filter((id) => id !== product.id));
    } else {
      setWishlistItems([...wishlistItems, product.id]);
      addToWishlist(product);
      showNotification(`${product.name} added to wishlist`);
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const renderProducts = () =>
    products.map((product) => {
      const discountedPrice =
        product.originalPrice -
        (product.originalPrice * product.discountPercentage) / 100;

      return (
        <div className="product-card" key={product.id}>
          <Link to={`/products/${product.id}`} className="product-link">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <p>{product.name}</p>
              {/* Product Ratings */}
              {product.rating && (
                <p className="product-rating">
                  <span className="stars">
                    {"★".repeat(Math.round(product.rating.rate)) +
                      "☆".repeat(5 - Math.round(product.rating.rate))}
                  </span>
                  <span className="rating-score">
                    {product.rating.rate.toFixed(1)} / 5
                  </span>
                  <span className="rating-count">({product.rating.count} reviews)</span>
                </p>
              )}
              <p className="price">
                <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
                <span className="original-price">
                  <del>${product.originalPrice.toFixed(2)}</del>
                </span>
              </p>
              <p className="discount-percentage">{product.discountPercentage}% off</p>
            </div>
          </Link>
          <div className="wishlist-icon-container">
            <span
              className="wishlist-icon"
              onClick={(e) => {
                e.stopPropagation(); // Prevent click from triggering Link navigation
                handleWishlistToggle(product);
              }}
            >
              <FaHeart
                color={wishlistItems.includes(product.id) ? "red" : "gray"}
                size={24}
              />
            </span>
          </div>
          {/* Quick View Button */}
          <button onClick={() => setSelectedProduct(product)}>Quick View</button>
        </div>
      );
    });

  return (
    <div className="products-container">
      <h2>PRODUCTS</h2>
      {notification && <div className="notification">{notification}</div>}
      <div className="product-list">{renderProducts()}</div>

      {/* Render ProductModal if selectedProduct is not null */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;
