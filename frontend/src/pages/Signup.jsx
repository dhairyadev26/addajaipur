import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "../styles/Signup.css";
import img from "../assets/about2.jpeg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Sign up with", { name, email, password });
    // Add signup logic here
  };

  return (

    <div className="signup-container">
          {/* Left section with an image */}
          <div className="image-section">
          <img src={img} alt="Contact Us Banner" className="banner-image" />
          </div>

    <div className="form-section">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/home.jsx">
                 <button type="submit" className="auth-button">Signup</button>
        </Link>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    </div>
  );
};

export default Signup;
