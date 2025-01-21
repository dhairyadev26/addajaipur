import React from "react";
import styled from "styled-components";
import girl from "../assets/girl.png"; // Adjust the path based on your folder structure


const HomeWrapper = styled.div`
  height: 200vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* To position the overlay */
  background-repeat: no-repeat;
  background: url("girl.png") left center / cover no-repeat; /* Add image */
  /* Optional: Adjust the image size to prevent zooming in too much */
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(224, 145, 157, 0.6); /* Semi-transparent overlay color */
  z-index: 1; /* Ensure the overlay is above the background */
`;

const HomeContent = styled.div`
  text-align: center;
  color: #4e1928; /* Contrast with the image */
  font-family: 'Sego';
  z-index: 2; /* Make sure text is on top of the overlay */
  padding: 20px;
  background:rgb(244, 219, 226);; /* Optional: semi-transparent background for text */
  border-radius: 8px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Overlay /> {/* Overlay component */}
      <HomeContent>
        <h3>Introducing</h3>
        <h1>A D A A</h1>
        <h3>where desing tells a story.</h3>
        <p>Discover the elegance of traditional Rajasthani clothing.</p>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
