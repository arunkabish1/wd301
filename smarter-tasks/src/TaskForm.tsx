import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: "",
      description: "",
    };
  }

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };

  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (this.state.title.trim() !== "" && this.state.dueDate.trim() !== "") {
      const newTask: TaskItem = {
        title: this.state.title,
        dueDate: this.state.dueDate,
        description: this.state.description,
      };
      this.props.addTask(newTask);
      this.setState({ title: "", dueDate: "" ,description: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <label htmlFor="todoTitle">Title:</label>
        <input
          type="text"
          id="todoTitle"
          value={this.state.title}
          onChange={this.titleChanged}
        />

        <label htmlFor="todoDueDate">Due Date:</label>
        <input
          type="date"
          id="todoDueDate"
          value={this.state.dueDate}
          onChange={this.dueDateChanged}
        />

        <label htmlFor="todoDescription">Description:</label>
        <input
          type="text"
          id="todoDescription"
          value={this.state.description}
          onChange={this.descriptionChanged}
        />

        <button type="submit" id="addTaskButton">
          Add Task
        </button>
      </form>
    );
  }
}

export default TaskForm;
