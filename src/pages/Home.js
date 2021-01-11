import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__home-container">
      <div className="home__home">
        <small className="page__title-small">home</small>

        <div className="home__half-grey"></div>
        <div className="home__home-hello ">
          <h1 className="animate__animated animate__bounceInLeft">
            he
            <br />
            llo!
          </h1>
          <div className="home__home-welcome">
            <p className=" animate__animated animate__pulse">
              my name is Marina. <br /> I'm a<span> front end developer</span>{" "}
              and
              <span> graphic designer</span> based in Barcelona.
            </p>
            <Link className="home__link" to="/works">
              <div className="home__home-btn-works animate__animated animate__pulse">
                view all works <i className="fa fa-angle-right"></i>
              </div>
            </Link>
          </div>
        </div>

        <div className="home__home-social-networks home-icons">
          <Link to="/github" target="_blank">
            <i className="fab fa-github icon-github"></i>
          </Link>
          <Link to="/linkedin" target="_blank">
            <i className="fab fa-linkedin icon-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
