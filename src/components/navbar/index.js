import React from "react";
import "./styles/navbar.css";
import github from "./styles/github.png";
import linkedIn from "./styles/linkedIn.png";

function Navbar() {
  return (
    <>
      <div className="navbar-frame">
        <a className="navbar-options" href="#">
          Introduction
        </a>
        <a className="navbar-options" href="#">
          About Me
        </a>
        <a className="navbar-options" href="#">
          Skills
        </a>
        <a className="navbar-options" href="#">
          Projects
        </a>
        <div className="navbar-logos">
          <a rel="noreferrer" target="_blank" href="https://github.com/vutengklanricsi">
            <img className="navbar-logo" src={github} alt="github" target="_blank" />
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/richard-vuong-tan-quang-92875917a/">
            <img className="navbar-logo" src={linkedIn} alt="linkedIn" />
          </a>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
