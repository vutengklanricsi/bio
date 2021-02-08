import React from "react";
import "./styles/introduction.css";
import introPic from "./styles/intro_pic.png";

export default function Introduction() {
  return (
    <div className="introduction-frame">
      {/* <hr /> */}
      <div className="introduction-image">
        <img src={introPic} alt="intro-pic" />
      </div>
      <div className="introduction-title">WELCOME TO MY PORTFOLIO PAGE</div>
    </div>
  );
}
