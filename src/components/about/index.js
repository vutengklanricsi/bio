import React from "react";
import profilePic from "./styles/ricsi_profile.jpg";
import "./styles/about.css";

export default function About() {
  return (
    <>
      <hr id="about" />
      <div className="about-frame-title">
        <h1>Vuong-Tan Quang Richard</h1>
        <div className="about-frame">
          <div className="about-profile-picture">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/richard-vuong-tan-quang-92875917a/"
              target="_blank"
            >
              <img src={profilePic} alt="profile" />
            </a>
          </div>
          <div className="about-text">
            <div className="about-description fadeInLeft">
              I studied finance and accountancy at Budapest Business
              School.
              <br />
              After two years of studying finance and a half year of internship, I decided
              to change my career path to become a developer.
              <br />I have a diploma in web development in 2020.
              <br /> Ever since then, I self-learned different programming languages, like React. My next goal is to
              learn how to write test automatization, improve on my css and writing cleaner codes!For
              the giggs, this is my very first{" "}
              <a rel="noreferrer" href="https://ebelet.gportal.hu/" target="_blank">
                "website"
              </a>{" "}
              I created as a teenager.
            </div>
          </div>
        </div>
      </div>
      <hr />

    <div className="about-parallax"></div>

      <hr />
    </>
  );
}
