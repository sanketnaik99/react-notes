/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { NOTES_ROUTE } from "../../../routes";
import "./SignedInLinks.css";

const SignedInDesktopLinks = ({ profile, logout }) => {
  return (
    <div>
      <li>
        <NavLink
          to={NOTES_ROUTE}
          className="btn btn-floating lime accent-3 black-text user-icon-text"
        >
          {profile.initial ? profile.initial.toUpperCase() : ""}
        </NavLink>
      </li>
      <li className={useRouteMatch(NOTES_ROUTE) ? "active" : ""}>
        <NavLink to={NOTES_ROUTE}>Notes</NavLink>
      </li>
      <li>
        <a onClick={logout}>Logout</a>
      </li>
    </div>
  );
};

export default SignedInDesktopLinks;
