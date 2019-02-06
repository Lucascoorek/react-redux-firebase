import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignOutLinks from "./SignOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue lighten-2 ">
      <div className="container">
        <Link to="/" className="brand-logo">
          Notes
        </Link>
        <SignedInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
