import React, { useState } from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [task, setTask] = useState<TaskItem>({
    title: "",
    dueDate: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.title.trim() !== "") {
      addTask(task);
      setTask({ title: "", dueDate: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex">
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="flex-1 border border-blue-300 rounded-md p-2"
          placeholder="Any new task..."
        />  
        <button
          type="submit"
          id="addTaskButton"
          className="ml-2 bg-green-500 hover:bg-green-600 hover:text-500 text-white rounded-md p-2"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
