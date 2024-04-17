import React from "react";
import ProjectCard from "./ProjectCard";
import "./Cards.css";

function Cards() {
  return (
    <div className="projects" id="project-section">
      <h1 className="project-section-heading">Portfolio Projects</h1>
      <div className="project-container">
        <div className="project-wrapper">
          <ul className="project-cards">
            <ProjectCard
              path="/reddit"
              label="redditClone"
              img="images/reddit-logo.png"
              title="redditClone"
              project_text="Check out my Reddit Clone"
              list={
                <div className="list-container">
                  <li className="project-skill">
                    <i className="fab fa-react" />
                  </li>
                  <li className="project-skill">
                    <i className="fa fa-database" />
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
              path="/munster-stats"
              label="munsterStats"
              img="images/munster-logo.jpeg"
              title="Munster Stats"
              project_text="Check out Munster Stats"
              list={
                <div className="list-container">
                  <li className="project-skill">
                    <i className="fab fa-python" />
                  </li>
                  <li className="project-skill">
                    <i className="fab fa-html5" />
                  </li>
                  <li className="project-skill">
                    <i className="fab fa-css3" />
                  </li>
                  <li className="project-skill">
                    <i className="fa fa-database" />
                  </li>
                </div>
              }
            />
          </ul>
        </div>
        <div className="project-wrapper">
          <ul className="project-cards">
            <ProjectCard
              path="/instant-messaging"
              label="instantMessagingApp"
              img="images/instant-messaging-logo.jpeg"
              title="Instant Messaging App"
              project_text="Check out my Instant Messaging Application"
              list={
                <div className="list-container">
                  <li className="project-skill">
                    <i className="fab fa-js" />
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
              path="/portfolio-website"
              label="portfolioWebsite"
              img="images/portfolio-logo.png"
              title="Portfolio Website"
              project_text="Check out the code for this website"
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
