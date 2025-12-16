import React from "react";
import { SiPython, SiJavascript, SiDjango } from "react-icons/si";
import { BiBriefcase } from "react-icons/bi";

export default function Experience() {
  return (
    <>
      <div className="experience-section" data-aos="fade-down">
        <h1 className="experience-section-heading" style={{ textAlign: "center" }}>
          EXPERIENCE
        </h1>

        {/* Job Title */}
        <h3 className="experience-role">
          ERPNext Developer — Opticode Technologies Pvt. Ltd.
        </h3>

        <p className="experience-duration">May 2024 – Present</p>

        {/* Tech Icons (optional but nice) */}
        <p className="project-card-icons">
          <SiPython />
          <SiJavascript />
          <SiDjango />
        </p>

        {/* HRMS & Payroll */}
        <h4 className="experience-subheading">HRMS & Payroll</h4>
        <ul className="experience-list">
          <li>Slab-based attendance logic (full day, half day, 3/4 day).</li>
          <li>Custom salary formula engine for varied conditions.</li>
          <li>Utility converting machine logs to Employee Check-ins import format.</li>
          <li>Custom payslip print format and shift-variation notifications.</li>
        </ul>

        {/* CRM */}
        <h4 className="experience-subheading">CRM</h4>
        <ul className="experience-list">
          <li>Modified default ERPNext flow (Lead → Quotation → Sales Order).</li>
          <li>Integrated GST Public Search API for automatic customer details.</li>
          <li>Department-wise document filtering and user-based permissions.</li>
          <li>Validations for series, product selection, and workflow rules.</li>
        </ul>

        {/* Project & Manufacturing */}
        <h4 className="experience-subheading">Project & Manufacturing</h4>
        <ul className="experience-list">
          <li>Customized project hierarchy and role-based access.</li>
          <li>Workflow improvements in manufacturing operations.</li>
        </ul>
      </div>
    </>
  );
}
