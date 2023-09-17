import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [padding, setPadding] = useState(false);
  const changePadding = () => {
    if (window.scrollY > 0) {
      setPadding(true);
    } else {
      setPadding(false);
    }
  };

  window.addEventListener("scroll", changePadding);

  return (
    <nav
      className={
        padding
          ? "navbar navbar-expand-lg fixed-top "
          : "navbar navbar-expand-lg fixed-top py-4"
      }
    >
      <div className="container">
        <Link to={"/"} className="navbar-brand fs-2 fw-bold">
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item me-3">
              <NavLink to={"/about"} className="nav-link">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to={"/portfolio"} className="nav-link">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to={"/contact"} className="nav-link">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
