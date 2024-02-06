import React from 'react';
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </p>
        <p className="footer-company-name">donation©2024</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>donation</span></p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+216 93.991.179</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:jbeliRoudaina@gmail.com">support@donation</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Us</span>
          We prioritize transparency, ensuring your donations are used responsibly. Our financial records are open, and regular updates reflect the impact of your contributions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
