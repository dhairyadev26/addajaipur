import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  color: ${(props) => (props.scrolled ? "#000000" : "#ffffff")};
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <Nav scrolled={scrolled}>
      <Logo scrolled={scrolled}>A D A A</Logo>
      <Menu scrolled={scrolled}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/wishlist">
          <FaHeart /> Wishlist
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;
