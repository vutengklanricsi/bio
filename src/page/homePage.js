import React from "react";
import Contacts from "../components/contacts/index";
import About from "../components/about/index";
import Skills from "../components/skills/index";
import Projects from "../components/projects/index";
import Footer from "../components/footer/index";
import Header from "../components/header/index";

export default function HomePage() {
  return (
    <>
      <Header />
      <Skills />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
