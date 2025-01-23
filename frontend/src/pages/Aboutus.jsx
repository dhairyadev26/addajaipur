import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../styles/Aboutus.css";
import founder from "../assets/Founder.png"; 
import cofounder from "../assets/Cofounder.png"; 

const Aboutus = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <div className="about-card">
          <img src={founder} alt="Founder" />
          <h3>Keshav Shukla</h3>
          <p>Founder of ADAA Jaipur</p>
        </div>
        <div className="about-card">
        <img src={cofounder} alt="Cofounder" />
          <h3>Tulsi Prasad Shukla</h3>
          <p>Current Manager of ADAA Jaipur</p>
        </div>
      </div>
      <div className="about-right">
        <h2>About Us</h2>
        <p>
          ADAA JAIPUR was started by Keshav Shukla in 2010 and is now managed by
          his elder son Tulsi Prasad Shukla. It is much reckoned for its
          in-house exclusive Feminine brand “ADAA”. Adaa has almost all types
          of collections that an Indian Woman needs, be it Kurties, Plazzos,
          Gowns, Sharara, and many more.
        </p>
        <p>
          Our mission is to provide the best quality product at its best price.
          And we love to read your feedback as it encourages us to be more
          productive to our lovable customers.
        </p>
        <h3>"STYLE YOURSELF WITH ADAA!"</h3>
      </div>
    </div>
  );
};

export default Aboutus;
