import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login"; // Import as default export
import Signup from "./pages/Signup"; // Import as default export
import Aboutus from "./pages/Aboutus";
import Wishlist from "./pages/Wishlist";
import { CartProvider } from "./context/CartContext";
import Preloader from "./components/ElephantPreloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [notification, setNotification] = useState(""); // Notification message

  // Simulate loading or perform actual setup tasks
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide preloader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  // Add to wishlist
  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      showNotification(`${product.name} added to wishlist!`);
    } else {
      showNotification(`${product.name} is already in wishlist!`);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
    showNotification("Item removed from wishlist!");
  };

  // Show notification
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(""); // Clear notification after 3 seconds
    }, 3000);
  };

  return (
    <CartProvider>
      <GlobalStyles />
      {isLoading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <>
          <Navbar />
          <div className="notification-container">
            {notification && <div className="notification">{notification}</div>}
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products addToWishlist={addToWishlist} />}
            />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishlist={wishlist}
                  removeFromWishlist={removeFromWishlist}
                />
              }
            />
          </Routes>
          <Footer />
        </>
      )}
    </CartProvider>
  );
}

export default App;
