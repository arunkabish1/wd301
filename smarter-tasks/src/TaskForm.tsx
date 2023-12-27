
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
    if (task.title.trim() !== "" && task.dueDate?.trim() !== "") {
      addTask(task);
      setTask({ title: "", dueDate: "", description: "" });
    }
    
  };

  const { title, dueDate, description } = task;

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex flex-col">
        <div className="flex">
          <input
            type="text"
            value={title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            className="flex-1 border border-blue-300 rounded-md p-2 required"
            placeholder="Task Title"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            className="ml-2 flex-1 border border-blue-300 rounded-md p-2 required"
            placeholder="Due Date"
          />
        </div>
        <div className="mt-2">
          <textarea
            value={description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className="w-full border border-blue-300 rounded-md p-2 required"
            placeholder="Task Description"
          />
        </div>
        <button
          type="submit"
          id="addTaskButton"
          className="mt-2 bg-green-500 hover:bg-green-600 hover:text-white text-white rounded-md p-2"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
