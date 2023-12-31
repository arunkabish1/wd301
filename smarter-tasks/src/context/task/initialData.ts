import { ProjectData } from "./types";

const initialData: ProjectData = {
  columns: {
    pending: {
      id: "pending",
      title: "Pending",
      taskIDs: ["2"],
    },
    in_progress: {
      id: "in_progress",
      title: "In progress",
      taskIDs: ["1"],
    },
    done: {
      id: "done",
      title: "Done",
      taskIDs: [],
    },
  },
  tasks: {
    "1": {
      id: 1,
      title: "Sample Task",
      description: "Sample description about the task which is to be completed in 3 days",
      dueDate: "",
      state: "in_progress",
      assignee: undefined,
      assignedUserName: undefined
    },
    "2": {
      id: 2,
      title: "Another Sample Task",
      description: "Sample description about the task which is to be completed in 4 days",
      dueDate: "",
      state: "pending",
      assignee: undefined,
      assignedUserName: undefined
    },
    "3": {
      id: 3,
      title: "Yet Another Sample Task",
      description: "Sample description about the task which is to be completed in 5 days",
      dueDate: "",
      state: "done",
      assignee: undefined,
      assignedUserName: undefined
    }
  },
  columnOrder: ["pending", "in_progress", "done"],
};

export default initialData;