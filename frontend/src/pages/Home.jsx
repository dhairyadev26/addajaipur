import React from "react";
import styled from "styled-components";
import girl from "../assets/girl1.png"; // Adjust the path based on your folder structure

const colorAnimation = `
  @keyframes backgroundColorChange {
    0% { background-color: #f39c12; } /* Color 1 */
    20% { background-color: #3498db; } /* Color 2 */
    40% { background-color: #e74c3c; } /* Color 3 */
    60% { background-color: #9b59b6; } /* Color 4 */
    80% { background-color: #2ecc71; } /* Color 5 */
    100% { background-color: #f39c12; } /* Back to Color 1 */
  }
`;
const HomeWrapper = styled.div`
  height: 200vh; /* Full viewport height */
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative; /* To position the overlay */
  background-repeat: no-repeat;
  background-image: url(${girl}); left center / cover no-repeat; /* Add image */
  background-attachment: fixed;
  background-size: contain; /* Adjust image size to fit within the container */
  background-position:5%; /* Center horizontally, add padding at top */

  animation: backgroundColorChange 20s infinite; /* Continuous color change */
  ${colorAnimation}

`;

const HomeContent = styled.div`
  text-align:left;
  color:rgb(248, 230, 235); /* Contrast with the image */
  font-family: 'Sego';
  font-size: 3.5rem;
  z-index: 2; /* Make sure text is on top of the overlay */
  padding: 20px;
  border-radius: 8px;
  position: relative;
  left: -100px; /* Move the text 20px to the left */

  h1 {
    font-size: 10rem; /* Significantly larger font size for "ADAA" */
    
  }
  h6 {
    font-size: 2.9rem; /* Smaller font size for "Introducing" */
    position: relative;
    left: -60px; 
    
  }

  h7 {
    font-size: 2.3rem; /* Smaller font size for "where design tells a story" */
    position: relative;
    right: -200px; 
  

  h4 {
    font-size: 2.6rem; /* Smaller font size for "where design tells a story" */
    
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContent>
        <h6>I n t r o d u c i n g</h6>
        <h1>A D A A</h1>
        <h4>J a i p u r</h4>
        <h7>where desing tells a story.</h7>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
