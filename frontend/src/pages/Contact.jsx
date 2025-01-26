import React from "react";
import "../styles/Contact.css";
import contactimg from "../assets/horse.png"; // Replace with your image path


const Contact = () => {
  return (
    <div className="contact-page">
      {/* Top Banner Image */}
      <div className="banner-container">
        <img src={contactimg} alt="Contact Us Banner" className="banner-image" />
      </div>

      {/* Flexbox Layout for Details and Form */}
      <div className="contact-container">
        <div className="contact-layout">
          {/* Contact Details Section */}
          <div className="contact-details">
            <h1>Get In Touch</h1>
            <div className="contact-info">
              <div className="info-row">
                <h3>Phone:</h3>
                <p>+91 98281 70003</p>
              </div>
              <div className="info-row">
                <h3>Email:</h3>
                <p>adaajaipur4india@gmail.com</p>
              </div>
              <div className="info-row">
                <h3>Address:</h3>
                <p>H-5, RIICO Industrial Area, Mansarovar, Jaipur, Rajasthan 302020</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form">
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <input type="text" placeholder="Phone" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit">Submit Button</button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <iframe
            title="Google Maps"
            src="https://www.google.com/mas/embed?pb=!1m18!1m12!1m3!1d9938.197866874696!2d-0.11954326645418485!3d51.50329764986307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb687a5e8f%3A0x4d6e58b1b8fd7765!2sLondon%20Eye!5e0!3m2!1sen!2sus!4v1648554399602!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
