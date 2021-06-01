import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

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
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} />
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
