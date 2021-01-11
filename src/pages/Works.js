import React, { useRef } from "react";
import { projects } from "../components/Works/listOfWorks";
import Project from "../components/Works/Project";
import { Link } from "react-router-dom";

const Works = () => {
  const bottomRef = useRef();

  const handleScrollToStats = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="page__container">
      <small className="page__title-small">works</small>
      <div className="home__home-social-networks social-fixed">
        <Link to="/github" target="_blank">
          <i className="fab fa-github icon-github"></i>
        </Link>
        <Link to="/linkedin" target="_blank">
          <i className="fab fa-linkedin icon-linkedin"></i>
        </Link>
      </div>
      <button className="works__scroll" onClick={handleScrollToStats}>
        Scroll down
      </button>

      <div className="page__info">
        <h1 className="animate__animated animate__pulse">works.</h1>
        <div className="page__info-container">
          {projects.map((project, i) => {
            return (
              <div key={i}>
                <div ref={bottomRef}> </div>
                <Project {...project} {...i} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Works;
