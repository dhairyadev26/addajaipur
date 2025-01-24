import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import girl from "../assets/girl.png";
import adaaLogo from "../assets/logo1.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import Products from "./Products"; // Import Products component

// Define the keyframe animation for background color changes
const colorAnimation = `
  @keyframes backgroundColorChange {
    0% { background-color: #f2bfa2; }
    20% { background-color: #c3cb38; }
    40% { background-color: rgb(200, 86, 73); }
    60% { background-color: #fbc753; }
    80% { background-color: #67b4c9; }
    100% { background-color: #f2bfa2; }
  }
`;

const HomeWrapper = styled.div`
  position: relative;
  height: 100vh;
  background-image: url(${girl});
  background-repeat: no-repeat;
  background-position: right 180px top 50px;
  background-size: contain;
  background-attachment: fixed;
  animation: backgroundColorChange 20s infinite;
  ${colorAnimation}
  z-index: 0;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
`;

const HomeContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "Maitree", serif;
  z-index: 0;

  h5 {
    font-size: 2.9rem;
    margin-left: 10px;
    font-family: 'Maitree', serif;
    font-weight: 400;
    margin-top: 20px;
  }

  img {
    width: 650px;
    height: auto;
    display: block;
    margin-left: 400px;
    margin-top: 0px;
  }

  h7 {
    font-size: 2.3rem;
    margin-top: 10px;
    margin-left: 600px;
    display: block;
    font-family: 'Maitree', serif;
  }
`;

const NewContentSection = styled.div`
  position: relative;
  padding-top: 0px;
  padding-bottom: 30px;
  background-color: #fff7e9;
  color: #333;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0px;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: justify;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 420px;
  background: linear-gradient(to bottom, #fff7e9, #ffefd5 60%, #e6d4b2);
`;

const SliderTrack = styled.div`
  display: flex;
  animation: ${slideAnimation} 60s linear infinite;
  width: calc(200%);
`;

const ImageWrapper = styled.div`
  flex: none;
  padding-top:24px;
  width: 10%;
  height: 420px;

  img {
    width: 78%;
    height: 95%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 
      0 8px 15px rgba(255, 255, 255, 0.5),
      0 0 25px rgba(255, 255, 255, 0.8),
      0 0 35px rgba(255, 255, 255, 0.6),
      0 0 50px rgba(255, 255, 255, 0.9);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  img:hover {
    transform: translateY(-10px);
    box-shadow: 
      0 10px 20px rgba(255, 255, 255, 0.6),
      0 0 30px rgba(255, 255, 255, 0.9),
      0 0 45px rgba(255, 255, 255, 1),
      0 0 60px rgba(255, 255, 255, 1);
  }
`;

const Home = ({ wishlist, addToWishlist, removeFromWishlist }) => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleViewAllClick = () => {
    setShowAllProducts(true);
  };

  const images = [img1, img2, img3, img4, img5, img6, img7];
  const repeatedImages = [...images, ...images];

  return (
    <div>
      {/* Home Section */}
      <HomeWrapper>
        <HomeContent>
          <h5>Introducing</h5>
          <img src={adaaLogo} alt="ADAA Logo" />
          <h7>where design tells a story.</h7>
        </HomeContent>
      </HomeWrapper>

      {/* Gallery Section */}
      <NewContentSection>
        <h2>Discover Timeless Creativity</h2>
        <SliderWrapper>
          <SliderTrack>
            {repeatedImages.map((image, index) => (
              <ImageWrapper key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </ImageWrapper>
            ))}
          </SliderTrack>
        </SliderWrapper>
        <p>
          Explore our gallery showcasing our passion for design, creativity, and innovation.
        </p>
      </NewContentSection>

      {/* Featured Products Section */}
      <div className="home-container">
        <h2>Featured Products</h2>
        <div
          className="products-container"
          style={{
            backgroundColor: "#f0f0f0",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div className="product-list">
            <Products
              showAll={showAllProducts}
              wishlist={wishlist}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          </div>

          {!showAllProducts && (
            <button className="view-all-button" onClick={handleViewAllClick}>
              View All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
