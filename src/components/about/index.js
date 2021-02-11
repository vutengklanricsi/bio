import React from "react";
import profilePic from "./styles/ricsi_profile.jpg";
import "./styles/about.css";

export default function About() {
  return (
    <>
      <hr />
      <div className="about-frame-title">
        <h1>Vuong-Tan Quang Richard</h1>
        <div className="about-frame">
          <div className="about-profile-picture">
            <img src={profilePic} alt="profile" />
          </div>
          <div className="about-text">
            <div className="about-description fadeInLeft">
              I studied faculty of finance and accountancy at Budapest Business
              School.
              <br />
              After two years of study and a half year of internship, I decided
              to change my career path to become a developer.
              <br />I have a diploma in web development in 2020.
              <br /> Ever since then, I self-learned react. My next goal is to
              learn typescript, improve on my css and writing cleaner codes!For
              the giggs, this is my very first{" "}
              <a href="https://ebelet.gportal.hu/" target="_blank">
                "website"
              </a>{" "}
              I created as a teenager.
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
