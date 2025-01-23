import React from "react";
import styled from "styled-components";
import girl from "../assets/girl.png"; // Background image
import adaaLogo from "../assets/logo1.png"; // ADAA PNG logo




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
  height: 110vh; /* Full viewport height */
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
  margin-top: 0; /* Ensure no extra margin from the wrapper */
  padding-top: 0; /* Remove extra padding from the wrapper */
`;

const HomeContent = styled.div`

  text-align: left;
  color: rgb(255, 255, 255); /* Contrast with the image */
  font-family: 'Maitree', serif; /* Default font for all text */
  font-size: 5rem;
  z-index: 2; /* Ensure text is on top of the overlay */
  padding: 20px;
  border-radius: 8px;
  position: relative;
  left: -200px;

  h5 {
    font-size: 2.9rem;
    margin-left: 160px; /* Start position */
    font-family: 'Maitree', serif;
    font-weight: 400;
  }

  img {
    width: 650px; /* Adjust logo size */
    height: auto; /* Maintain aspect ratio */
    display: block; /* Ensures the image takes up its own line */
    margin-left: 170px; /* Slightly offset the image to the right */
    margin-top: 0px; /* Add space above */
  }

  h7 {
    font-size: 2.3rem; /* Smaller font size */
    margin-top: 10px; /* Add space above */
    margin-left: 340px; /* Offset "where design tells a story" further to the right */
    display: block; /* Ensure "where design tells a story" is on its own line */
    font-family: 'Maitree', serif; /* Maitree font for <h7> */
  }
`;




const Home = () => {
  return (
    <HomeWrapper>
      <HomeContent>
        <h5>Introducing</h5>
        <img src={adaaLogo} alt="ADAA Logo" />
        <h7>where design tells a story.</h7>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
