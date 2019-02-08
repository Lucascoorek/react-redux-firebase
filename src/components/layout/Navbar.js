import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue lighten-2 ">
      <div className="container">
        <Link to="/" className="brand-logo hide-on-med-and-down">
          Notes
        </Link>
        <SignedInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
