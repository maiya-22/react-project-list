import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import uuid from "uuid";

class AddProjects extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }
  static defaultProps = {
    categories: "web design,web dev,mobile dev".split(",")
  };
  handleSubmit(e) {
    e.preventDefault();
    // console.log("submmitted");
    // console.log(this.refs.title.value);
    this.setState(
      {
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      },
      function() {
        // console.log("AddProjects state: ", this.state);
        // console.log(this.props.addProject);
        this.props.addProject(this.state.newProject);
      }
    );
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h3>add project form</h3>
          <input type="text" ref="title" />
          <select ref="category">{categoryOptions}</select>
          <button>add project</button>
        </form>
      </div>
    );
  }
}

export default AddProjects;
