import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";
import { FaHeart } from "react-icons/fa";
import ProductModal from "../components/ProductModal";
import { products } from "../data/productsData";

const Products = ({ addToWishlist, removeFromWishlist, wishlist = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("");

  const handleWishlistToggle = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const getSortedProducts = () => {
    let sortedProducts = [...products];

    switch (sortOption) {
      case "price-high-to-low":
        sortedProducts.sort((a, b) => {
          const aDiscountedPrice =
            a.originalPrice - (a.originalPrice * a.discountPercentage) / 100;
          const bDiscountedPrice =
            b.originalPrice - (b.originalPrice * b.discountPercentage) / 100;
          return bDiscountedPrice - aDiscountedPrice;
        });
        break;
      case "price-low-to-high":
        sortedProducts.sort((a, b) => {
          const aDiscountedPrice =
            a.originalPrice - (a.originalPrice * a.discountPercentage) / 100;
          const bDiscountedPrice =
            b.originalPrice - (b.originalPrice * b.discountPercentage) / 100;
          return aDiscountedPrice - bDiscountedPrice;
        });
        break;
      case "discount":
        sortedProducts.sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
      case "newest":
        sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case "rating":
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }

    return sortedProducts;
  };

  const renderProducts = () =>
    getSortedProducts().map((product) => {
      const discountedPrice =
        product.originalPrice - 
        (product.originalPrice * product.discountPercentage) / 100;

      const isInWishlist = wishlist.some((item) => item.id === product.id);

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
                e.stopPropagation();
                handleWishlistToggle(product);
              }}
            >
              <FaHeart color={isInWishlist ? "red" : "gray"} size={24} />
            </span>
          </div>
          <button onClick={() => setSelectedProduct(product)}>Quick View</button>
        </div>
      );
    });

  return (
    <div className="products-container">
      <h2>PRODUCTS</h2>
      <div className="sort-options">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="price-high-to-low">Price (Highest First)</option>
          <option value="price-low-to-high">Price (Lowest First)</option>
          <option value="discount">Discount</option>
          <option value="newest">What's New</option>
          <option value="rating">Ratings</option>
        </select>
      </div>
      <div className="product-list">{renderProducts()}</div>
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
