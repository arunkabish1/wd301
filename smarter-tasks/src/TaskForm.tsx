import React, { useState } from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm: React.FC<TaskFormProps> = (props) => {
  const [formState, setFormState] = useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formState.title.trim() === "" || formState.dueDate.trim() === "") {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", description: "", dueDate: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="todoTitle" className="block text-sm font-medium text-gray-600">
            Task Title
          </label>
          <input
            type="text"
            id="todoTitle"
            name="title"
            value={formState.title}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter Task Title"
          />
        </div>
    
        <div>
          <label htmlFor="todoDescription" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <input
            type="text"
            id="todoDescription"
            name="description"
            value={formState.description}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter Task Description"
          />
        </div>
        
        <div>
          <label htmlFor="todoDueDate" className="block text-sm font-medium text-gray-600">
            Due Date
          </label>
          <input
            type="date"
            id="todoDueDate"
            name="dueDate"
            value={formState.dueDate}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            id="addTaskButton"
            className="mt-8 text-center w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            Create Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
