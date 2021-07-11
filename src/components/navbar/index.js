import React, { useState } from "react";
import "./styles/navbar.css";
import github from "./styles/github.png";
import linkedIn from "./styles/linkedIn.png";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div id="introduction"></div>
      <div className="navbar-frame">
        <div className="navbar-hamburger">
          <div
            id="nav-icon3"
            className={`${menu ? "open" : null}`}
            onClick={() => setMenu(!menu)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`navbar-window ${menu ? "active" : null}`}>
          <a className="navbar-options" href="#introduction">
            Introduction
          </a>
          <a className="navbar-options" href="#about">
            About Me
          </a>
          <a className="navbar-options" href="#skills">
            Skills
          </a>
          <a className="navbar-options" href="#projects">
            Projects
          </a>
          <a className="navbar-options" href="#contact">
            Contact
          </a>
          <div className="navbar-logos">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/vutengklanricsi"
            >
              <img
                className="navbar-logo"
                src={github}
                alt="github"
                target="_blank"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/richard-vuong-tan-quang-92875917a/"
            >
              <img className="navbar-logo" src={linkedIn} alt="linkedIn" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
