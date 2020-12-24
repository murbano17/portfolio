import React from "react";
import Info from "../components/About/Info";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page__container">
      <small className="page__title-small">about</small>
      <div className="home__home-social-networks social-fixed">
        <Link to="/github" target="_blank">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="/linkedin" target="_blank">
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
      <div className="page__info">
        <h1 className="animate__animated animate__pulse">Who I am.</h1>
        <Info />
      </div>
    </div>
  );
};
export default About;
