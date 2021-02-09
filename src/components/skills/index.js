import React from "react";
import "./styles/skills.css";
import desktopGuy from "./styles/skills2.png";

export default function Skills() {
  return (
    <>
      <hr />
      <h1>SKILLS</h1>
      <div className="skills-frame">
        <div className="skills-list">
          <text>HTML</text>
          <text>CSS</text>
          <text>JAVASCRIPT</text>
          <text>PYTHON</text>
          <text>REACT(HOOKS, REDUX)</text>
          <text>STYLED COMPONENTS</text>
          <text>NPM</text>
          <text>MYSQL(BASICS)</text>
          <text>NODE (BASICS)</text>
        </div>
        <div className="skills-image-desktop">
          <img src={desktopGuy} alt="desktop-guy" />
        </div>
      </div>
    </>
  );
}
