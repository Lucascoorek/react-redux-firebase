import React from "react";
const ProjectSummary = ({ note }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{note.title}</span>
        <p>Made by Lukasz Kurek</p>
        <p className="grey-text">6th February 2019</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
