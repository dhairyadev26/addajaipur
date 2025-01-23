// src/components/ProductModal.jsx
import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null; // If no product is selected, return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} className="modal-image" />
        <p><strong>Price:</strong> ${product.originalPrice}</p>
        <p><strong>Discount:</strong> {product.discountPercentage}% off</p>
        <p><strong>Description:</strong> This is a detailed description of {product.name}.</p>
      </div>

      {/* Inline styles for modal */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000; /* Ensure it's above other content */
        }

        .modal-content {
          background-color: #fff;
          padding: 15px; /* Reduced padding */
          border-radius: 8px;
          width: 90%; /* Responsive width */
          max-width: 300px; /* Set a smaller max width */
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          position: relative; /* Position relative for close button */
        }

        .close-button {
          background-color: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
          position: absolute; /* Positioning close button */
          top: 10px; /* Adjust as needed */
          right: 10px; /* Adjust as needed */
        }

        .modal-image {
          width: 100%; /* Make image responsive */
          height: 100%; /* Maintain aspect ratio */
          border-radius: 8px; /* Rounded corners for the image */
          margin-bottom: 10px; /* Space below the image */
        }

        h2 {
          font-size: 1.5rem; /* Smaller heading size */
          margin-bottom: .5rem; /* Space below heading */
        }

        p {
          margin-bottom: .5rem; /* Space between paragraphs */
        }
      `}</style>
    </div>
  );
};

export default ProductModal;
