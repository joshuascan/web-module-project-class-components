import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const tasks = [
  {
    task: "Clean kitchen",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Update resume",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  toggleTask = (id) => {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });
    this.setState({ tasks: newTasks });
  };

  addTask = (todo) => {
    const newTask = {
      task: todo,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  clearCompleted = () => {
    const newTasks = this.state.tasks.filter((task) => {
      return task.completed === false;
    });
    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
        <TodoList toggleTask={this.toggleTask} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
