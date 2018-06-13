import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import uuidv1 from "uuid/v1";

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map((project, index) => {
        return <ProjectItem project={project} key={uuidv1()} />;
      });
    }
    return <ul className="Projects"> {projectItems} </ul>;
  }
}

export default Projects;
