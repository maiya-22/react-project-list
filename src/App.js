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
  // starter projects:
  componentWillMount() {
    let projects = JSON.parse(localStorage.getItem("projects"));
    this.setState({
      projects
    });
    // uncomment this part and run once to seed local storage:
    // this.setState(
    //   {
    //     projects: [
    //       {
    //         title: "programming journal",
    //         category: "web design"
    //       },
    //       {
    //         title: "music app",
    //         category: "web design"
    //       },
    //       {
    //         title: "secret project",
    //         category: "web design"
    //       }
    //     ]
    //   },
    //   function() {
    //     localStorage.setItem("projects", JSON.stringify(this.state.projects));
    //     if (!localStorage.projects) {
    //       console.log("no projects in local storage");
    //       // localStorage.setItem("projects", JSON.stringify(this.state.projects));
    //       // localStorage.setItem("projects", "hello");
    //     } else {
    //       // console.log(JSON.stringify(this.state.projects));
    //       // localStorage.setItem("projects", "empty");
    //       console.log(
    //         "projects in local storage: ",
    //         localStorage.getItem("projects")
    //       );
    //     }
    //   }
    // );
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
        localStorage.setItem("projects", "empty");
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
