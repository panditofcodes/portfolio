import React from "react";
import Home from "./Home";
import Experience from "./Experience";
import About from "./About";
import Contact from "./Contact";

export default function Landingpage() {
  return (
    <>
      <div className="container-fluid">
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
