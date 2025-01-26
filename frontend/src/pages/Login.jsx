import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import contactimg from "../assets/about2.jpeg";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with", { email, password });
  };

  return (
    <div className="login-container">
      {/* Left section with an image */}
      <div className="image-section">
      <img src={contactimg} alt="Contact Us Banner" className="banner-image" />
      </div>

      {/* Right section with the login form */}
      <div className="form-section">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="auth-form">
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
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <div className="extra-links">
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login
