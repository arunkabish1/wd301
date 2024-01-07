import React, { Suspense } from "react";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));
import ErrorBoundary from "../../components/ErrorBoundary";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import { CommentProvider } from "../../context/comment/context";

const ProjectDetailsIndex: React.FC = () => {
    return (
      <TasksProvider>
        <CommentProvider>
        <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
        <ProjectDetails />
        </Suspense>
      </ErrorBoundary>
        <Outlet />
        </CommentProvider>
      </TasksProvider>
    );
  };

export default ProjectDetailsIndex;
