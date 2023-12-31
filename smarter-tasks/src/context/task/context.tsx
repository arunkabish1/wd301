import { taskReducer, initialState } from "./reducer";
import { TaskListState, TasksDispatch } from "./types";
import React, { createContext, useContext, useReducer } from "react";
const TasksStateContext = createContext<TaskListState>(initialState);
const TasksDispatchContext = createContext<TasksDispatch>(() => {});
export const TasksProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TasksStateContext.Provider value={state}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksStateContext.Provider>
  );
};
export const useTasksDispatch = () => useContext(TasksDispatchContext);
export const useTasksState = () => useContext(TasksStateContext);