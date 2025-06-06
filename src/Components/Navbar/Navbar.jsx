import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={closeMobileMenu}>
        <img src={logo} alt="Logo" />
      </Link>
      
      <div className="nav-mob-open" onClick={toggleMobileMenu}>
        ☰
      </div>
      
      <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="nav-mob-close" onClick={toggleMobileMenu}>
          ✕
        </div>
        <ul className="menu-items">
          <li>
            <Link
              to="/"
              className={`anchor-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
            >
              <p className="menu-item">Portfolio</p>
            </Link>
          </li>
        </ul>
        <Link to="/contact" className="anchor-link" onClick={closeMobileMenu}>
          <p className="nav-connect">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
