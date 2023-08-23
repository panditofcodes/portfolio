import React from "react";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";


export default function Projects() {
  return (
    <>
      <div className="experience-section" data-aos="fade-down">
        <h1
          className="experience-section-heading"
          style={{ textAlign: "center" }}
        >
          Experience
        </h1>
        <p className="experience-section-intro">
          Hey there! I'm a newcomer to the professional scene but totally
          immersed in the world of web development projects. Learning by doing
          is my thing – I'm all about refining skills and finding clever
          solutions. Projects are my playground for real experience. Each one
          teaches me more about software development, from ideas to working
          apps. I'm not just about tech; teamwork, communication, and time
          management are in my toolkit too. I've built web apps showcasing my
          skills in HTML, CSS, JavaScript, React, Node.js, Express.js, and
          MongoDB. My projects prove I write clean, responsive code that solves
          real issues. Getting ready for the pro journey, I'm excited to join a
          dynamic team, bringing fresh energy and perspective. These projects
          demonstrate my constant learning and growth, ready to make an impact
          through teamwork. On the lookout for opportunities to level up my
          skills and contribute to exciting projects. If you want a dedicated
          developer with a passion for learning and good vibes, count me in!
        </p>
        <div className="card" data-aos="fade-down">
          {/* <img src={noteApp} className="card-img-top" alt="Photo" /> */}
          <div className="card-body">
            <h5 className="card-title">Notes Taking App</h5>
            <p className="project-card-icons">
              <BiLogoReact />
              <BiLogoNodejs />
              <SiExpress />
              <BiLogoMongodb />
            </p>
            <p className="card-text">
              "Experience seamless note-taking with our responsive MERN-based
              app. Save, organize, and manage your notes with ease. Effortlessly
              move notes to the bin for temporary storage or restore them when
              needed. When it's time to let go, our app offers a secure delete
              feature for permanent removal. Stay connected across devices while
              enjoying a user-friendly design that adapts to your screen,
              ensuring a smooth and intuitive note-taking experience."
            </p>
            <div className="btn-group">
              <a
                href="https://strange-clam-slippers.cyclic.cloud/"
                target="blank"
                className="btn btn-outline-success"
              >
                See Live
              </a>
              <a
                href="https://github.com/panditofcodes/notes-taking-app"
                target="blank"
                className="btn btn-outline-info"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
