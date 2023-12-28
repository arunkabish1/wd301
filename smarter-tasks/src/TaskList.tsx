import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface TaskListProps {
  tasks: TaskItem[];
  deleteTask: (title: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <div className="mt-4 border-2 bg-peach border-gray-100">
      {tasks.length > 0 ? (
        <div className="flex flex-wrap">
          {tasks.map((task, idx) => (
            <div key={idx} className="m-2 hover:bg-gray-200">
              <Task
                title={task.title}
                dueDate={task.dueDate}
                description={task.description}
                deleteTask={deleteTask}
              />
            </div>
          ))}
        </div>
      ) : (
        <h6 className="text-black">No tasks available. Add a new task!</h6>
      )}
    </div>
  );
};

export default TaskList;
