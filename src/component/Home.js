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
            An ERPNext Developer with hands-on experience in building,
            customizing, and maintaining ERP solutions using Frappe Framework.
            Proficient in Python and JavaScript, with strong understanding of
            backend logic, workflows, custom doctypes, reports, and
            integrations. Experienced in developing web applications using
            Django, applying structured backend design and clean data handling.
            Passionate about optimizing business processes through automation,
            role-based access control, and scalable system design. A continuous
            learner who enjoys collaborating with teams to deliver reliable,
            efficient, and impactful enterprise solutions.
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
