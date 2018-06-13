import React, { Component } from "react";
import Projects from "./Components/Projects.js";
import AddProject from "./Components/AddProject.js";
import "./App.css";
import uuid from "uuid";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    };
  }
  componentWillMount() {
    let starterProjects = [
      {
        id: uuid.v4(),
        title: "programming journal",
        category: "web design"
      },
      {
        id: uuid.v4(),
        title: "music app",
        category: "web design"
      },
      {
        id: uuid.v4(),
        title: "secret project",
        category: "web design"
      }
    ];
    let projects = starterProjects;
    let storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (storedProjects) {
      projects = storedProjects;
    }
    this.setState(
      {
        projects
      },
      function() {
        localStorage.setItem("projects", JSON.stringify(this.state.projects));
      }
    );
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(data => {
      // data.data.forEach(data => {
      //   console.log(data.title);
      // });
      this.setState({ todos: data.data }, function() {
        console.log("this.state.todos:", this.state.todos);
      });
    });
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
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects
    });
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <button onClick={this.clearProjects.bind(this)}>clear projects</button>
        <h3>list of projects</h3>
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
      </div>
    );
  }
}

export default App;
