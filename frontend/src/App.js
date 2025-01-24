import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutUs from "./pages/Aboutus";
import Contact from "./pages/Contact";
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
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      showNotification(`${product.name} added to wishlist!`);
    } else {
      showNotification(`${product.name} is already in the wishlist!`);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (id) => {
    const removedItem = wishlist.find((item) => item.id === id);
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
    if (removedItem) {
      showNotification(`${removedItem.name} removed from wishlist!`);
    }
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
          <Navbar wishlistCount={wishlist.length} />
          <div className="notification-container">
            {notification && <div className="notification">{notification}</div>}
          </div>
          <Routes>
            <Route path="/" element={<Home addToWishlist={addToWishlist}
                  removeFromWishlist={removeFromWishlist}
                  wishlist={wishlist}/>} />
            <Route
              path="/products"
              element={
                <Products
                  addToWishlist={addToWishlist}
                  removeFromWishlist={removeFromWishlist}
                  wishlist={wishlist}
                />
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProductDetails
                  addToWishlist={addToWishlist}
                  removeFromWishlist={removeFromWishlist}
                  wishlist={wishlist}
                />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
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
