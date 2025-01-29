import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create Cart Context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user"))); // Load user from localStorage
  const navigate = useNavigate();

  // Load user and cart from localStorage when app starts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser); // Update user state dynamically 
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (storedUser) {
      setUser(storedUser);
    }

    setCart(storedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isAuthenticated = !!user; // Check if user is logged in

  const addToCart = (product, quantity, size) => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id && item.size === size
      );

      const discountedPrice =
        product.originalPrice -
        (product.originalPrice * product.discountPercentage) / 100;

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity,
            size,
            sizes: product.sizes,
            price: discountedPrice,
          },
        ];
      }
    });
  };

  const removeFromCart = (id, size) => {
    setCart((prevCart) => prevCart.filter((product) => !(product.id === id && product.size === size)));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice, user }}>
      {children}
    </CartContext.Provider>
  );
};
