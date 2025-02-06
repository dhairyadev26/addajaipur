import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import Profile from "./pages/Profile";
import MyOrders from './pages/MyOrders';
import CustomerCare from './pages/CustomerCare';
import { CartProvider } from "./context/CartContext";
import { OrdersProvider } from './context/OrdersContext';
import Preloader from "./components/ElephantPreloader";
import ShippingPolicy from "./pages/ShippingPolicy";

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [notification, setNotification] = useState("");
  const [userProfile, setUserProfile] = useState(null); // Initially null (no user)

  // Check if user is logged in
  const isAuthenticated = !!userProfile; // If userProfile exists, user is logged in

  // Load user profile from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (storedUser) {
      setUserProfile(storedUser);
    }
    setWishlist(storedWishlist);
    
    
  

    // Simulate a preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem("user", JSON.stringify(userProfile)); // Save user data on change
    }
  }, [userProfile]);
  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add product to wishlist
  const addToWishlist = (product) => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }
  
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      showNotification(`${product.name} added to wishlist!`);
    } else {
      showNotification(`${product.name} is already in the wishlist!`);
    }
  };
  

  // Remove product from wishlist
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
    setTimeout(() => setNotification(""), 3000);
  };

  // Update user profile
  const updateProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
    localStorage.setItem("user", JSON.stringify(updatedProfile)); // Save updated user data
    showNotification("Profile updated successfully!");
  };

  // Function to log out user
const handleLogout = () => {
  localStorage.removeItem("user"); // Remove user from storage
  setUserProfile(null); // Reset user state
  setWishlist([]); // Clear wishlist after logout
  navigate("/login"); // Redirect to login
};


  return (
    <OrdersProvider>
      <CartProvider>
        <GlobalStyles />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Navbar wishlistCount={wishlist.length} userProfile={userProfile} />
            <div className="notification-container">
              {notification && <div className="notification">{notification}</div>}
            </div>
            <Routes>
              <Route
                path="/"
                element={<Home addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} wishlist={wishlist} />}
              />
              <Route
                path="/products"
                element={<Products addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} wishlist={wishlist} />}
              />
              <Route
                path="/products/:id"
                element={<ProductDetails addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} wishlist={wishlist} />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/orders" element={<MyOrders />} />
              <Route path="/customer-care" element={<CustomerCare />} />
              <Route path="/profile" element={<Profile userProfile={userProfile} updateProfile={updateProfile} handleLogout={handleLogout} />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route
                path="/wishlist"
                element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />}
              />
            
            </Routes>
            <Footer />
          </>
        )}
      </CartProvider>
    </OrdersProvider>
  );
}

export default App;
