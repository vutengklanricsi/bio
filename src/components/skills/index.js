import React from "react";
import "./styles/skills.css";
import desktopGuy from "./styles/skills2.png";

export default function Skills() {
  return (
    <>
      <hr />
      <div className="skills-frame">
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>NPM</li>
          <li>MYSQL</li>
          <li>NODE (BASICS)</li>
          <li>REACT</li>
          <li>REDUX</li>
          <li>STYLED COMPONENTS</li>
        </ul>
        <div className="skills-image-desktop">
          <img src={desktopGuy} alt="desktop-guy" />
        </div>
      </div>
    </>
  );
}
