import React from "react";
import { Link } from "react-router-dom";
import "./TaskCard.css";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  deleteTask: (task: string) => void;
}

const Task = (props: TaskProps) => {
  console.log(props);
  return (
    <div className="TaskItem">
      <div>
        <Link to={`/tasks/${props.id}`}>
          <h3 className="text-base font-bold my-1">{props.title}</h3>
        </Link>

        <p>{props.dueDate}</p>
        <p>Description: {props.description}</p>
      </div>

      <button
        className="deleteTaskButton border-3 p-1 m-1 bg-red-300 border rounded hover:bg-red-800"
        onClick={() => props.deleteTask(props.title)}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
