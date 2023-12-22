import React from "react";
import Task from "./Task";

interface Props {}

interface TaskItem {
  title: string;
}

interface State {
  tasks: TaskItem[];
}

class TaskList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tasks: [{ title: "Pay rent" }, { title: "Submit assignment" }],
    };
  }

  componentDidMount() {
    const tasks = [{ title: "Pay rent" }, { title: "Submit assignment" }];
    this.setState((state, props) => ({
      tasks,
    }));
  }

  render() {
    return (
      <>
        {this.state.tasks.map((task, index) => (
          <Task key={index} title={task.title} />
        ))}
      </>
    );
  }
}

export default TaskList;
