import React, { Component } from "react";
import Projects from "./Components/Projects.js";
import AddProject from "./Components/AddProject.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentWillMount() {
    let starterProjects = [
      {
        title: "programming journal",
        category: "web design"
      },
      {
        title: "music app",
        category: "web design"
      },
      {
        title: "secret project",
        category: "web design"
      }
    ];
    let projects =
      JSON.parse(localStorage.getItem("projects")).length > 0
        ? JSON.parse(localStorage.getItem("projects"))
        : starterProjects;
    this.setState(
      {
        projects
      },
      function() {
        localStorage.setItem("projects", JSON.stringify(this.state.projects));
      }
    );
  }

  handleAddProject = function(project) {
    this.setState(
      {
        projects: [...this.state.projects, project]
      },
      function() {
        localStorage.setItem("projects", JSON.stringify(this.state.projects));
      }
    );
  };

  clearProjects = function(e) {
    e.preventDefault();
    this.setState(
      {
        projects: []
      },
      function() {
        localStorage.setItem("projects", "[]");
      }
    );
  };
  render() {
    return (
      <div className="App">
        <h3>list of projects</h3>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
        <button onClick={this.clearProjects.bind(this)}>clear projects</button>
      </div>
    );
  }
}

export default App;
