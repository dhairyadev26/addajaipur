import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // Import heart icon

const Nav = styled.nav`
  position: fixed;
  top: ${(props) => (props.scrolled ? "10px" : "0")};
  left: 50%;
  transform: translateX(-50%);
  width: ${(props) => (props.scrolled ? "65%" : "100%")};
  height: ${(props) => (props.scrolled ? "7%" : "10%")};
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.scrolled ? "0.5rem 1.5rem" : "1rem 2rem")};
  background-color: ${(props) => (props.scrolled ? "#ffffff" : "transparent")};
  color: ${(props) => (props.isHomePage && !props.scrolled ? "#ffffff" : "#000000")};
  border-radius: ${(props) => (props.scrolled ? "50px" : "0")};
  box-shadow: ${(props) =>
    props.scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.2)" : "none"};
  transition: all 0.4s ease;
`;

const Logo = styled.div`
  font-size: ${(props) => (props.scrolled ? "1.5rem" : "1.5rem")};
  font-weight: bold;
  font-family: "The Seasons";
  color: inherit;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.scrolled ? "1.2rem" : "1.2rem")};
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-size: 1rem;
    font-family: "Cinzel", serif;
    color: inherit;
    text-decoration: none;
    padding: 0.1rem 0.8rem;
    border-radius: 15px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: ${(props) =>
        props.scrolled ? "#000000" : "rgba(255, 255, 255, 0.2)"};
      color: ${(props) => (props.scrolled ? "#ffffff" : "#ffffff")};
    }

    display: flex;
    align-items: center;
    gap: 0.5rem; /* Space between icon and text */
  }
`;

const ProfileButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  font-family: "Cinzel", serif;
  font-size: 1rem;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444444;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [userProfile, setUserProfile] = useState({ name: "" });
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Fetch user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserProfile({ name: storedUser.username }); // Set the user's name dynamically
    }
  }, []);


  // Extract initials from the username
  const getInitials = (name) => {
    if (!name) return ""; // Handle empty name case
    const [firstName, lastName] = name.split(" ");
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav scrolled={scrolled} isHomePage={isHomePage}>
      <Logo scrolled={scrolled}>A D A A</Logo>
      <Menu scrolled={scrolled}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/aboutus">Aboutus</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/wishlist">
          <FaHeart /> Wishlist
        </Link>
      </Menu>
      <Link to="/profile">
        <ProfileButton>{getInitials(userProfile.name)}</ProfileButton>
      </Link>
    </Nav>
  );
};

export default Navbar;