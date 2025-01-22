import React from "react";
import styled from "styled-components";
import girl from "../assets/girl.png"; // Background image
import adaaLogo from "../assets/adaa-logo.png"; // ADAA PNG logo

const colorAnimation = `
  @keyframes backgroundColorChange {
    0% { background-color: #f2bfa2; } /* Color 1 */
    20% { background-color: #c3cb38; } /* Color 2 */
    40% { background-color:rgb(200, 86, 73); } /* Color 3 */
    60% { background-color: #fbc753; } /* Color 4 */
    80% { background-color: #67b4c9; } /* Color 5 */
    100% { background-color: #f2bfa2; } /* Back to Color 1 */
  }
`;

const HomeWrapper = styled.div`
  height: 200vh; /* Full viewport height */
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative;
  background-image: url(${girl});
  background-repeat: no-repeat;
  background-position: right 180px top 50px; /* Adjust position: Right + Top */
  background-size: contain; /* Adjust image size */
  background-attachment: fixed;
  animation: backgroundColorChange 20s infinite; /* Continuous color change */
  ${colorAnimation}
`;

const HomeContent = styled.div`
  text-align: left;
  color: rgb(255, 255, 255); /* Contrast with the image */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3.5rem;
  z-index: 2; /* Make sure text is on top of the overlay */
  padding: 20px;
  border-radius: 8px;
  position: relative;
  left: -100px;

  img {
    width: 300px; /* Adjust logo size */
    height: auto; /* Maintain aspect ratio */
  }

  h6 {
    font-size: 2.9rem; /* Smaller font size for "Introducing" */
    position: relative;
    left: -60px;
  }

  h4 {
    font-size: 2.6rem; /* Smaller font size for "where design tells a story" */
  }

  h7 {
    font-size: 2.3rem; /* Smaller font size */
    position: relative;
    right: -200px;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContent>
        <h6>I n t r o d u c i n g</h6>
        <img src={adaaLogo} alt="ADAA Logo" />
        <h4>J a i p u r</h4>
        <h7>where design tells a story.</h7>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
