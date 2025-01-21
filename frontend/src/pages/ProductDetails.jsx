import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import "../styles/Products.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();  // Use CartContext
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const products = [
    { id: 1, name: "Jaipur Ethnic Kurta", price: 30, description: "A beautiful ethnic kurta from Jaipur.", image: "kurta1.jpg" },
    { id: 2, name: "Floral Printed Kurta", price: 35, description: "A beautiful ethnic kurta from Jaipur.", image: "kurta2.jpg" },
    { id: 3, name: "Casual Cotton Kurta", price: 25, description: "A beautiful ethnic kurta from Jaipur.", image: "kurta3.jpg" },
    { id: 4, name: "Designer Party Kurta", price: 40, description: "A beautiful ethnic kurta from Jaipur.", image: "kurta4.jpg" },
    { id: 5, name: "Summer Printed Frock", price: 20, description: "A stylish frock from Jaipur.", image: "frock1.jpg" },
    { id: 6, name: "Casual Denim Frock", price: 30, description: "A stylish frock from Jaipur.", image: "frock2.jpg" },
    { id: 7, name: "Party Wear Frock", price: 50, description: "A stylish frock from Jaipur.", image: "frock3.jpg" },
    { id: 8, name: "Ethnic Printed Frock", price: 35, description: "A stylish frock from Jaipur.", image: "frock4.jpg" },
    { id: 9, name: "Banarasi Silk Saree", price: 100, description: "A designer saree from Jaipur.", image: "saree1.jpg" },
    { id: 10, name: "Kanjeevaram Saree", price: 120, description: "A designer saree from Jaipur.", image: "saree2.jpg" },
    { id: 11, name: "Chiffon Designer Saree", price: 130, description: "A designer saree from Jaipur.", image: "saree3.jpg" },
    { id: 12, name: "Traditional Cotton Saree", price: 90, description: "A designer saree from Jaipur.", image: "saree4.jpg" },

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
