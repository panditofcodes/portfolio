import React from "react";
import Home from "./Home";
import Experience from "./Experience";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Project";

export default function Landingpage() {
  return (
    <>
      <div className="container-fluid">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
