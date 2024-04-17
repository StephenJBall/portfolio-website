import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <h3 className="footer-heading">Contact</h3>
      <div className="contact-info-wrapper">
        <ul className="contact-list">
          <li className="contact-info">Email: stephenjb94@gmail.com</li>
          <li className="contact-info">
            <a className="linkedin-link"
              href="https://www.linkedin.com/in/stephen-ball-a9182b72/"
              target="_blank"
            >
              <i class="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
