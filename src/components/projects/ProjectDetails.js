import React from "react";

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Note's Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            eligendi nemo ab praesentium vitae, quod assumenda hic voluptatibus,
            qui rerum libero iste cumque nisi nostrum maxime, sequi architecto
            nobis! Dolor.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text ">
          <div>Posted by Lukas</div>
          <div>6th February 2018</div>
        </div>
      </div>
    </div>
  );
}
