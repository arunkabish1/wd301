import React from "react";
import Task from "./Task";

interface TaskItem {
  title: string;
  description: string;
  dueDate: string;
}

interface TaskListProps {
  tasks: TaskItem[];
  onDelete: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = (props) => {
  const list = props.tasks.map((task, idx) => (
    <div key={idx} className="task-item">
      <Task
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
      />
      <div className="border border-slate-200 rounded-xl p-4">
        <button
          className="deleteTaskButton"
          onClick={() => props.onDelete(idx)}
        >
          Delete
        </button>
      </div>
    </div>
  ));
  return <>{list}</>;
};

export default TaskList;
