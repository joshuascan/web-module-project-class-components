import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  render() {
    return (
      <form>
        <input type="text" name="todo" />
        <button>Add Task</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
