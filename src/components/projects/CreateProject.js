import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../store/actions/noteActions";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createNote(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New note</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Note</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-3 z-depth-0 ">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToPros = dispatch => {
  return {
    createNote: note => dispatch(createNote(note))
  };
};
export default connect(
  null,
  mapDispatchToPros
)(CreateProject);