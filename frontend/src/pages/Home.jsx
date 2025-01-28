import '../styles/HomePage.css'; // Create this CSS file
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import adaaLogo from "../assets/logo1.png";
import img1 from "../assets/h2.jpg";
import img2 from "../assets/h3.jpg";
import img3 from "../assets/h4.jpg";
import img4 from "../assets/h5.jpg";
import img5 from "../assets/h6.jpg";
import img6 from "../assets/h7.jpg";
import img7 from "../assets/h8.jpg";


const HomeContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  margin-top: 300px;
  padding-left: 200px;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "Maitree", serif;
  z-index: 1;

  h5 {
    font-size: 2.7rem;
    margin-left: 10px;
    font-family: 'Maitree', serif;
    font-weight: 400;
    margin-top: 20px;
  }

  img {
    width: 600px;
    height: auto;
    display: block;
    margin-left: 400px;
    margin-top: 0px;
  }

  h7 {
    font-size: 2rem;
    margin-top: 10px;
    margin-left: 600px;
    display: block;
    font-family: 'Maitree', serif;
  }
`;
const NewContentSection = styled.div`
  position: relative;
  padding-bottom: 0px;
  background-color:rgb(255, 234, 206);

  color: #333;

  h2 {
    font-size: 2.5rem;
    color:rgb(121, 39, 24);
    margin-bottom: 20px;
    text-align: center;
    font-family: "The Season"
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
  background: linear-gradient(to bottom,rgb(255, 234, 206),rgb(255, 246, 234)60%,rgb(251, 247, 234));
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
    border-radius: 50px;
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

const ParagraphSection = styled.div`
  padding: 20px 0;
  text-align: center;
  background-color: transparent; /* Keep it transparent or set a background if needed */
  color: black; /* Set text color to white */
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: 'Maitree', serif;

  p {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
`;


const Home =  ({ wishlist, addToWishlist, removeFromWishlist }) => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleViewAllClick = () => {
    setShowAllProducts(true);
  };

  const images = [img1, img2, img3, img4, img5, img6, img7];
  const repeatedImages = [...images, ...images];

  return (
    <div className="page">
      
        <div className="banner">
        <div className="content">
        
          <HomeContent>
            <h5>Introducing</h5>
            <img src={adaaLogo} alt="ADAA Logo" />
            <h7>where design tells a story.</h7>
          </HomeContent>
          
        </div>
      </div>
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
      </NewContentSection>

      {/* New Paragraph Section */}
      <ParagraphSection>
        <p>
          Explore our gallery showcasing our passion for design, creativity, and innovation.
        </p>
      </ParagraphSection>

    </div>
  );
};

export default Home;
