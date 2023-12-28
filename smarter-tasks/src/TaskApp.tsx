import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { TaskItem } from "./types";

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp: React.FC = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );

  const addTask = (task: TaskItem) => {
    setTaskAppState((state) => ({ tasks: [...state.tasks, task] }));
  };

  const deleteTask = (index: number) => {
    setTaskAppState((state) => {
      const updatedTasks = [...state.tasks];
      updatedTasks.splice(index, 1);
      return { tasks: updatedTasks };
    });
  };

  return (
    <div className="py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-black-700">Smarter Tasks</h1>
      <div className="grid grid-cols gap-4">
        <div className="border border-blue-00 rounded-xl p-4">
          <h1 className="text-green-500 text-xl font-bold text-center mb-2">
            Create a new task
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
