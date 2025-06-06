import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="nav-menu">
        <ul className="menu-items">
          <li>
            <Link
              to="/"
              className={`anchor-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <p className="menu-item">Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="/about-me"
              className={`anchor-link ${
                location.pathname === "/about-me" ? "active" : ""
              }`}
            >
              <p className="menu-item">About Me</p>
            </Link>
          </li>
          <li>
            <Link
              to="/my-project"
              className={`anchor-link ${
                location.pathname === "/my-project" ? "active" : ""
              }`}
            >
              <p className="menu-item">Portfolio</p>
            </Link>
          </li>
        </ul>
        <Link to="/contact" className="anchor-link">
          <p className="nav-connect">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
