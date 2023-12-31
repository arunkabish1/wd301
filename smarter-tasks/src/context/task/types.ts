export interface TaskListState {
  isError: boolean;
  errorMessage: string;
  isLoading: boolean;
}

export enum TaskListAvailableAction {
  FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE",

  DELETE_TASKS_REQUEST = "DELETE_TASKS_REQUEST",
  DELETE_TASKS_SUCCESS = "DELETE_TASKS_SUCCESS",
  DELETE_TASKS_FAILURE = "DELETE_TASKS_FAILURE",

  CREATE_TASK_REQUEST = "CREATE_TASK_REQUEST",
  CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS",
  CREATE_TASK_FAILURE = "CREATE_TASK_FAILURE",

  UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST",
  UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS",
  UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE",

  REORDER_TASKS = "REORDER_TASKS",
}

export type TaskActions =
  | { type: TaskListAvailableAction.REORDER_TASKS; payload: ProjectData }
  | { type: TaskListAvailableAction.FETCH_TASKS_REQUEST }
  | { type: TaskListAvailableAction.FETCH_TASKS_SUCCESS; payload: ProjectData }
  | { type: TaskListAvailableAction.FETCH_TASKS_FAILURE; payload: string }
  | { type: TaskListAvailableAction.DELETE_TASKS_REQUEST }
  | { type: TaskListAvailableAction.DELETE_TASKS_SUCCESS }
  | { type: TaskListAvailableAction.DELETE_TASKS_FAILURE; payload: string }
  | { type: TaskListAvailableAction.CREATE_TASK_REQUEST }
  | { type: TaskListAvailableAction.CREATE_TASK_SUCCESS }
  | { type: TaskListAvailableAction.CREATE_TASK_FAILURE; payload: string }
  | { type: TaskListAvailableAction.UPDATE_TASK_REQUEST }
  | { type: TaskListAvailableAction.UPDATE_TASK_SUCCESS }
  | { type: TaskListAvailableAction.UPDATE_TASK_FAILURE; payload: string };

export type TasksDispatch = React.Dispatch<TaskActions>;
export type AvailableColumns = "pending" | "in_progress" | "done";
export type ColumnData = {
  id: string;
  title: string;
  taskIDs: string[];
};
export type Columns = {
  [k in AvailableColumns]: ColumnData;
};
export type TaskDetails = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  state: AvailableColumns;
  assignee?: number;
  assignedUserName?: string;
};
export type TaskDetailsPayload = Omit<TaskDetails, "id" | "assignee" | "state">;
export type Tasks = {
  [k: string]: TaskDetails;
};
export type ProjectData = {
  tasks: Tasks;
  columns: Columns;
  columnOrder: AvailableColumns[];
};
export interface TaskListState {
  projectData: ProjectData;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
