import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar(!expandNavbar);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <NavLink
          className={({ isActive }) => isActive ? 'navLinkActive' : ''} to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'navLinkActive' : ''} to="/projects">
          Projects
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'navLinkActive' : ''} to="/experience">
          Experience
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
