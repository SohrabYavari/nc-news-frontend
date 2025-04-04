import React from "react";
import { navLinks } from "../../utils/nav";
import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";

export default function Navbar() {
  return (
    <nav className="navbar bg-secondary absolute shadow-xl">
      <ul className="flex gap-5 font-bold">
        {navLinks.map((item) => {
          return (
            <ul key={item.id} className="capitalize">
              <Link to={item.navLink}>{item.navName}</Link>
            </ul>
          );
        })}
        <ThemeController />
      </ul>
    </nav>
  );
}
