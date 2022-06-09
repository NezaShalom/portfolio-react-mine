import React from "react";
import "./SoftwareSkill.css";

export default function SoftwareSkill() {
  return (
    <div>
      {/* <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkillsf.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div> */}

      <div className="skills__container bd-grid">
        <div className="skills__box">
        
          <h3 className="skills__subtitle">Frontend & Mobile</h3>
          <span className="skills__name">ReactJS</span>
          <span className="skills__name">Bootstrap</span>
          <span className="skills__name">Tailwind-css</span>
          <span className="skills__name">Redux</span>
          <span className="skills__name">React Native</span>
          <span className="skills__name">Nextjs</span>

          <h3 className="skills__subtitle">Backend</h3>
          <span className="skills__name">Node</span>
          <span className="skills__name">Express</span>
          <span className="skills__name">Laravel</span>

          <h3 className="skills__subtitle">Database</h3>
          <span className="skills__name">Firebase</span>
          <span className="skills__name">Mongo DB</span>
          <span className="skills__name">Postgres</span>
        </div>

        </div>
      </div>
  );
}
