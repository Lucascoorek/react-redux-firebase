import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div className="dashboart container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList notes={notes} />
          </div>

          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.note.notes
  };
};
export default connect(mapStateToProps)(Dashboard);
