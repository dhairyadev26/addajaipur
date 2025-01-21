import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Modal from 'react-modal';
import '../styles/CartStyles.css';  // Import custom CSS for styling

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotalPrice } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['S', 'M', 'L', 'XL'];

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize(product.size);
    setQuantity(product.quantity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSaveChanges = () => {
    if (selectedProduct) {
      removeFromCart(selectedProduct.id, selectedProduct.size);
      const updatedProduct = { ...selectedProduct, size: selectedSize, quantity };
      addToCart(updatedProduct, quantity, selectedSize);
      closeModal();
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>
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
                <p className="product-size">Size: {product.size}</p>
                <p className="product-quantity">Quantity: {product.quantity}</p>
              </div>
              <div className="product-actions">
                <button className="edit-btn" onClick={() => openModal(product)}>Edit</button>
                <button className="remove-btn" onClick={() => removeFromCart(product.id, product.size)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ₹{getTotalPrice()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}

      {selectedProduct && (
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} ariaHideApp={false} className="modal-container">
          <h2 className="modal-heading">Edit Product</h2>
          <div className="modal-content">
            <label>Size:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="modal-select"
            >
              {sizes.map((size, index) => (
                <option key={index} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="modal-content">
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min="1"
              className="modal-input"
            />
          </div>

          <div className="modal-actions">
            <button className="modal-save-btn" onClick={handleSaveChanges}>Save Changes</button>
            <button className="modal-cancel-btn" onClick={closeModal}>Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
