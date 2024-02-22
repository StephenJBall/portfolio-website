import React from 'react'
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  return (
    <>
    <li className="project-card">
        <Link className="project-card-link" to={props.path}>
            <figure className="project-card-title" data-category={props.label}>
                <img src={props.img} alt="Project Image" className="project-card-image" />
            </figure>
            <div className="project-card-info">
                <h5 className="project-card-name">{props.project_title}</h5>
                <p className="project-card-text">{props.project_text}</p>
            </div>
            <div className="project-card-skills">
                <ul className="project-skill-list">
                    {props.list}
                </ul>
            </div>
        </Link>
    </li>
    </>
  )
}

export default ProjectCard