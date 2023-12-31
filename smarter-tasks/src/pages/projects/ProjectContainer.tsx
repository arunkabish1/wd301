import { useEffect } from "react";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";
import { Outlet } from "react-router-dom";

const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch();
  useEffect(() => {
    fetchProjects(projectDispatch);
  }, [projectDispatch]);
  return <Outlet />;
};

export default ProjectContainer;