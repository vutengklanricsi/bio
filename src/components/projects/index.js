import React from "react";
import "./styles/projects.css";
import { projectsConst } from "../../projects/index";

export default function Projects() {
  // console.log(projectsConst)
  return (
    <div className="projects-frame">
      <div className="projects-title">Projects</div>
      {projectsConst.map((project) => {
        return (
          <>
            <div className="projects-name">{project.name}</div>
          </>
        );
      })}
    </div>
  );
}
