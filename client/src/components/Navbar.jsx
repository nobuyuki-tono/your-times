import React from "react";

import "../style/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Write article</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
