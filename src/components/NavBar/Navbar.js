import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav className="navbar__navbar-menu">
    
        <div className="menu-icon" onClick={handleClick}>
          <small>{clicked ? "close" : "menu"}</small>
          <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={clicked ? "navbar__navbar active" : "navbar__navbar"}>
          {MenuItems.map((item, index) => {
            return (
              <li
                className="navbar__nav-links"
                key={index}
                onClick={handleClick}
              >
                <Link to={item.url} className="navbar__nav-link-title">
                  {item.title}
                </Link>
              </li>
            );
          })}
          <div className="navbar__links-social-networks">
            <li>
              <Link to="/github" target="_blank">
                <i className="icon fab fa-github"></i>
              </Link>
            </li>
            <li>
              <Link to="/linkedin" target="_blank">
                <i className="icon fab fa-linkedin"></i>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
