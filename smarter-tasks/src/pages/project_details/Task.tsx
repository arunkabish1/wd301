import React, { forwardRef } from "react";
import "./TaskCard.css";
import { Link, useParams } from "react-router-dom";
import { useTasksDispatch } from "../../context/task/context";
import { deleteTask } from "../../context/task/actions";
import { Draggable } from "react-beautiful-dnd";
import { TaskDetails } from "../../context/task/types";

const Task = forwardRef<HTMLDivElement, React.PropsWithChildren<{ task: TaskDetails }>>(
  (props, ref) => {
    const taskDispatch = useTasksDispatch();
    const { projectID } = useParams();
    const { task } = props;

    return (
      <div ref={ref} {...props} className="m-2 flex">
        <Link
          className="TaskItem w-full shadow-md border border-slate-100 bg-white"
          to={`tasks/${task.id}`}
        >
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div>
              <h2 className="text-base font-bold my-1">{task.title}</h2>
              <p className="text-sm text-slate-500">
                {new Date(task.dueDate).toDateString()}
              </p>
              <p className="text-sm text-slate-500">
                Description: {task.description}
              </p>
              <p className="text-sm text-slate-500">
                Assignee: {task.assignedUserName ?? "-"}
              </p>
            </div>
            <button
              className="deleteTaskButton cursor-pointer h-6 w-6 rounded-full my-5 mr-5 flex items-center justify-center"
              onClick={(event) => {
                event.preventDefault();
                deleteTask(taskDispatch, projectID ?? "", task);
              }}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-red-500 hover:text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </Link>
      </div>
    );
  }
);

const Container = (
  props: React.PropsWithChildren<{
    task: TaskDetails;
    index: number;
  }>
) => {
  return (
    <Draggable index={props.index} draggableId={`${props.task.id}`}>
      {(provided) => (
        <Task
          task={props.task}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
      )}
    </Draggable>
  );
};

export default Container;
