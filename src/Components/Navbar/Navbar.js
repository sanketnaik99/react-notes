/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import {
  DEMO_PAGE_ROUTE,
  SIGNIN_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
} from "../../routes";
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
            <li className={useRouteMatch(DEMO_PAGE_ROUTE) ? "active" : ""}>
              <NavLink to={DEMO_PAGE_ROUTE}>Demo</NavLink>
            </li>
            <li className={useRouteMatch(SIGNIN_PAGE_ROUTE) ? "active" : ""}>
              <NavLink to={SIGNIN_PAGE_ROUTE}>Sign In</NavLink>
            </li>
            <li className={useRouteMatch(SIGNUP_PAGE_ROUTE) ? "active" : ""}>
              <NavLink to={SIGNUP_PAGE_ROUTE}>Sign Up</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <NavLink to={DEMO_PAGE_ROUTE} activeClassName="active">
            Demo
          </NavLink>
        </li>
        <li>
          <NavLink to={SIGNIN_PAGE_ROUTE} activeClassName="active">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to={SIGNUP_PAGE_ROUTE} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
