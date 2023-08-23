import React from "react";
import profileImage from "./asset/profile.png";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoBootstrap,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const About = () => {
  return (
    <div className="about" data-aos="fade-down">
      <h1 style={{textAlign: 'center'}} >About</h1>
      <div className="about-intro" data-aos="fade-down">
        <div>
          <img src={profileImage} alt="Profile" className="profile-image" data-aos="zoom-in"/>
        </div>
        <p>
          I'm a self-taught full-stack web developer with a strong foundation in
          web technologies like React, NodeJs etc. My educational background includes a Bachelor of
          Computer Applications (BCA), and I am currently pursuing a Master of
          Computer Applications (MCA). I have a passion for creating dynamic and
          responsive web applications using the latest tools and frameworks. My
          journey in web development has been an exciting exploration of coding
          and problem-solving, and I'm eager to continue learning and growing in
          this field.
        </p>
      </div>
      <div className="about-education resume-item d-flex flex-column flex-md-row mb-5"data-aos="fade-down"> {/*Education*/}
        <div className="resume-section p-3 p-lg-5 d-flex flex-column">
          <div className="my-auto">
            <h1 className="mb-5 about-education-title">Education</h1>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-3 size-reducer">Indira Gandhi National Open University</h3>
                <h5 className="size-reducer"> Harcourt Butler Technological Institute</h5>
                <h6 className="size-reducer">Master Of Computer Applications</h6>
                <p className="size-reducer">Janaury 2023 - Present</p>
              </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-3 size-reducer">
                  Chhatrapati Shahu Ji Maharaj University
                </h3>
                <h5 className="size-reducer">Jagran College of Arts, Science & Commerce</h5>
                <h6 className="size-reducer">Bachelor Of Computer Applications</h6>
                <p className="size-reducer">August 2019 - August 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-item d-flex flex-column flex-md-row mb-5">{/*Skill*/}
        <div className="my-auto" data-aos="fade-down">
          <h1 className="mb-3 skill-title">Skills</h1>
          <div className="subheading mb-3 skill-sub-heading">PROGRAMMING LANGUAGES & TOOLS</div>

          <ul className="list-inline list-icons skill-item skill-icon" >
            <li>
              <BiLogoHtml5 />
            </li>
            <li>
              <BiLogoCss3 />
            </li>
            <li>
              <BiLogoJavascript />
            </li>
            <li>
              <BiLogoReact />
            </li>
            <li>
              <BiLogoNodejs />
            </li>
            <li>
              <SiExpress />
            </li>
            <li>
              <BiLogoMongodb />
            </li>
            <li>
              <BiLogoBootstrap />
            </li>
          </ul>
        </div>
      </div>
      <div className="resume-item d-flex flex-column flex-md-row mb-5">{/*Intrests*/}
        <div className="my-auto" data-aos="fade-down">
          <h2 className="mb-2 intrest-section-title">Interests</h2>
          <p className="intrest-section">
            Hey there, beyond my gig as a developer, I find incredible joy in
            diving headfirst into a bunch of awesome hobbies that add a whole
            lot of flavor to my life. I'm all about grooving to music, capturing
            those fleeting moments with my trusty camera, getting completely
            lost in the captivating stories woven by books, and setting off on
            thrilling adventures that keep life exciting. It's way more than
            just code to me—these passions not only keep things balanced but
            also get me super pumped about embracing all the diverse and
            colorful experiences that the world has waiting for me. Cheers to a
            life well-lived!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
