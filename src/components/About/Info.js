import React from "react";

const Info = () => {
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
    <div className="about__info-container">
      <div className="about__info-image">
        <p>
          Hello! I'm Marina, a <span>junior front end developer</span> and
          <span> graphic designer </span>
          based in Barcelona. A few months ago I decided to start a new
          adventure in the world of web development. I have done the full time
          bootcamp of Web Development on Ironhack. I enjoy creating things, if
          are applications or websites much better. My goal is{" "}
          <span>to keep learning </span>
          more and more. And I am looking an opportunity to deep inside to
          developing world. I have a desire for progress and ambition.
        </p>
        <img
          className="about__info-profile-img"
          src="/img/profile-picture-min.png"
          alt="profile"
        />
      </div>
      <h5>technologies.</h5>
      <p>Here are a few technologies I've been working with recently:</p>
      <div className="skills_skills">
        <div className="skills__skills-list">
          <h3>Web Development</h3>
          <ul>
            {webDevSkills.map((eachSkill, i) => {
              return (
                <li key={i}>
                  <i className="fas fa-angle-right"></i> {eachSkill.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="skills__skills-list">
          <h3>Graphic Design</h3>
          <ul>
            {designSkills.map((eachSkill, i) => {
              return (
                <li key={i}>
                  <i className="fas fa-angle-right"></i> {eachSkill.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Info;
