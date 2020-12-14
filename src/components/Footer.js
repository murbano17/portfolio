import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__footer-container">
      <Link to="/github" target="_blank">
        <i className="icon fab fa-github"></i>
      </Link>
      <Link to="/linkedin" target="_blank">
        <i className=" icon fab fa-linkedin"></i>
      </Link>
    </div>
  );
};
export default Footer;
