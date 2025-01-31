import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons";


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
          <p>Email: adaajaipur4india@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>H-5, RIICO Industrial Area, Mansarovar, Jaipur, Rajasthan 302020</p>
        </FooterSection>
      </FooterContent>

      {/* Social Media and Copyright */}
      <SocialLinks>
  <a href="https://www.facebook.com/Adaajaipur.official" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="https://www.instagram.com/adaajaipur.official/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://www.youtube.com/channel/UC9Ccd68grj8EgEwHd3d8G_A" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faYoutube} />
  </a>
  <a href="https://in.pinterest.com/adaajaipur/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faPinterest} />
  </a>
</SocialLinks>

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
