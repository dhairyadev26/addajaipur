import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaBars, FaTimes, FaSearch } from "react-icons/fa";

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
  padding: ${(props) => (props.scrolled ? "0.5rem 1rem" : "1rem 2rem")};
  background-color: ${(props) => (props.scrolled ? "#ffffff" : "transparent")};
  color: ${(props) => (props.isHomePage && !props.scrolled ? "#ffffff" : "#000000")};
  border-radius: ${(props) => (props.scrolled ? "50px" : "0")};
  box-shadow: ${(props) => (props.scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.2)" : "none")};
  transition: all 0.4s ease;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0.3rem 1rem;
  background: white;

  input {
    border: none;
    outline: none;
    padding: 0.3rem;
    font-size: 1rem;
    width: 150px;

    @media (max-width: 768px) {
      width: 100px;
    }

    @media (max-width: 480px) {
      width: 80px;
    }
  }

  svg {
    margin-left: 5px;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  font-family: "The Seasons";
  color: inherit;
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    padding: 1rem 0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

  a {
    font-size: 1rem;
    font-family: "Cinzel", serif;
    color: inherit;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;

    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: ${(props) =>
        props.scrolled ? "#000000" : "rgba(255, 255, 255, 0.73)"};
      color: ${(props) => (props.scrolled ? "#ffffff" : "#C11B17")};
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 0.4rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      padding: 0.3rem;
    }
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
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
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.scrolled ? "#000000" : "rgba(255, 255, 255, 0.2)")};
    color: ${(props) => (props.scrolled ? "#ffffff" : "#ffffff")};
    border-radius: 10px;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userProfile, setUserProfile] = useState({ name: "" });
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate for redirection
  const isHomePage = location.pathname === "/";
  
  const categories = ["kurta", "frock", "saree", "lehengas"]; // Available categories for search

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserProfile({ name: storedUser.username });
    }
  }, []);

  const getInitials = (name) => {
    if (!name) return "";
    const [firstName, lastName] = name.split(" ");
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();
  };

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (categories.includes(query)) {
      // Redirect to the corresponding category section on the products page
      navigate(`/products?category=${query}`);
    } else {
      // Show a notification if the product is not found
      alert("Product not found.");
    }
  };

  return (
    <Nav scrolled={scrolled} isHomePage={isHomePage}>
      <Logo>A D A A</Logo>
      <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuIcon>
      <Menu scrolled={scrolled} isOpen={menuOpen}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
          <FaHeart style={{ fontSize: "1rem" }} /> Wishlist
        </Link>
        <SearchBar>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Allow search on "Enter" key press
          />
          <span onClick={handleSearch}>
            <FaSearch />
          </span>
        </SearchBar>
      </Menu>
      <Link to="/profile">
        <ProfileButton>{getInitials(userProfile.name)}</ProfileButton>
      </Link>
    </Nav>
  );
};

export default Navbar;
