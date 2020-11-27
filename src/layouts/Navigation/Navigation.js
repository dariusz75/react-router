import React from "react";
import { NavLink } from "react-router-dom";

import "./navigation.css";

const linkDetails = [
  { name: "Home", path: "/", exact: true },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

function Navigation() {
  const menuItems = linkDetails.map((link) => {
    return (
      <li key={link.name}>
        <NavLink to={link.path} exact={link.exact ? true : false}>
          {link.name}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className="main-nav">
      <ul>{menuItems}</ul>
    </nav>
  );
}

export default Navigation;
