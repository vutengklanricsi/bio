import React from "react";
import Navbar from "../components/navbar/index";
import Introduction from "../components/introduction/index";
import About from "../components/about/index";
import Skills from "../components/skills/index";

export default function HomePage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <>
        <Introduction />
        <Skills />
        <About />
      </>
    </>
  );
}
