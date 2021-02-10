import React from "react";
import "./styles/about.css";

export default function About() {
  return (
    <>
      <hr />
      <div className="about-frame">
        <div className="about-title">Vuong-Tan Quang Richard</div>
        <div className="about-text">
          I studied faculty of finance and accountancy at Budapest Business
          School.
          <br />
          After two years of study and a half year of internship, I decided to
          change my career path to become a developer.
          <br />I have a diploma in web development. Ever since then i
          self-learned react. My next goal is to learn typescript and writing
          cleaner codes! My very first was{" "}
          <a href="https://ebelet.gportal.hu/" target="_blank">
            website
          </a>{" "}
          i created fan teenager.
        </div>
      </div>
    </>
  );
}
