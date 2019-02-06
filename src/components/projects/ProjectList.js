import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ notes }) => {
  return (
    <div className="section project-list">
      {notes &&
        notes.map(note => {
          return <ProjectSummary note={note} key={note.id} />;
        })}
    </div>
  );
};

export default ProjectList;
