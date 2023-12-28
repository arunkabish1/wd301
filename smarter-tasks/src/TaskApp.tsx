import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

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
  const [indexCounter, setIndexCounter] = useLocalStorage<number>("taskIndexCounter", 1);
  const addTask = (task: TaskItem,) => {
    const newTask = { ...task, id: indexCounter.toString() };
    setTaskAppState({ tasks: [...taskAppState.tasks, newTask] });
    setIndexCounter(indexCounter + 1);
  };
  const deleteTask = (title: string) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter((task) => task.title !== title),
    });
  };
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <h1> <strong>{taskAppState.tasks.length > 0 ? "Pending Tasks" : ""}</strong></h1>
      <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskApp;
