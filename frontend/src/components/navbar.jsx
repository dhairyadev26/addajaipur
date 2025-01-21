import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  top: ${(props) => (props.scrolled ? "6px" : "0")}; /* Offset when scrolled */
  left: 50%;
  transform: translateX(-50%);
  width: ${(props) => (props.scrolled ? "80%" : "100%")}; /* Full width initially, smaller when scrolled */
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.scrolled ? "0.5rem 1.5rem" : "1rem 2rem")};
  background-color: ${(props) => (props.scrolled ? "#17201e" : "transparent")};
  color: ${(props) => (props.scrolled ? "#fff8e7" : "#000000")};
  border-radius: ${(props) => (props.scrolled ? "70px" : "0")};
  box-shadow: ${(props) =>
    props.scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.2)" : "none"};
  transition: all 0.4s ease;
`;

const Logo = styled.div`
  font-size: ${(props) => (props.scrolled ? "2.3rem" : "2.3rem")};
  font-weight: bold;
  font-family: "The Seasons";
  color: inherit;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.scrolled ? "1.5rem" : "1.5rem")};
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none; /* Hide menu for small screens (can add hamburger later) */
  }

  a {
    font-size: 1.3rem;
    font-family: "Cinzel", serif;
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      text-decoration: underline;
    }
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
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;
