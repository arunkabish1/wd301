// import React from "react";
import { useProjectsState } from "../../context/projects/context";
import { useTasksState } from "../../context/task/context";
import { useParams } from "react-router-dom";
import TaskDetails from "./TaskDetails";

const TaskDetailsContainer = () => {
  let { taskID } = useParams();
  const projectState = useProjectsState();
  const taskListState = useTasksState();
  const isFetchingTasks = taskListState.isLoading;
  const selectedTask = taskListState.projectData.tasks?.[taskID || ""];
  if (isFetchingTasks || !projectState || projectState?.isLoading) {
 return <>Loading..!</>;
  }
  if (!selectedTask) {
    return <>No tasks found for this ID</>;
  }
  return <TaskDetails />;
};
export default TaskDetailsContainer;