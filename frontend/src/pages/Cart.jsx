

import React, { useEffect, useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import { useOrders } from '../context/OrdersContext'; 
import Modal from "react-modal";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/CartStyles.css";

Modal.setAppElement("#root");

const Cart = ({ product }) => {
  const { cart, addToCart, removeFromCart, getTotalPrice } = useCart();
  const navigate = useNavigate(); 
  const location = useLocation(); // Get current location
  
  const [currentStep, setCurrentStep] = useState(1); // Step tracker (1: Cart, 2: Delivery, 3: Payment)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const { addOrder } = useOrders(); // Get addOrder function from context 

  // Ensure the cart page opens from the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Runs only when the path changes


  // New state for payment method and card details
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });

  const sizes = useMemo(() => {
    return selectedProduct?.sizes || [];
  }, [selectedProduct]);

  const selectedStock = useMemo(() => {
    if (!selectedSize) {
      return 0;
    }
    return sizes.find((size) => size.size === selectedSize)?.stock || 0;
  }, [selectedSize, sizes]);

  const openModal = (product) => {
    setSelectedProduct(product);
    const initialSize = product.sizes?.[0]?.size || "6";
    setSelectedSize(initialSize);
    setQuantity(Math.min(1, product.sizes.find((size) => size.size === initialSize)?.stock || 0));
    setIsModalOpen(true);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity((prevQuantity) => {
      const maxQuantity = selectedStock;
      return Math.max(1, Math.min(newQuantity, maxQuantity));
    });
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (selectedSize) {
      const stock = sizes.find((size) => size.size === selectedSize)?.stock || 0;
      setQuantity((prevQuantity) => Math.min(prevQuantity, stock));
    }
  }, [selectedSize, sizes]);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSaveChanges = () => {
    if (selectedProduct) {
      removeFromCart(selectedProduct.id, selectedProduct.size);
      const updatedProduct = { ...selectedProduct, size: selectedSize };
      addToCart(updatedProduct, quantity, selectedSize);
      closeModal();
    }
  };

  const proceedToNextStep = () => {
    if (
      currentStep === 2 &&
      (!deliveryAddress.name ||
        !deliveryAddress.mobile ||
        !deliveryAddress.pincode ||
        !deliveryAddress.locality ||
        !deliveryAddress.flat ||
        !deliveryAddress.city ||
        !deliveryAddress.state ||
        !deliveryAddress.addressType)
    ) {
      alert("Please fill in all mandatory fields.");
      return;
    }
  
    if (currentStep === 3) {
      // Create an order object with real product data
      const orderItems = cart.map(item => ({
          product: item, // Use the item directly from cart
          quantity: item.quantity,
          totalPrice: item.price * item.quantity, // Calculate total price for this item
          photo: item.image, // Assuming each product has an image property
      }));

      const orderDate = new Date().toISOString(); // Get current date in ISO format

      // Add order to context
      addOrder({
          items: orderItems,
          totalPrice: getTotalPrice(), // Total price of all items in cart
          deliveryAddress,
          orderDate, // Include order date
          status: "Pending", // Initial status of the order
      });

      // Navigate to My Orders page
      navigate("/orders");
      return; // Prevent further state change
  }

  setCurrentStep((prev) => prev + 1);
};
  

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const getTotalDiscount = () => {
    return cart.reduce((total, item) => {
      const discount = (item.price * item.discountPercentage) / 100;
      return total + discount * item.quantity;
    }, 0);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className="cart-heading">Your Cart</h2>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Total Items: {totalItems}</p>

            {cart.length === 0 ? (
              <p className="empty-cart-text">Your cart is empty.</p>
            ) : (
              <div className="cart-items">
                {cart.map((product) => (
                  <div key={product.id} className="product-c">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-details">
                      <p className="product-name">{product.name}</p>
                      <p className="product-price">₹{product.price}</p>
                      <p className="product-size">Selected Size: {product.size}</p>
                      <p className="product-quantity">Quantity: {product.quantity}</p>
                    </div>
                    <div className="product-actions">
                      <button className="edit-btn" onClick={() => openModal(product)}>Edit</button>
                      <button className="remove-btn" onClick={() => removeFromCart(product.id, product.size)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="order-details">
              <h3 className="order-heading">Order Details</h3>
              <div className="order-item"><p>Cart Total:</p><p>₹{getTotalPrice()}</p></div>
              <div className="order-item"><p>Total Discount:</p><p>-₹{getTotalDiscount().toFixed(2)}</p></div>
              <div className="order-item"><p>Delivery Fee:</p><p>Free</p></div>
              <div className="order-total"><p>Order Total:</p><p>₹{getTotalPrice()}</p></div>
            </div>
          </>
        );

        case 2:
  // Delivery step
  return (
    <>
      <h2 style={{ fontSize: "30px", textAlign: "center", marginBottom: "20px" }}>Delivery Details</h2>
      <form style={{ maxWidth: "680px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fffaf3" }}>
        {[
          { label: "Name", key: "name", type: "text" },
          { label: "Mobile", key: "mobile", type: "tel" },
          { label: "Pincode", key: "pincode", type: "text" },
          { label: "Locality/Area/Street", key: "locality", type: "text" },
          { label: "Flat Number/Building Name", key: "flat", type: "text" },
          { label: "Landmark", key: "landmark", type: "text" },
          { label: "District/City", key: "city", type: "text" },
          { label: "State", key: "state", type: "text" },
        ].map(({ label, key, type }) => (
          <div key={key} style={{ marginBottom: "15px" }}>
            <label style={{ fontSize: "18px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>{label}:</label>
            <input
              type={type}
              placeholder={`Enter ${label.toLowerCase()}`}
              value={deliveryAddress[key] || ""}
              onChange={(e) => setDeliveryAddress({ ...deliveryAddress, [key]: e.target.value })}
              style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
          </div>
        ))}

        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontSize: "18px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>Address Type:</label>
          <div style={{ display: "flex", gap: "15px" }}>
            {["Home", "Office", "Other"].map((type) => (
              <label key={type} style={{ fontSize: "16px" }}>
                <input
                  type="radio"
                  name="addressType"
                  value={type}
                  checked={deliveryAddress.addressType === type}
                  onChange={(e) => setDeliveryAddress({ ...deliveryAddress, addressType: e.target.value })}
                  style={{ marginRight: "5px" }}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={deliveryAddress.default || false}
            onChange={(e) => setDeliveryAddress({ ...deliveryAddress, default: e.target.checked })}
            style={{ marginTop:"-4px", marginLeft:"-40%" }}
          />
          <label style={{ fontSize: "16px", marginLeft:"-45%" }}>Make this my default address</label>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <button
            type="button"
            style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#ccc", border: "none", borderRadius: "5px", cursor: "pointer" }}
            onClick={() =>
              setDeliveryAddress({
                name: "",
                mobile: "",
                pincode: "",
                locality: "",
                flat: "",
                landmark: "",
                city: "",
                state: "",
                addressType: "Home",
                default: false,
              })
            }
          >
            Reset
          </button>
          <button
            type="button"
            style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
            onClick={() => {
              const { name, mobile, pincode, locality, flat, city, state, addressType } = deliveryAddress;
              if (!name || !mobile || !pincode || !locality || !flat || !city || !state || !addressType) {
                alert("Please fill in all mandatory fields.");
                return;
              }
              alert("Address saved successfully!");
            }}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );

        
  case 3:
    return (
      <>
        <h2 style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}>Payment</h2>
        <div style={{ maxWidth: "680px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fffaf3" }}>
          <label style={{ fontSize: "18px", fontWeight: "bold", display: "block", marginBottom: "10px" }}>Select Payment Method:</label>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
          <label style={{ fontSize: "16px", display: "flex", alignItems: "center", marginRight:"auto", marginLeft:"10px" }}>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
              style={{ marginLeft: "auto", marginRight:"20px"  }}
            />
            Card
          </label>
          <label style={{ fontSize: "16px", display: "flex", alignItems: "center", marginLeft:"-20px", marginRight:"auto" }}>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              style={{ marginLeft: "auto", marginRight:"auto" }}
            />
            Cash on Delivery
          </label>
          </div>
  
          {paymentMethod === "card" && (
            <div className="card-details" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {[
                { label: "Card Holder Name", key: "cardHolderName", placeholder: "Enter card holder name" },
                { label: "Card Number", key: "cardNumber", placeholder: "Enter card number" },
                { label: "Expiry Date", key: "expiryDate", placeholder: "MM/YY" },
                { label: "CVV", key: "cvv", placeholder: "Enter CVV" },
              ].map(({ label, key, placeholder }) => (
                <div key={key} style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "5px" }}>{label}:</label>
                  <input
                    type="text"
                    value={cardDetails[key] || ""}
                    onChange={(e) => setCardDetails({ ...cardDetails, [key]: e.target.value })}
                    placeholder={placeholder}
                    style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </>
    );
  default:
    return null;

  }
};     
  
  return (
    <div className="cart-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className={`step ${currentStep === 1 ? "active" : currentStep > 1 ? "completed" : ""}`}>
          <span className="step-icon">🛒</span><span>Bag</span>
        </div>
        <div className={`step ${currentStep === 2 ? "active" : currentStep > 2 ? "completed" : ""}`}>
          <span className="step-icon">📍</span><span>Delivery Details</span>
        </div>
        <div className={`step ${currentStep === 3 ? "active" : ""}`}>
          <span className="step-icon">💳</span><span>Payment</span>
        </div>
      </div>
      {/* ... existing progress bar code ... */}

      {/* Render the Content for Current Step */}
      {renderStepContent()}

      {/* Next Button */}
      <div className="order-details">
        {currentStep > 1 && (
          <button
            type="button"
            className="back-btn"
            onClick={goToPreviousStep}
            style={{ padding: "11px 40px", fontSize: "14px", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", marginLeft:"5%", }}
          >
            BACK
          </button>
        )}
        {/* Using the Checkout button here */}
        <button className="checkout-btn" onClick={proceedToNextStep}>
          {currentStep < 3 ? "Proceed to Next Step" : "Checkout"}
        </button>
      </div>
      {/* Modal for Editing Product */}
      {/* Modal for Editing Product */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
  <h2>Edit Product</h2>
  {selectedProduct && (
    <div>
      {/* Size Selector */}
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <label style={{ marginRight: "10px" }}>Size:</label>
        {selectedProduct.sizes.map(({ size, stock }) => (
          <button
            key={size}
            disabled={stock === 0}
            className={
              stock === 0
                ? "out-of-stock"
                : size === selectedSize
                ? "selected"
                : ""
            }
            style={{
              margin: "0 5px",
              padding: "10px",
              borderRadius: "5px",
              border:
                stock === 0
                  ? "1px solid #ddd"
                  : size === selectedSize
                  ? "2px solid #000"
                  : "1px solid gray",
              backgroundColor:
                stock === 0
                  ? "#f2f2f2"
                  : size === selectedSize
                  ? "#d98484"
                  : "#fff",
              color: stock === 0 ? "#ccc" : size === selectedSize ? "#fff" : "#000",
              position: "relative",
              cursor: stock > 0 ? "pointer" : "not-allowed",
            }}
            onClick={() => {
              if (stock > 0) {
                setSelectedSize(size);
                setQuantity(1); // Reset quantity when selecting a new size
              }
            }}
            title={stock === 0 ? "Out of stock" : ""}
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
      <div
        style={{
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
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= 1}
          
        >
          -
        </button>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "1px solid ",
            cursor: selectedStock > quantity ? "pointer" : "not-allowed",
          }}
          onClick={() => handleQuantityChange(quantity + 1)}
          disabled={quantity >= selectedStock}
        >
          +
        </button>
      </div>

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
  )}
  

  <div className="modal-actions">
    <button className="modal-save-btn" onClick={handleSaveChanges}>
      Save Changes
    </button>
    <button className="modal-cancel-btn" onClick={closeModal}>
      Cancel
    </button>
  </div>
</Modal>


    </div>
  );
};

export default Cart;
