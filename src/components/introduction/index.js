import React from "react";
import "./styles/introduction.css";
import introPic from "./styles/intro_pic.png";

export default function Introduction() {
  return (
    <>
      <hr />
      <div className="introduction-frame">
        <div className="introduction-image">
          <img src={introPic} alt="intro-pic" />
        </div>
        <div className="introduction-title">
          Vuong-Tan Quang Richard <br />
          Frontend Developer
        </div>
      </div>
    </>
  );
}
