import React from "react";
import {
  SiPython,
  SiJavascript,
  SiDjango,
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { BiBriefcase } from "react-icons/bi";

export default function Projects() {
  return (
    <>
      <div className="project-section" data-aos="fade-down">
        <h1
          className="experience-section-heading"
          style={{ textAlign: "center" }}
        >
          Projects
        </h1>

        <p className="experience-section-intro">
          These projects represent my hands-on experience in building
          production-ready applications using both Python-based and JavaScript
          technologies. The work spans ERP systems, finance management, and
          full-stack web applications, focusing on clean architecture,
          automation, and real-world usability.
        </p>

        {/* Billing App */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <BiBriefcase /> Billing App
            </h5>

            <p className="project-card-icons">
              <SiPython />
              <SiDjango />
            </p>

            <p className="card-text">
              A complete billing and inventory management application built
              using Django. The system enables GST-compliant invoicing,
              real-time stock tracking, and detailed reporting for daily
              business operations.
            </p>

            <ul className="card-text">
              <li>Item and customer management</li>
              <li>Automated GST calculation</li>
              <li>Invoice generation and print formats</li>
              <li>Real-time inventory tracking</li>
              <li>Sales and inventory reports</li>
            </ul>
          </div>
        </div>

        {/* Finance Manager App */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <BiBriefcase /> Finance Manager App
            </h5>

            <p className="project-card-icons">
              <SiPython />
              <SiDjango />
              <SiJavascript />
            </p>

            <p className="card-text">
              A personal finance management application built using Django and
              Frappe-inspired accounting concepts. The application tracks daily
              expenses and income using a simplified double-entry system.
            </p>

            <ul className="card-text">
              <li>Daily income and expense tracking</li>
              <li>Simplified double-entry accounting logic</li>
              <li>Monthly and yearly financial summaries</li>
              <li>Category-based financial insights</li>
              <li>User-friendly dashboards</li>
            </ul>
          </div>
        </div>

        {/* Branch Manager App */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <BiBriefcase /> Branch Manager App
            </h5>

            <p className="project-card-icons">
              <SiPython />
              <SiJavascript />
            </p>

            <p className="card-text">
              A UI-based system designed to manage multiple Frappe benches and
              sites efficiently. It simplifies bench operations such as site
              creation, app installation, updates, and migrations through a
              centralized interface.
            </p>

            <ul className="card-text">
              <li>Centralized bench and site management</li>
              <li>App installation and update workflows</li>
              <li>Site creation and migration handling</li>
              <li>Reduced dependency on CLI commands</li>
              <li>Built for demo and multi-instance setups</li>
            </ul>
          </div>
        </div>

        {/* Notes Taking App */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <BiBriefcase /> Notes Taking App
            </h5>

            <p className="project-card-icons">
              <SiReact />
              <SiNodedotjs />
              <SiMongodb />
            </p>

            <p className="card-text">
              A web-based notes management application that allows users to
              create, edit, organize, and delete notes through a responsive and
              intuitive interface.
            </p>

            <ul className="card-text">
              <li>Create, edit, and organize notes easily</li>
              <li>Responsive UI across devices and screen sizes</li>
              <li>Secure note deletion and restoration</li>
              <li>Full-stack MERN-based architecture</li>
            </ul>
          </div>
        </div>

        {/* Portfolio */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              <BiBriefcase /> Portfolio Website
            </h5>

            <p className="project-card-icons">
              <SiReact />
              <SiJavascript />
            </p>

            <p className="card-text">
              A personal portfolio website designed to showcase skills,
              projects, and professional experience. The site focuses on clean
              UI, responsiveness, and smooth user experience.
            </p>

            <ul className="card-text">
              <li>Responsive and modern UI design</li>
              <li>Clear presentation of skills and projects</li>
              <li>Optimized for different screen sizes</li>
              <li>Built with React for component reusability</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
