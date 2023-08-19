import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import Hobbies from "./Hobbies";

export default function Nav() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <ul className="nav flex-column" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="project-tab"
                data-bs-toggle="tab"
                data-bs-target="#project-tab-pane"
                type="button"
                role="tab"
                aria-controls="project-tab-pane"
                aria-selected="false"
              >
                Projects
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="education-tab"
                data-bs-toggle="tab"
                data-bs-target="#education-tab-pane"
                type="button"
                role="tab"
                aria-controls="education-tab-pane"
                aria-selected="false"
              >
                Education
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="skills-tab"
                data-bs-toggle="tab"
                data-bs-target="#skills-tab-pane"
                type="button"
                role="tab"
                aria-controls="skills-tab-pane"
                aria-selected="false"
              >
                Skills
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="hobbies-tab"
                data-bs-toggle="tab"
                data-bs-target="#hobbies-tab-pane"
                type="button"
                role="tab"
                aria-controls="hobbies-tab-pane"
                aria-selected="false"
              >
                Hobbies
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex="0"
            >
              <Home />
            </div>
            <div
              className="tab-pane fade"
              id="project-tab-pane"
              role="tabpanel"
              aria-labelledby="project-tab"
              tabindex="0"
            >
              <Projects />
            </div>
            <div
              className="tab-pane fade"
              id="education-tab-pane"
              role="tabpanel"
              aria-labelledby="education-tab"
              tabindex="0"
            >
              <Education />
            </div>
            <div
              className="tab-pane fade"
              id="skills-tab-pane"
              role="tabpanel"
              aria-labelledby="skills-tab"
              tabindex="0"
            >
              <Skills />
            </div>
            <div
              className="tab-pane fade"
              id="hobbies-tab-pane"
              role="tabpanel"
              aria-labelledby="hobbies-tab"
              tabindex="0"
            >
              <Hobbies />
            </div>
            <div
              className="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
