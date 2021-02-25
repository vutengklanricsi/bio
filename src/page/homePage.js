import React from "react";
import Introduction from "../components/introduction/index";
import About from "../components/about/index";
import Skills from "../components/skills/index";
import Projects from "../components/projects/index";
import Footer from "../components/footer/index";

export default function HomePage() {
  return (
    <>
      <Introduction />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
