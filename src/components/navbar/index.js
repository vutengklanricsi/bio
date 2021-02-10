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
          <img className="navbar-logo" src={github} alt="github" />
          <img className="navbar-logo" src={linkedIn} alt="linkedIn" />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
