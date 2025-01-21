import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();  // Use CartContext
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const products = [
    { id: 1, name: "Jaipur Ethnic Kurta", price: 30, description: "A beautiful ethnic kurta from Jaipur.", image: "kurta.jpg" },
    { id: 2, name: "Jaipur Ethnic Saree", price: 50, description: "A stylish saree from Jaipur.", image: "saree.jpg" },
  ];

  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  // Available sizes
  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);  // Pass product, quantity, and size
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <div>
      <h2>Product Details</h2>
      <img src={product.image} alt={product.name} width={200} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      <div>
        <label>Size:</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {sizes.map((size, index) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
        />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
