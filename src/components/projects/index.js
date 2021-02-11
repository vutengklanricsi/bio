import React from "react";
import "./styles/projects.css";
import { projectsConst } from "../../projects/index";
import ff from "./pictures/3.jpg";

export default function Projects() {
  console.log(ff);
  return (
    <div className="projects-frame">
      <div className="projects-title">
        <h1>Projects</h1>
        190 hagyma 180 repa
      </div>
      {projectsConst.map((project) => {
        return (
          <div className="projects-item" key={project.id}>
            <div className="projects-image">
              <img src={project.picUrl} alt={project.name} />
            </div>
            <div className="projects-name">{project.name}</div>
          </div>
        );
      })}
    </div>
  );
}
