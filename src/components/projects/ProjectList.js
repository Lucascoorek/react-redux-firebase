import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ notes }) => {
  return (
    <div className="section project-list">
      {notes &&
        notes.map(note => {
          return (
            <Link to={`/note/${note.id}`} key={note.id}>
              <ProjectSummary note={note} key={note.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
