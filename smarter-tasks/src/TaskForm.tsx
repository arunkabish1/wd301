import React, { } from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
    };
  }

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask: TaskItem = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
        />
        <button type="submit">Add item</button>
      </form>
    );
  }
}

export default TaskForm;
