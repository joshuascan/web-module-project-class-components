import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.input);
  };

  handleClear = (e) => {
    e.preventDefault();
    this.props.clearCompleted();
  };

  render() {
    return (
      <form>
        <input onChange={this.handleChanges} type="text" name="todo" />
        <button onClick={this.handleAdd}>Add Task</button>
        <button onClick={this.handleClear}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
