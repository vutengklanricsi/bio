import React, { useState } from "react";
import "./styles/navbar.css";
import github from "./styles/github.png";
import linkedIn from "./styles/linkedIn.png";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="navbar-hamburger">
        <div id="nav-icon3" className={` ${menu ? "open" : null}`} onClick={() => setMenu(!menu)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {menu ? (
        <div className="navbar-frame">
          <a className="navbar-options" href="#">
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
      ) : null}

      <hr />
    </>
  );
}

export default Navbar;
