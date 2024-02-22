import React from "react";
import ProjectCard from "./ProjectCard";
import './Cards.css';

function Cards() {
  return (
    <div className="projects">
      <h1 className="project-section-heading">Portfolio Projects</h1>
      <div className="project-container">
        <div className="project-wrapper">
          <ul className="project-cards">
            <ProjectCard
              path="/"
              label="LetterWatchd"
              img="images/letterboxd-logo.png"
              title="LetterWatchd"
              project_text="Check out my Letterboxd API"
              list={
                <div className="list-container">
                  <li className="project-skill">
                    <i className="fab fa-react" />
                  </li>
                  <li className="project-skill">
                    <i className="fab fa-html5" />
                  </li>
                  <li className="project-skill">
                    <i className="fab fa-css3" />
                  </li>
                </div>
              }
            />
          </ul>
        </div>
        <div className="project-wrapper">
          <ul className="project-cards">
            <ProjectCard
              path="/"
              label="LetterWatchd"
              img="images/letterboxd-logo.png"
              title="LetterWatchd"
              project_text="Check out my Letterboxd API"
              list={
                <div className="list-container">
                  <li className="project-skill">
                    <i className="fab fa-react" />
                  </li>
                  <li className="project-skill">
                    <i className="fab fa-html5" />
                  </li>
                  <li className="project-skill">
                    <i className="fab fa-css3" />
                  </li>
                </div>
              }
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
