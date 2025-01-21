import React from "react";
import styled from "styled-components";
import elephantGif from "../assets/elephant.gif";

const PreloaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fdf3e5; /* Optional: Rajasthani themed background color */
`;

const PreloaderImage = styled.img`
  width: 300px; /* Adjust size as needed */
  height: auto;
`;

const ElephantPreloader = () => {
  return (
    <PreloaderWrapper>
<PreloaderImage src={elephantGif} alt="Loading..." />   </PreloaderWrapper>
  );
};

export default ElephantPreloader;
