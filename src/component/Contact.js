import React from "react";

const Contact = () => {
  return (
    <div className="contact" data-aos="fade-down">
      <h2>Contact Me</h2>
      <p>
        If you're interested in collaborating on a project, discussing potential
        opportunities, or just want to say hi, feel free to get in touch with me
        using the following methods:
      </p>
      <ul>
        <li>Email: piyushshukla_@outlook.com</li>
        <li>Phone: +919161741999</li>
        <li>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/panditofcodes/">
            Your LinkedIn Profile
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/panditofcodes">Your GitHub Profile</a>
        </li>
        {/* Add more contact methods if needed */}
      </ul>
      <button className="btn btn-primary">Hire Me</button>
    </div>
  );
};

export default Contact;
