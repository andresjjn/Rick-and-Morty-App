import React from "react";
import portal from "../../assets/images/portal.png";
import MenuItem from "../MenuItem/MenuItem";
import { Link } from "react-router-dom";
import "./nav.scss";
const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="portal" alt="Return to main page" src={portal} />
      </Link>
      <div>
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <MenuItem title="Characters" to="/characters" />
          <MenuItem title="Locations" to="/locations" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
