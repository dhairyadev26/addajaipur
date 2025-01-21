import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #fff8e7;
    color: #333;
    line-height: 1.6;
    padding-top: 0rem; /* Adjust to match the navbar's height */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Responsive Adjustment */
  @media (max-width: 768px) {
    body {
      padding-top: 3rem; /* Smaller padding for smaller devices */
    }
  }
`;

export default GlobalStyles;
