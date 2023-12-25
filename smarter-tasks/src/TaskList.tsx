import React from "react";
import Task from "./Task";

const TaskList: React.FC<Props> = (props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={idx}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
    />
  ));
  return <>{list}</>;
};

export default TaskList;
