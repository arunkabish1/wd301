import React from "react";

interface TaskProp {
  title: string;
}


class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div>{this.props.title}</div>
    )
  }
}

export default Task;