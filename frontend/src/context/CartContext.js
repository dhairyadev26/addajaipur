import React, { createContext, useState, useContext } from "react";

// Create Cart Context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to remove from the cart
  const removeFromCart = (id, size) => {
    setCart((prevCart) => {
      // Remove the item based on the product id and size
      return prevCart.filter((product) => !(product.id === id && product.size === size));
    });
  };

  // Function to add to the cart
  const addToCart = (product, quantity, size) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart with the same size
      const existingProduct = prevCart.find(
        (item) => item.id === product.id && item.size === size
      );

      const discountedPrice =
        product.originalPrice -
        (product.originalPrice * product.discountPercentage) / 100;

      if (existingProduct) {
        // Update quantity if the product exists
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add the new product with calculated price
        return [
          ...prevCart,
          {
            ...product,
            quantity,
            size,
            price: discountedPrice, // Ensure price is included
          },
        ];
      }
    });
  };

  // Get total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
