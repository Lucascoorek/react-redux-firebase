import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { notes, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboart container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList notes={notes} />
          </div>

          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.firestore.ordered.notes,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "notes", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 4, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
