import React from "react";
import { navLinks } from "../../utils/nav";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-accent absolute">
      <ul className="flex gap-5">
        {navLinks.map((item) => {
          return (
            <ul key={item.id} className="capitalize">
              <Link to={item.navLink}>{item.navName}</Link>
            </ul>
          );
        })}
      </ul>
    </nav>
  );
}
