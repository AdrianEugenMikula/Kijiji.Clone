import React from "react";
import "./Footer.css";
import "./Neon.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
          <div class="containerNeon">
            <p class="neon">
              DISCLAIMER <br />
              This is a personal project and has no affiliations with the real
              www.kijiji.ca <br />
              It has been created as a final project for college and it is not a
              functional website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
