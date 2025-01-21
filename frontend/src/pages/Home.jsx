import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/bg.png"; // Ensure correct path to image

const HomeWrapper = styled.div`
  height: 200vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* To position the overlay */
  background-image: url(${backgroundImage});
  background-size: cover; /* Ensure the image covers the area */
  background-position: center; /* Center the image */
  background-repeat: no-repeat;

  /* Optional: Adjust the image size to prevent zooming in too much */
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 248, 231, 0.6); /* Semi-transparent overlay color */
  z-index: 1; /* Ensure the overlay is above the background */
`;

const HomeContent = styled.div`
  text-align: center;
  color: #4e1928; /* Contrast with the image */
  font-family: 'Poppins', sans-serif;
  z-index: 2; /* Make sure text is on top of the overlay */
  padding: 20px;
  background: rgba(255, 248, 231, 0.7); /* Optional: semi-transparent background for text */
  border-radius: 10px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Overlay /> {/* Overlay component */}
      <HomeContent>
        <h1>Welcome to Jaipur Ethnics</h1>
        <p>Discover the elegance of traditional Rajasthani clothing.</p>
      </HomeContent>
    </HomeWrapper>
  );
};

export default Home;
