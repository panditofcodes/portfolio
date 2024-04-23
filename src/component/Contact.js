import React, { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { BiPhoneCall, BiLogoWhatsapp, BiMap } from "react-icons/bi";
import resume from "./asset/Resume.pdf";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendMsgAlert, setSendMsgAlert] = useState(" ")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle the form submission using a service like Formspree
    const response = await fetch("https://formspree.io/f/xknlrrwg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSendMsgAlert("Thank You! For Conatcting I will contact you soon.")
    } else {
      // alert("Failed to send message. Please try again later.");
      setSendMsgAlert("OOPS! could not contact.")
    }
  };

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
      .catch((error) => console.error("Error downloading resume:", error));
  };

  const hireMe = () => {
    window.location.href =
      "mailto:piyushshukla_@outlook.com?subject=Impressed by Your Portfolio - Let's Discuss Opportunities!";
  };

  return (
    <div className="contact-section" data-aos="fade-down">
      <h2 style={{ textAlign: "center" }}>Contact Me</h2>
      <p style={{textAlign: 'justify'}}>
        If you're interested in collaborating on a project, discussing potential
        opportunities, or just want to say hi, feel free to get in touch with me
        using the following methods:
      </p>
      <div>
        <div className="contactWrapper">
          <div className="contact-form" >
            <h4 style={{ textAlign: "center" }}>Send Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {/* <label>Name</label> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                {/* <label>Email</label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                {/* <label>Message</label> */}
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Send Message
              </button>
              <p>{sendMsgAlert}</p>
            </form>
          </div>
          <div className="contact-button-container" >
              <button className= "btn-hireMe" onClick={hireMe}>
                Hire Me
              </button>
              <button
                onClick={downloadResume}
                className="btn-resume"
              >
                Resume
              </button>
            </div>
          <div className="contact-section-links">
            <p className="desktop-only">
              {" "}
              <BiMap /> Kanpur
            </p>
            <a href="mailto:piyushshukla_@outlook.com" className="desktop-only">
              <AiTwotoneMail /> piyushshukla_@outlook.com
            </a>
            <a href="tel:+919161741999" className="desktop-only">
              <BiPhoneCall /> +91-9161741999
            </a>
            <a href="https://wa.me/+919161741999" className="desktop-only">
              <BiLogoWhatsapp /> 9161741999{" "}
            </a>
          </div>
          <div className="mobile-only">
            <a href="mailto:piyushshukla_@outlook.com">
              <AiTwotoneMail />
            </a>
            <a href="tel:+919161741999">
              <BiPhoneCall />
            </a>
            <a href="https://wa.me/+919161741999">
              <BiLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
