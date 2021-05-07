import React from "react";
import Navbar from "../navbar/index";
import backgroundVideo from "./styles/waves.mov";
import "./styles/header.css";

export default function Header() {
  return (
    <>
      <Navbar />
      <div className="header-frame">
        <div className="header-videoBackground">
          <video
            autoPlay="autoplay"
            loop="loop"
            muted
            className="header-video-background"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="header-text">
          <div className="header-name">Vuong-Tan Quang Richard</div>
          <div className="header-description">Frontend Developer</div>
        </div>
      </div>
    </>
  );
}
