import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import Works from "../pages/Works";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Router>
      <div className="base__general-container">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/github"
            component={() => {
              window.location.href = "https://github.com/murbano17";
              return null;
            }}
          />
          <Route
            exact
            path="/linkedin"
            component={() => {
              window.location.href =
                "https://www.linkedin.com/in/marina-urbano-bouterin/";
              return null;
            }}
          />
          <Route
            exact
            path="/whatiread"
            component={() => {
              window.location.href =
                "https://murbano17.github.io/whatiread-m1/";
              return null;
            }}
          />
          <Route
            exact
            path="/localshop"
            component={() => {
              window.location.href = "https://localshop-ml.herokuapp.com/";
              return null;
            }}
          />
          <Route
            exact
            path="/travelwith"
            component={() => {
              window.location.href = "https://travel-with.herokuapp.com";
              return null;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
