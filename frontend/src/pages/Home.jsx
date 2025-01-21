import React from "react";
import styled from "styled-components";
import girl from "../assets/girl.png"; // Adjust the path based on your folder structure


const HomeWrapper = styled.div`
  height: 200vh; /* Full viewport height */
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative; /* To position the overlay */
  background-repeat: no-repeat;
  background-image: url("girl.png") left center / cover no-repeat; /* Add image */
  /* Optional: Adjust the image size to prevent zooming in too much */
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(201, 169, 134, 0.98); /* Semi-transparent overlay color */
  z-index: 1; /* Ensure the overlay is above the background */
`;

const HomeContent = styled.div`
  text-align:left;
  color:rgb(248, 230, 235); /* Contrast with the image */
  font-family: 'Sego';
  font-size: 3.5rem;
  z-index: 2; /* Make sure text is on top of the overlay */
  padding: 20px;
  background:transparent; /* Optional: semi-transparent background for text */
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
      <Overlay /> {/* Overlay component */}
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
