import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLinks = props => {
  return (
    <ul className="right ">
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log In</NavLink>
      </li>
      <li />
    </ul>
  );
};

export default SignOutLinks;
