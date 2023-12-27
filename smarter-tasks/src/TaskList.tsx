import React from "react";
import { TaskItem } from "./types";

interface TaskListProps {
  tasks: TaskItem[];
  onDelete: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  return (
    <ul className="mt-4">
      {tasks.map((task, index) => (
        <li key={index} className="flex justify-between items-center border-b border-slate-300 py-2">
          <span>{task.title}</span>
          <button onClick={() => onDelete(index)} className="text-slate-500">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;