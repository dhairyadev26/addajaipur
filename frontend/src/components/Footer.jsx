import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* About Section */}
        <FooterSection>
          <h3>About Us</h3>
          <p>
            Jaypur Ethnics brings the timeless beauty of Jaipur's culture to you. Explore our exclusive collection of handcrafted ethnic wear.
          </p>
        </FooterSection>

        {/* Quick Links Section */}
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </FooterSection>

        {/* Contact Section */}
        <FooterSection>
          <h3>Contact Us</h3>
          <p>Email: support@jaypurethnics.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Jaipur, Rajasthan, India</p>
        </FooterSection>
      </FooterContent>

      {/* Social Media and Copyright */}
      <FooterBottom>
        <SocialLinks>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </SocialLinks>
        <p>&copy; 2025 Jaypur Ethnics. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 2rem 1rem;
  z-index: 10;
  position:relative;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color:rgb(240, 221, 221);
  }

  p, ul, li {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;

      a {
        text-decoration: none;
        color: #fff;
        transition: color 0.3s;

        &:hover {
          color: #f39c12;
        }
      }
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;

  p {
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: #f39c12;
    }
  }
`;
