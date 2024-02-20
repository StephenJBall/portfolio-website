import React from "react";
import "./Bio.css";

function Bio() {
  return (
    <div className="bio">
      <div className="bio-container">
        <img
          src="images/portfolio-website-img1.JPG"
          alt=""
          className="bio-profile-pic"
        />
        <div className="text-container">
          <h1 className="bio-heading">Bio</h1>
          <p className="bio-text">
            Enthusiastic and self-motivated individual with a Full-Stack
            Engineering certification from Codecademy and completion of CS50x:
            Introduction to Computer Science, seeking an entry-level software
            engineering position or internship. Eager to apply practical skills
            gained from independent learning and showcase a strong work ethic
            and commitment to career transition.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
