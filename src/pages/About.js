import React from "react";
import Skills from "../components/About/Skills";
import Info from "../components/About/Info";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about__container">
      <small className="home__home-title">ABOUT</small>
      <div className="home__home-social-networks social-fixed">
        <Link to="/github" target="_blank">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="/linkedin" target="_blank">
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
      <div className="about__info">
        <h1>Who I am.</h1>
        <Info />
      </div>
    </div>
  );
};
export default About;
