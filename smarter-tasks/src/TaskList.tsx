import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface TaskListProps {
  tasks: TaskItem[];
}

class TaskList extends React.Component<TaskListProps> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task key={idx} title={task.title} />
    ));
  }
}

export default TaskList;
