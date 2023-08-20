import React, {useEffect} from "react";
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";

export default function Home() {

  

  return (
    <>
      <div className="container mt-5 temp" data-aos="zoom-in" >
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
            <div className="text-center mb-4">
              <h1>Hello, I'm Piyush Shukla</h1>
              <p className="lead">
                An aspiring full-stack MERN developer eager to explore web
                development. I've delved into MongoDB, Express.js, React.js, and
                Node.js, mastering these technologies. From crafting responsive
                UIs with React to enhancing user experiences through efficient
                solutions, I'm committed to continuous learning. Collaboration
                is at my core, and I thrive in teams, bringing ideas to life.
                Looking forward, I aim to contribute to impactful projects,
                refine my skills, and embrace the dynamic realm of full-stack
                MERN development.
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
          </div>
        </div>
      </div>
    </>
  );
}
