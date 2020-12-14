import React, { useRef } from "react";
import { projects } from "../components/Works/ListOfWorks";
import Project from "../components/Works/Project";
import { Link } from "react-router-dom";

const Works = () => {
  const bottomRef = useRef();

  const handleScrollToStats = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="works__container">
      <small className="home__home-title">WORKS</small>
      <div className="home__home-social-networks social-fixed">
        <Link to="/github" target="_blank">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="/linkedin" target="_blank">
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
      <button className="works__scroll" onClick={handleScrollToStats}>
        Scroll down
      </button>

      <div className="works__info ">
        <h1>works.</h1>
        {projects.map((project, i) => {
          return (
            <>
              <div key={i} ref={bottomRef}>
                {" "}
              </div>
              <Project {...project} {...i} />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Works;
