import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Preloader from "./components/ElephantPreloader"; // Import the preloader component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading or perform actual setup tasks
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide preloader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <CartProvider>
      <GlobalStyles />
      {isLoading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </>
      )}
    </CartProvider>
  );
}

export default App;
