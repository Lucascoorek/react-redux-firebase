import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = props => {
  return (
    <ul className="right ">
      <li>
        <NavLink to="/create">New Note</NavLink>
      </li>
      <li>
        <a href="/" onClick={props.singOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink className="btn btn-floating blue lighten-3" to="/">
          LL
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    singOut: () => dispatch(signOut())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
