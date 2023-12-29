import { useProjectsDispatch } from "../../context/projects/context";
import ProjectListItems from "./ProjectListItems";
import React, { useEffect } from "react";
import { fetchProjects } from "../../context/projects/actions";

const ProjectList: React.FC = () => {
  const dispatchProjects = useProjectsDispatch();

  useEffect(() => {
    fetchProjects(dispatchProjects);
  }, []);
  return (
    <div className="grid gap-2 grid-cols-4 mt-3">
      <ProjectListItems />
    </div>
  );
};
export default ProjectList;