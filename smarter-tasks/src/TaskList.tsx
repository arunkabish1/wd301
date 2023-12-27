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
        <li key={index} className="flex justify-between items-center border-b border-blue-300 py-2">
          <span className="font-bold px-2">{task.title}</span>
          <button onClick={() => onDelete(index)} className="bg-red-500 rounded text-white hover:bg-red-300 hover:text-black border border-black-500 px-2 deleteTaskButton">
            Delete Task
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
