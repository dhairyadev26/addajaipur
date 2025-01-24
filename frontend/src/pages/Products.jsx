import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";
import { FaHeart } from "react-icons/fa";
import ProductModal from "../components/ProductModal";
import product1 from "../assets/product1.png";

const Products = ({ addToWishlist, removeFromWishlist, wishlist = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const renderProducts = () =>
    products.map((product) => {
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
