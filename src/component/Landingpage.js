import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

export default function Landingpage() {
  return (
    <>
      <div className="container-fluid">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
