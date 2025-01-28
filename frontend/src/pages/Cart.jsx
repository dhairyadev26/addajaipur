import React, { useEffect, useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import Modal from "react-modal";
import "../styles/CartStyles.css";
Modal.setAppElement("#root");

const Cart = ({ product }) => {
  const { cart, addToCart, removeFromCart, getTotalPrice } = useCart();
  const [currentStep, setCurrentStep] = useState(1); // Step tracker (1: Cart, 2: Delivery, 3: Payment)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [deliveryAddress, setDeliveryAddress] = useState("");

  
  const sizes = useMemo(() => {
    return selectedProduct?.sizes || [];
  }, [selectedProduct]);


  // Memoize the stock calculation
  const selectedStock = useMemo(() => {
    if (!selectedSize) {
      console.log("No size selected, returning stock as 0.");
      return 0;
    }

    const stock = sizes.find((size) => size.size === selectedSize)?.stock || 0;

    console.log("Calculated Selected Stock:", stock); // Debugging
    return stock;
  }, [selectedSize, sizes]);

  // Open modal function
  const openModal = (product) => {
    setSelectedProduct(product);

    // Default to the first size in the sizes array (if available)
    const initialSize = product.sizes?.[0]?.size || "6"; // Defaulting to "6" if no size is present
    setSelectedSize(initialSize);

    const initialStock = product.sizes.find((size) => size.size === initialSize)?.stock || 0;

    console.log("Product Sizes:", product.sizes); // Debugging
    console.log("Initial Size:", initialSize); // Debugging
    console.log("Initial Stock for Selected Size:", initialStock); // Debugging

    setQuantity(Math.min(1, initialStock));
    setIsModalOpen(true);
  };

  // Handle quantity change based on stock
  const handleQuantityChange = (newQuantity) => {
    setQuantity((prevQuantity) => {
      const maxQuantity = selectedStock;
      const updatedQuantity = Math.max(1, Math.min(newQuantity, maxQuantity));
      console.log("Updated Quantity:", updatedQuantity);
      return updatedQuantity;
    });
  };
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  useEffect(() => {
    if (selectedSize) {
      const stock = sizes.find((size) => size.size === selectedSize)?.stock || 0;
      setQuantity((prevQuantity) => Math.min(prevQuantity, stock)); // Clamp quantity to stock
    }
  }, [selectedSize, sizes]);
 
  
  
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSaveChanges = () => {
    if (selectedProduct) {
      removeFromCart(selectedProduct.id, selectedProduct.size);
      const updatedProduct = {
        ...selectedProduct,
        size: selectedSize, // Updated size
        quantity,           // Updated quantity
      };
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
    setCurrentStep((prev) => prev + 1);
  };
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  

  // Calculate the total discount based on the cart
  const getTotalDiscount = () => {
    return cart.reduce((total, item) => {
      const discount = (item.price * item.discountPercentage) / 100;
      return total + discount * item.quantity;
    }, 0);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        // Cart step
        return (
          <>
            <h2 className="cart-heading">Your Cart</h2>
            <p>Total Items: {totalItems}</p>
            {cart.length === 0 ? (
              <p className="empty-cart-text">Your cart is empty.</p>
            ) : (
              <div className="cart-items">
                {cart.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">₹{product.price}</p>
                  {/* Render the selected size */}
                  <p className="product-size">Selected Size: {product.size}</p>
                  {/* Render the selected quantity */}
                  <p className="product-quantity">Quantity: {product.quantity}</p>
                  {/* Render available sizes and stock */}
                  
                </div>
                <div className="product-actions">
                  <button className="edit-btn" onClick={() => openModal(product)}>
                    Edit
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(product.id, product.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
                ))}
              </div>
            )}

            <div className="order-details">
              <h3 className="order-heading">Order Details</h3>
              <div className="order-item">
                <p>Cart Total:</p>
                <p>₹{getTotalPrice()}</p>
              </div>
              <div className="order-item">
                <p>Total Discount:</p>
                <p>-₹{getTotalDiscount().toFixed(2)}</p>
              </div>
              <div className="order-item">
                <p>Delivery Fee:</p>
                <p>Free</p>
              </div>
              <div className="order-total">
                <p>Order Total:</p>
                <p>₹{getTotalPrice()}</p>
              </div>
            </div>
          </>
        );
        case 2:
          // Delivery step
          return (
            <>
              <h2 className="cart-heading">Delivery Details</h2>
              <form className="delivery-form">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={deliveryAddress.name || ""}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Mobile:</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={deliveryAddress.mobile || ""}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, mobile: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Pincode:</label>
                  <input
                    type="text"
                    placeholder="Enter your pincode"
                    value={deliveryAddress.pincode || ""}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, pincode: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Locality/Area/Street:</label>
                  <input
                    type="text"
                    placeholder="Enter locality/area/street"
                    value={deliveryAddress.locality || ""}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, locality: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Flat Number/Building Name:</label>
                  <input
                    type="text"
                    placeholder="Enter flat/building"
                    value={deliveryAddress.flat || ""}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, flat: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Landmark:</label>
                  <input
                    type="text"
                    placeholder="Enter landmark"
                    value={deliveryAddress.landmark || ""}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, landmark: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>District/City:</label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    value={deliveryAddress.city || ""}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, city: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>State:</label>
                  <input
                    type="text"
                    placeholder="Enter state"
                    value={deliveryAddress.state || ""}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, state: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Address Type:</label>
                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="addressType"
                        value="Home"
                        checked={deliveryAddress.addressType === "Home"}
                        onChange={(e) => setDeliveryAddress({ ...deliveryAddress, addressType: e.target.value })}
                      />
                      Home
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="addressType"
                        value="Office"
                        checked={deliveryAddress.addressType === "Office"}
                        onChange={(e) => setDeliveryAddress({ ...deliveryAddress, addressType: e.target.value })}
                      />
                      Office
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="addressType"
                        value="Other"
                        checked={deliveryAddress.addressType === "Other"}
                        onChange={(e) => setDeliveryAddress({ ...deliveryAddress, addressType: e.target.value })}
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={deliveryAddress.default || false}
                      onChange={(e) => setDeliveryAddress({ ...deliveryAddress, default: e.target.checked })}
                    />
                    Make this my default address
                  </label>
                </div>
                <div className="form-buttons">
                  <button
                    type="button"
                    className="reset-btn"
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
                    className="save-btn"
                    onClick={() => {
                      // Check if all fields are filled
                      const {
                        name,
                        mobile,
                        pincode,
                        locality,
                        flat,
                        city,
                        state,
                        addressType,
                      } = deliveryAddress;
                      if (
                        !name ||
                        !mobile ||
                        !pincode ||
                        !locality ||
                        !flat ||
                        !city ||
                        !state ||
                        !addressType
                      ) {
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
        // Payment step
        return (
          <>
            <h2 className="cart-heading">Payment</h2>
            <p>Thank you for your order! Proceed to payment below:</p>
            <button className="checkout-btn">Make Payment</button>
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
          <span className="step-icon">🛒</span>
          <span>Bag</span>
        </div>
        <div className={`step ${currentStep === 2 ? "active" : currentStep > 2 ? "completed" : ""}`}>
          <span className="step-icon">📍</span>
          <span>Delivery Details</span>
        </div>
        <div className={`step ${currentStep === 3 ? "active" : ""}`}>
          <span className="step-icon">💳</span>
          <span>Payment</span>
        </div>
      </div>

      {/* Render the Content for Current Step */}
      {renderStepContent()}

      {/* Next Button */}
      <div className="order-details">
      {currentStep > 1 && (
          <button className="back-btn" onClick={goToPreviousStep}>
            Back
          </button>
        )}
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
            border: "1px solid gray",
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
