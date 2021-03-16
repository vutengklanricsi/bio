import React from "react";
import "./styles/projects.css";
import { projectsConst } from "../../projects/index";
// import pic1 from "./pictures/1.jpg";
// import pic2 from "./pictures/2.jpg";
// import pic3 from "./pictures/3.jpg";
// import pic4 from "./pictures/4.jpg";
// import pic5 from "./pictures/5.jpg";

export default function Projects() {
  return (
    <div id="projects" className="projects-frame">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      {projectsConst.map((project) => {
        return (
          <div key={project.id}>
            <hr />
            <div className="projects-div-name">
              <a id="projects-name-id" href={project.linkTo} target="_blank" rel="noreferrer">
                <div className="projects-name">{project.name}</div>
              </a>
              <hr />
            </div>
            <div className="projects-item">
              <div className="projects-image-frame" key={project.id}>
                <a href={project.linkTo} rel="noreferrer" target="_blank">
                  <img
                    className="projects-image"
                    src={project.picUrl}
                    alt={project.name}
                  />
                </a>
              </div>
              <div className="projects-description">
                <div className="projects-technology-item">
                  <div className="projects-technology-title">Technology</div>
                  <hr />
                </div>
                <div className="projects-technology">{project.technology}</div>
              </div>
            </div>
          </div>
        );
      })}
      <hr />

      <a
        className="projects-more-projects"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/vutengklanricsi"
      >
        Click here for more projects
      </a>
      <hr />
    </div>
  );
}
