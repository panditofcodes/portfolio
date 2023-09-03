import React from "react";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import resume from "./asset/Resume.pdf";
import Lottie from "lottie-react";
import down_arrow from "./asset/down_arrow.json";
import welcome from "./asset/welcome.json";

export default function Home() {
  const downloadResume = () => {
    const fileName = "Resume.pdf";
    const resumeUrl = resume; // Replace this with the actual URL of your image

    fetch(resumeUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();

        URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading image:", error));
  };

  const hireMe = () => {
    window.location.href =
      "mailto:piyushshukla_@outlook.com?subject=Impressed by Your Portfolio - Let's Discuss Opportunities!";
  };

  return (
    <>
      <div className="home-section">
        <Lottie animationData={welcome} className="welcome-animation" />
        <div className="button-container">
          <button className="btn-hireMe" onClick={hireMe}>
            Hire Me
          </button>
          <button onClick={downloadResume} className="btn-resume">
            Resume
          </button>
        </div>
        <div className="home-intro" data-aos="zoom-in">
          <h1>I'm Piyush Shukla</h1>
          <p className="lead">
            An aspiring full-stack MERN developer eager to explore web
            development. I've delved into MongoDB, Express.js, React.js, and
            Node.js, mastering these technologies. From crafting responsive UIs
            with React to enhancing user experiences through efficient
            solutions, I'm committed to continuous learning. Collaboration is at
            my core, and I thrive in teams, bringing ideas to life. Looking
            forward, I aim to contribute to impactful projects, refine my
            skills, and embrace the dynamic realm of full-stack MERN
            development.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com/in/panditofcodes">
              <BsLinkedin />
            </a>
            <a href="https://github.com/panditofcodes">
              <BsGithub />
            </a>
            <a href="https://twitter.com/piyush__shukla">
              <BsTwitter />
            </a>
            <a href="https://instagram.com/piyush._.shukla">
              <BsInstagram />
            </a>
          </div>
        </div>
        <Lottie animationData={down_arrow} className="arrow-animation" />
      </div>
    </>
  );
}
