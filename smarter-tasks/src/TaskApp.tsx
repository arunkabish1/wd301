import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { TaskItem } from "./types";

interface TaskAppState {
  tasks: TaskItem[];
}

class TaskApp extends React.Component<{}, TaskAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask = (task: TaskItem) => {
    this.setState((state) => ({
      tasks: [...state.tasks, task],
    }));
  };

  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TaskApp;
