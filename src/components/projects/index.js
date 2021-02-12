import React from "react";
import "./styles/projects.css";
import { projectsConst } from "../../projects/index";
import pic1 from "./pictures/1.jpg";
import pic2 from "./pictures/2.jpg";
import pic3 from "./pictures/3.jpg";
import pic4 from "./pictures/4.jpg";
import pic5 from "./pictures/5.jpg";

export default function Projects() {
  // console.log(ff);
  return (
    <div className="projects-frame">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      {projectsConst.map((project) => {
        return (
          <>
            <hr className="projects-hr" />
            <div className="projects-item" key={project.id}>
              <div className="projects-name">{project.name}</div>
              <div className="projects-image-frame">
                <img
                  className="projects-image"
                  src={project.picUrl}
                  alt={project.name}
                />
              </div>
              <div className="projects-technology">{project.technology}</div>
            </div>
          </>
        );
      })}
      <hr />
    </div>
  );
}
