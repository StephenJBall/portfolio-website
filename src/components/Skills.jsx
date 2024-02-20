import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div>
      <div className="skill-container">
        <div className="skill-heading">
          <h1>Skills</h1>
        </div>
        <div className="list-container">
          <ul className="skill-list">
            <li className="skill-icon">
              <i className="fab fa-python" />
              <label>Python</label>
            </li>
            <li className="skill-icon">
              <i className="fab fa-react" />
              <label>React</label>
            </li>
            <li className="skill-icon">
              <i className="fab fa-html5" />
              <label>HTML5</label>
            </li>
            <li className="skill-icon">
              <i className="fab fa-css3" />
              <label>CSS3</label>
            </li>
            <li className="skill-icon">
              <i className="fab fa-js" />
              <label>JavaScript</label>
            </li>
            <li className="skill-icon">
              <i className="fa fa-database" />
              <label>SQL</label>
            </li>
            <li className="skill-icon">
              <i className="fab fa-git" />
              <label>Git</label>
            </li>
            <li className="skill-icon">
              <i className="fab fa-github" />
              <label>GitHub</label>
            </li>
            <li className="skill-icon">
              <i className="fab fa-node" />
              <label>Node.js</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
