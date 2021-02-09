import React from "react";
import "./styles/navbar.css";
import github from "./styles/github.png";
import linkedIn from "./styles/linkedIn.png";

function Navbar() {
  return (
    <div className="navbar-frame">
      <a className="navbar-options" href="#">
        Introduction
      </a>
      <a className="navbar-options" href="#">
        Skills
      </a>
      <a className="navbar-options" href="#">
        About
      </a>
      <a className="navbar-options" href="#">
        Projects
      </a>
      <a className="navbar-options" href="#">
        Contact
      </a>
      <div className="navbar-logos">
        <img className="navbar-logo" src={github} alt="github" />
        <img className="navbar-logo" src={linkedIn} alt="linkedIn" />
      </div>
      {/* <hr /> */}
    </div>
  );
}

export default Navbar;
