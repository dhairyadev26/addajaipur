import React from "react";
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
  padding: 50px;
  background-color: #f7f7f7;
  color: #333;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
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
  height: 490px;
  background-color:#ffefd5;
`;

const SliderTrack = styled.div`
  display: flex;
  animation: ${slideAnimation} 60s linear infinite; /* Smooth scrolling animation */
  width: calc(200%); /* Double the width to accommodate duplicates */
`;

const ImageWrapper = styled.div`
  flex: none;
  padding-top:15px;
  width: 12%; /* Adjust based on the number of images visible */
  height: 480px;

  img {
    width: 95%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px; /* Smooth, professional rounded corners */
    box-shadow: 
      0 4px 6px rgba(0, 0, 0, 0.1), /* Light shadow for subtle depth */
      0 1px 3px rgba(0, 0, 0, 0.06); /* Additional layer for realism */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  img:hover {
    transform: translateY(-8px); /* Slight lift on hover */
    box-shadow: 
      0 10px 15px rgba(0, 0, 0, 0.2), /* Deeper shadow for focus */
      0 4px 6px rgba(0, 0, 0, 0.1); /* Maintain soft aesthetic */
  }
`;

const Home = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7]; // Your image sources
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
    </div>
  );
};

export default Home;
