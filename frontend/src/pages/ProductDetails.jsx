import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/productsData"; // Importing products data
import "../styles/Products.css";
import { FaHeart } from "react-icons/fa";
import securepaymentIcon from "../assets/securepayment.svg";
import truckIcon from "../assets/truck.svg";
import exchangeIcon from "../assets/exchange.svg";
import { Link } from "react-router-dom";



const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "30px",
    marginTop: "20px",
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "#2980b9", // Icon and text color
  },
  icon: {
    width: "70px",
    height: "70px",
    marginBottom: "8px",
    filter: "grayscale(100%)", // Make the icon gray initially
    transition: "filter 0.3s, transform 0.3s",
    
  },
  iconHover: {
    filter: "grayscale(0%)",
    transform: "scale(1.1)",
  },
  iconText: {
    fontSize: "14px",
    fontWeight: "bold",
  },
};
const handleMouseEnter = (e) => {
  e.target.style.filter = styles.iconHover.filter;
  e.target.style.transform = styles.iconHover.transform;
};

const handleMouseLeave = (e) => {
  e.target.style.filter = styles.icon.filter;
  e.target.style.transform = "scale(1)";
};
const ProductDetails = ({ addToWishlist, removeFromWishlist, wishlist = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
   // Scroll to top on component mount or when the `id` changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
   // Hooks should always be called at the top level
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }
  // Filter similar products by category
  const similarProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );
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

  const handleWishlistToggle = () => {
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  const isInWishlist = wishlist.some((item) => item.id === product.id);

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
            
             {/* Tax and Shipping Section */}
          <p style={{ color: "#555", fontSize: "14px" }}>
            Tax included.{" "}
            <Link
              to="/shipping-policy"
              style={{ color: "#2980b9", textDecoration: "underline", cursor: "pointer" }}
            >
              Shipping
            </Link>{" "}
            calculated at checkout.
          </p>
          
           {/* Wishlist Toggle */}
           <div style={{ marginBottom: "20px" }}>
            <button
              onClick={handleWishlistToggle}
              style={{
                padding: "10px 20px",
                backgroundColor: isInWishlist ? "red" : "#ddd",
                color: isInWishlist ? "#fff" : "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaHeart color={isInWishlist ? "white" : "gray"} />
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
           {/* Display Category */}
           {product.category && (
            <p style={{ fontSize: "16px", color: "#555", margin: "10px 0" }}>
              Category: <strong>{product.category}</strong>
            </p>
          )}

          
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
          <div style={styles.container}>
          

             {/* Delivery & Return Link */}
      {/* Delivery & Return Link */}
  <div className="delivery-return-section">
    <button onClick={openModal} className="delivery-return-link">
      Delivery & Return
    </button>
  </div>


      {/* Popup Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>Delivery & Return</h2>
            <p>
              <strong>ADAA JAIPUR</strong>
            </p>
            <p>
              We ship through registered and trusted courier partners for orders
              within India. Please note that Saturdays, Sundays, and Public
              Holidays are not set as working days for standard deliveries.
            </p>
            <p>
              <strong>DOMESTIC SHIPPING:</strong>
            </p>
            <p>
              We offer free shipping for all domestic orders. Delivery time for
              shipping is an estimated 3-10 days. The deliveries are dispatched
              to the shipping address recorded at checkout. All orders are
              processed from our warehouse in Jaipur.
            </p>
            <p>
              <strong>Help</strong>
            </p>
            <p>
              Give us a shout if you have any other questions and/or concerns.
            </p>
            <p>
              Email: <a href="mailto:adaajaipur4india@gmail.com">adaajaipur4india@gmail.com</a>
            </p>
            <p>Phone: +91 20982812070003</p>
          </div>
        </div>
      )}
              {/*  Icon */}
      <div style={styles.iconsContainer}>
        <div style={styles.iconWrapper}>
          <img
            src={truckIcon}
            alt="Free Delivery"
            style={styles.icon}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <span style={styles.iconText}>Free Delivery</span>
        </div>

        {/* Delivery Icon */}
        <div style={styles.iconWrapper}>
          <img
            src={securepaymentIcon}
            alt="Secure Payment"
            style={styles.icon}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <span style={styles.iconText}>Secure Payment</span>
        </div>

        {/* Price Guarantee Icon */}
        <div style={styles.iconWrapper}>
          <img
            src={exchangeIcon}
            alt="Easy Exchange"
            style={styles.icon}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <span style={styles.iconText}>Easy Exchange</span>
        </div>
      </div>
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
         {/* Similar Products Section */}
{similarProducts.length > 0 && (
  <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#f4f4f4", borderRadius: "10px" }}>
    <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px" }}>Similar Products</h3>
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {similarProducts.map((similarProduct) => (
        <div
          key={similarProduct.id}
          style={{
            width: "200px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
            padding: "10px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <img
            src={similarProduct.images?.[0] || require("../assets/product1.png")}
            alt={similarProduct.name}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          />
          <h4 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "5px" }}>{similarProduct.name}</h4>
          <p style={{ color: "#28a745", fontWeight: "bold" }}>
            ${(
              similarProduct.originalPrice -
              (similarProduct.originalPrice * similarProduct.discountPercentage) / 100
            ).toFixed(2)}
          </p>
          <button
            style={{
              padding: "8px 15px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={() => navigate(`/products/${similarProduct.id}`)}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
