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
    <div className="grid gap-1 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 mt-1">
      <ProjectListItems />
    </div>
  );
};

export default ProjectList;
