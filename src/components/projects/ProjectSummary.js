import React from "react";
import moment from "moment";

const ProjectSummary = ({ note }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{note.title}</span>
        <p>
          Made by {note.authorFirstName} {note.authorLastName}
        </p>
        <p className="grey-text">
          {moment(note.createdAt.toDate())
            .locale("pl")
            .format("llll")}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
