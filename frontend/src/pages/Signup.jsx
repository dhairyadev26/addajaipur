import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from 'axios'; // Import axios for making HTTP requests
import "../styles/Signup.css";
import img from "../assets/about2.jpeg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username: name,
        email,
        password,
      });
      console.log("Signup successful:", response.data);
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      console.error("Signup error:", error);
      setError("Failed to sign up. Please try again."); // Set error message
    }
  };

  return (
    <div className="signup-container">
      <div className="image-section">
        <img src={img} alt="Contact Us Banner" className="banner-image" />
      </div>

      <div className="form-section">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
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
          <button type="submit" className="auth-button">Signup</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
