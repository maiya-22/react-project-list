import React, { Component } from "react";
import uuidv1 from "uuid/v1";

class ProjectItem extends Component {
  deleteProject(id) {
    console.log("test");
    this.props.onDelete(id);
  }
  render() {
    // console.log(this.props);
    return (
      <li className="Project">
        {this.props.project.title} - {this.props.project.category}{" "}
        <a
          href="#"
          onClick={this.deleteProject.bind(this, this.props.project.id)}
        >
          x
        </a>
      </li>
    );
  }
}

export default ProjectItem;
