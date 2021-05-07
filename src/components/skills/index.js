import React from "react";
import "./styles/skills.css";
import desktopGuy from "./styles/skills2.png";

export default function Skills() {
  return (
    <>
      <hr id="skills" />
      <h1>SKILLS</h1>
      <hr />
      <div className="skills-frame">
        <div className="skills-list">
          <div>Html</div>
          <div>Css</div>
          <div>Javascript</div>
          <div>Python</div>
          <div>React</div>
          <div>React Native (In progress)</div>
          <div>Next (In progress)</div>
          <div>Mysql (Basics)</div>
          <div>Node (Basics)</div>
        </div>
        <div className="skills-image-desktop">
          <img src={desktopGuy} alt="desktop-guy" />
        </div>
      </div>
      <hr />
      <div className="skills-parallax"></div>
      <hr />
    </>
  );
}
