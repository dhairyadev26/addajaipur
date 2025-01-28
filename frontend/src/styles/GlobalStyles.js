import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Maitree:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Maitree';
  background:rgb(255, 234, 206);
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
