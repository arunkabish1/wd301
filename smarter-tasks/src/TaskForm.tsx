import React, { useState } from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      addTask({ name: taskName });
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="flex-1 border border-slate-300 rounded-md p-2"
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="ml-2 bg-slate-500 text-white rounded-md p-2"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
