import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Note</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink className="btn btn-floating blue lighten-3" to="/">
          LL
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
