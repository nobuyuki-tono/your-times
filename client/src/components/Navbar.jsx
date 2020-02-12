import React from "react";
import { Link } from "react-router-dom";

import "../style/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-custom">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <Link to="/" className="navbar-a" href="">
            Home
          </Link>
        </li>
        <li className="navbar-li">
          <Link to="/write" className="navbar-a" href="">
            Write article
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
