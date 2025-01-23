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
        <div></div><div></div><div></div>
        <div className="about-card">
        <img src={cofounder} alt="Cofounder" />
          <h3>Tulsi Prasad Shukla</h3>
          <p>Co-Founder of ADAA Jaipur</p>
        </div>
      </div>
      <div className="about-right">
        <h1>About Us</h1>
        <p>
          ADAA JAIPUR was started by Keshav Shukla in 2010 and is now managed by
          his elder son Tulsi Prasad Shukla. 
        </p>
        <p>
          It is much reckoned for its in-house exclusive Feminine brand “ADAA”. 
        </p>
        <p>  
          Adaa has almost all types of collections that an Indian Woman needs, be it Kurties, Plazzos, Gowns, Sharara, and many more.
        </p>
        <p>
          Our mission is to provide the best quality product at its best price.
        </p>
        <p>
          And we love to read your feedback as it encourages us to be more productive to our lovable customers.
        </p>
        <h3>"STYLE YOURSELF WITH ADAA!"</h3>
      </div>
    </div>
  );
};

export default Aboutus;
