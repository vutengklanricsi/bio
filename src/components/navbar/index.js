import React from "react";
import "./styles/navbar.css";
import github from "./styles/github.png";
import linkedIn from "./styles/linkedIn.png";

function Navbar() {
  return (
    <>
      <div>
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
          <img className="navbar-logo" src={github} />
          <img className="navbar-logo" src={linkedIn} />
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
