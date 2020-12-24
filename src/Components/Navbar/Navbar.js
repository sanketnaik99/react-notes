/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue">
          <div className="brand-logo center navbar-title">Notes.</div>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li className={useRouteMatch("/demo") ? "active" : ""}>
              <NavLink to="/demo">Demo</NavLink>
            </li>
            <li className={useRouteMatch("/sign-in") ? "active" : ""}>
              <NavLink to="/sign-in">Sign In</NavLink>
            </li>
            <li className={useRouteMatch("/sign-up") ? "active" : ""}>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink to="/demo" activeClassName="active">
            Demo
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" activeClassName="active">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" activeClassName="active">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
