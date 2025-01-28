import React, { useState, useEffect,useMemo } from "react";
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
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    marginTop: "20px",
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "#804341", // Icon and text color
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
    marginTop: "-20px",
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
  const product = products.find((item) => item.id === parseInt(id));
  const sizes = useMemo(() => product?.sizes || [], [product]);
  // Update quantity when size changes
  useEffect(() => {
    if (selectedSize) {
      const selectedStock =
        sizes.find((size) => size.size === selectedSize)?.stock || 0;
      setQuantity((prevQuantity) => Math.min(prevQuantity, selectedStock));
    }
  }, [selectedSize, sizes]);
   // Scroll to top on component mount or when the `id` changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
   // Hooks should always be called at the top level
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);

  // Find the current product

  if (!product) {
    return <p>Product not found</p>;
  }

  const selectedStock = selectedSize
    ? sizes.find((size) => size.size === selectedSize)?.stock || 0
    : 0;

  
    
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
          backgroundColor: "#fffcf1",
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
              height: "50%",
              padding:"80px",
              marginLeft: "20%",
              marginRight: "30px",
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
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "160px"}}>
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Thumbnail ${index}`}
      style={{
        width: "80px",
        height: "80px",
        objectFit: "cover",
        marginLeft: "-450px",
        marginTop: "-460px",
        cursor: "pointer",
        border: activeImage === index ? "3px solid rgb(176, 66, 46)" : "1px solid gray",
        marginBottom: "100px", // Adds space between the images
      }}
      onClick={() => setActiveImage(index)}
      
    />
  ))}
</div>
</div>
</div>




        {/* Product Info */}
        <div style={{ flex: "1", fontSize: "30px" }}>
          <h2 style = {{marginBottom: "-1%"}}>{product.name}</h2>
          <p>{product.description || "No description available."}</p>




          {/* Display Rating */}
          <p style={{ fontSize: "20px", color: "#000", margin: "10px 0" }}>
            Rating: <strong>{product.rating?.rate || "N/A"} ★</strong>
          </p>
          <p style={{ fontSize: "30px", fontWeight: "bold", margin: "10px 0", marginTop: "-10px", }}>
            <span className="discounted-price">${discountedPrice.toFixed(2)}</span>{" "}
            <span className="original-price" style={{ textDecoration: "line-through", color: "gray", marginLeft: "10px" }}>
              ${product.originalPrice.toFixed(2)}
            </span>
          </p>
          <p className="discount-percentage" style={{ color: "#273e54", fontWeight: "bold", marginTop:"-10px", }}>
            {product.discountPercentage}% off
          </p>




             {/* Tax and Shipping Section */}
          <p style={{ color: "#555", fontSize: "17px", marginTop: "-1px",  }}>
            Tax included.{" "}
            <Link
              to="/shipping-policy"
              style={{ color: "#804341", textDecoration: "underline", cursor: "pointer", marginTop: "-10px", }}
            >
              Shipping
            </Link>{" "}
            calculated at checkout.
          </p>




          {product.colors && (
  <div
    style={{
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <div style={{ display: "flex", gap: "10px" }}>
      {product.colors.map((color, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {/* Color Circle */}
          <div
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              backgroundColor: color.code,
              border: "1px solid #ddd",
              cursor: "pointer",
            }}
          ></div>
          {/* Color Code */}
          <span style={{ fontSize: "12px", color: "#555" }}></span>
          {/* Color Name */}
          <span style={{ fontSize: "12px", fontWeight: "bold", color: "#333" }}>
            {color.name}
          </span>
        </div>
      ))}
    </div>
  </div>
)}



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

<div style={styles.container}> 



              {/* Add to Cart Button */}
         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "-20px", }}>
  <button
    onClick={handleAddToCart}
    disabled={isOutOfStock}
    style={{
      padding: "10px 100px",
      backgroundColor: isOutOfStock ? "#ccc" : "#804341",
      color: "#fff",
      border: "#fff",
      borderRadius: "5px",
      cursor: isOutOfStock ? "not-allowed" : "pointer",
    }}
  >
    Add to Cart
  </button>
  <button
  onClick={() => navigate(-1)}
  style={{
    padding: "9px 6px",
    backgroundColor: "transparent",
    color: "#000",
    border: "1px solid #000",  // Added black border
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  Back
</button>

</div>





           {/* Wishlist Toggle */}
           <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
  <button
    onClick={handleWishlistToggle}
    style={{
      padding: '10px 80px',
      backgroundColor: isInWishlist ? '#0a0a0a' : '#ddd',
      color: isInWishlist ? '#fff' : '#000',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginTop: '16px',
    }}
  >
    {/* Heart Icon */}
    <FaHeart
      style={{
        fill: isInWishlist ? 'red' : 'white',
        stroke: 'red',
      }}
    />
    {/* Button Text */}
    <span
      style={{
        fontSize: '18px',
        fontWeight: 'normal',
        letterSpacing: isInWishlist ? 'normal' : '1px',
      }}
    >
      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </span>
  </button>
</div>





      {/* Delivery & Return Link */}
      <div className="delivery-return-section">
            <button onClick={openModal} className="delivery-return-link"
            style={{
              padding: "10px 20px",
              backgroundColor: "transparent",  // Transparent background
              color: "black",  // Black text color
              border: "1px solid black",  // Black border
              borderRadius: "5px",
              cursor: "pointer",
              display: "block",  // To allow centering
              margin: "0 auto",  // Center the button horizontally
            }} >
            Delivery & Return
            </button>
          </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn"  onClick={closeModal} style={{ position: 'absolute', right: '50px', top: '650px' }} >
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



        {/* Display Category */}
          {product.category && (
            <p style={{ fontSize: "20px", color: "#555", margin: "10px" }}>
              Category: <strong>{product.category}</strong>
            </p>
          )}




          {/* Product Details in Bullet Points */}
          {product.details && (
  <div style={{ textAlign: "center", fontSize: "17px" }}>
    <ul
      style={{
        display: "inline-block",
        textAlign: "left",
        listStylePosition: "inside",
        marginBottom: "-10px",
        padding: "0 20px",
      }}
    >
      {product.details.map((detail, index) => (
        <li key={index} style={{ margin: "5px 0" }}>
          {detail}
        </li>
      ))}
    </ul>
  </div>
)}




         {/* Similar Products Section */}
{similarProducts.length > 0 && (
  <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", marginLeft: "-100%", marginRight: "20px" }}>
    <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px" }}>Similar Products</h3>
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {similarProducts.map((similarProduct) => (
        <div
          key={similarProduct.id}
          style={{
            width: "200px",
            
            backgroundColor: "transparent",
            gap:"40px",
            padding: "10px",
            
            textAlign: "center",
          }}
        >
          <img
            src={similarProduct.images?.[0] || require("../assets/product1.png")}
            alt={similarProduct.name}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
             
              marginBottom: "10px",
            }}
          />
          <h4 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "5px" }}>{similarProduct.name}</h4>
          <p style={{ color: "#000", fontWeight: "bold", marginTop: "-5px" }}>
            ${(
              similarProduct.originalPrice -
              (similarProduct.originalPrice * similarProduct.discountPercentage) / 100
            ).toFixed(2)}
          </p>
          <button
            style={{
              padding: "8px 5px",
              backgroundColor: "#804341",
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
