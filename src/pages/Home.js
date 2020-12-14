import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__home-container">
      <div className="home__home">
        <small className="home__home-title">HOME</small>

        <div className="home__half-grey"></div>
        <div className="home__home-hello">
          <h1>
            he
            <br />
            llo!
          </h1>
          <div className="home__home-welcome">
            <p>
              my name is Marina. <br /> I'm a ( junior )
              <span> front end developer</span> and
              <span> graphic designer</span> based in Barcelona.
            </p>
            <Link className="home__link" to="/works">
              <div className="home__home-btn-works">
                SEE MY WORKS <i className="fa fa-angle-right"></i>
              </div>
            </Link>
          </div>
        </div>

        <div className="home__home-social-networks">
          <Link to="/github" target="_blank">
            <i className="fab fa-github"></i>
          </Link>
          <Link to="/linkedin" target="_blank">
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
