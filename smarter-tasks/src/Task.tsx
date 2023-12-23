import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProps {
  task: TaskItem;
}

class Task extends React.Component<TaskProps> {
  render() {
    const { task } = this.props;

    if (!task) {
      return null;
    }

    const { title, description, dueDate } = task;
    return (
      <div className="TaskItem">
        <h2 className="text-lg">Title:{title}</h2>
        <h3 className="text-sm">Due Date:{dueDate}</h3>
        <h3 className="text-sm">
          Description:{description && <p>{description}</p>}
        </h3>
      </div>
    );
  }
}

export default Task;
