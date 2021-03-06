import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import uuidv1 from "uuid/v1";

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map((project, index) => {
        return (
          <ProjectItem
            onDelete={this.deleteProject.bind(this)}
            project={project}
            key={uuidv1()}
          />
        );
      });
    }
    return <ul className="Projects"> {projectItems} </ul>;
  }
}

export default Projects;
