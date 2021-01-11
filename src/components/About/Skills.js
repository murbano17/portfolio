import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  const webDevSkills = [
    { name: "HTML 5" },
    { name: "CSS 3" },
    { name: "JavaScript ( ES6+ )" },
    { name: "React JS" },
    { name: "Node JS" },
    { name: "Express JS" },
    { name: "Firebase" },
    { name: "MongoDB" },
    { name: "Git" },
    { name: "NPM" },
  ];

  const designSkills = [
    { name: "Adobe Photoshop" },
    { name: "Adobe Illustrator" },
    { name: "Adobe Indesign" },
  ];

  return (
    <div className="skills__skills-container">
      <div className="skills__skills-info">
        <h5>technologies.</h5>
        <p className="skills__tecnologies">
          Here are a few technologies I've been working with recently:
        </p>
        <div className="skills__skills-list">
          <h3>Web Development</h3>
          <ul>
            {webDevSkills.map((eachSkill) => {
              return (
                <li key={eachSkill}>
                  <i className="fas fa-angle-right"></i> {eachSkill.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="skills__skills-list">
          <h3>Graphic Design</h3>
          <ul>
            {designSkills.map((eachSkill) => {
              return (
                <li key={eachSkill}>
                  <i className="fas fa-angle-right"></i> { eachSkill.name}

                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="home__home-btn-works contact-btn">
        <Link className="home__link" to="/contact">
          CONTACT ME <i className="fa fa-angle-right"></i>
        </Link>
      </div>
    </div>
  );
};
export default Skills;
