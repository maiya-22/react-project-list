import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map((project, index) => {
        return <ProjectItem project={project} key={index} />;
      });
    }
    return <ul className="Projects"> {projectItems} </ul>;
  }
}

export default Projects;
