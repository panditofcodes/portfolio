import React from "react";
import Nav from "./Nav";
import Nav2 from "./Nav2";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

export default function Landingpage() {
  return (
    <>
      {/* <Nav/> */}
      {/* <Nav2/> */}
      <div className="container-fluid">
        <Home />
        <About />
        <Projects />
        {/* <Contact /> */}
      </div>
    </>
  );
}
