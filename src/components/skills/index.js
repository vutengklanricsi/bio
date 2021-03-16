import React from "react";
import "./styles/skills.css";
import desktopGuy from "./styles/skills2.png";

export default function Skills() {
  return (
    <>
      <hr id="skills"/>
      <h1>SKILLS</h1>
      <div className="skills-frame">
        <div className="skills-list">
          <div>HTML</div>
          <div>CSS</div>
          <div>JAVASCRIPT</div>
          <div>PYTHON</div>
          <div>REACT(HOOKS)</div>
          <div>STYLED COMPONENTS</div>
          <div>NPM(BASICS)</div>
          <div>MYSQL(BASICS)</div>
          <div>NODE (BASICS)</div>
        </div>
        <div className="skills-image-desktop">
          <img src={desktopGuy} alt="desktop-guy" />
        </div>
      </div>
    </>
  );
}
