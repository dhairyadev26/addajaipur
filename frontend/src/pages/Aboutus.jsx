import React from "react";
import "../styles/Aboutus.css";
import founder from "../assets/Founder.png";
import cofounder from "../assets/Cofounder.png";
import about1img from "../assets/a1.jpg"; // Add Rajasthan image


const Aboutus = () => {
  return (
    <div className="about-container">
      {/* Top Section with Vertical Image and Description */}
      <div className="rajasthan-section">
        <div className="rajasthan-image">
          <img src={about1img} alt="Rajasthan" />
        </div>
        <div className="rajasthan-description">
          <h2>Rajasthan's Rich Culture</h2>
          <p>
            Rajasthan, the largest state in India, is known for its rich cultural
            heritage, vibrant traditions, and historical significance. The royal
            state of Rajasthan is steeped in art and culture that reflects the
            Indian way of life. The Culture of Rajasthan, which developed over
            the past millennia, is a blend of various elements, including music,
            dance, cuisine, festivals, art, and architecture.
            Rajasthan, the largest state in India, is known for its rich cultural
            heritage, vibrant traditions, and historical significance. The royal
            state of Rajasthan is steeped in art and culture that reflects the
            Indian way of life. The Culture of Rajasthan, which developed over
            the past millennia, is a blend of various elements, including music,
            dance, cuisine, festivals, art, and architecture.
          </p>
        </div>
      </div>


      {/* Highlighted Banner Section */}
      <div className="about-banner">
        <p>
          With the trendiest, freshest, and most unique styles from across India
          and the world, ADAA invites you to express your personal style
          fearlessly, and with a confidence and optimism that cannot be easily
          shaken.
        </p>
      </div>

      {/* Two-Column Description Section */}
      <div className="about-description">
        <div className="description-column">
          <h3>ADAA Jaipur</h3>
          <p>
            ADAA Jaipur is our private label – designed by us, owned by you. If
            you’re looking for head-turning styles that are one-of-a-kind, ADAA
            Jaipur is what you should stock up on.
          </p>
        </div>
        <div className="description-column">
          <h3>Exclusive International Labels</h3>
          <p>
            We bring you the trendiest and most exclusive brands from around the
            world to your wardrobe. Forget scouring the net for what’s hot
            globally – we’ve got you covered.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-right">
        <h1>About Us</h1>
        <p>
          ADAA JAIPUR was started by Keshav Shukla in 2010 and is now managed by
          his elder son Tulsi Prasad Shukla.
        </p>
        <p>It is much reckoned for its in-house exclusive Feminine brand “ADAA”.</p>
        <p>
          Adaa has almost all types of collections that an Indian Woman needs, be
          it Kurties, Plazzos, Gowns, Sharara, and many more.
        </p>
        <p>Our mission is to provide the best quality product at its best price.</p>
        <p>
          And we love to read your feedback as it encourages us to be more
          productive to our lovable customers.
        </p>
        <h3>"STYLE YOURSELF WITH ADAA!"</h3>
      </div>

      {/* Founder and Co-Founder Section */}
      <div className="about-left">
        <div className="about-card">
          <img src={founder} alt="Founder" />
          <h3>Keshav Shukla</h3>
          <p>Founder of ADAA Jaipur</p>
        </div>
        <div className="about-card">
          <img src={cofounder} alt="Cofounder" />
          <h3>Tulsi Prasad Shukla</h3>
          <p>Co-Founder of ADAA Jaipur</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
