import React from "react";
import "../styles/Footer.css";
import { FaFacebookF } from "react-icons/fa"; // Correct import for Facebook icon
import { FaInstagram } from "react-icons/fa"; // Correct import for Instagram icon (you don't need fa6)
import { CiYoutube } from "react-icons/ci"; // Correct import for YouTube icon

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <CiYoutube className="social-icon" />
        </a>
      </div>
      <div className="footer-content">
        <p>© Copyright to Inveast & BEPI personal website</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <span> - </span>
          <a href="#">Privacy Policy</a>
          <span> - </span>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
