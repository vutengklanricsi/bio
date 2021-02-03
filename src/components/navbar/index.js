import React from "react";
import "./styles/navbar.css";
// import github from "./pics/github.png"

function Navbar() {
  return (
    <div>
      <a href="#">Introduction</a>
      <a href="#">Skills</a>
      <a href="#">About</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
      {/* <img src={github} /> */}
    </div>
  );
}

export default Navbar;
