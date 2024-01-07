import { useEffect } from "react";
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from "../../context/projects/actions";
import { Outlet } from "react-router-dom";
import { useUsersDispatch } from "../../context/members/context";
import { fetchUsers } from "../../context/members/actions";

const ProjectContainer = () => {
  const projectDispatch = useProjectsDispatch();
  const memberDispatch = useUsersDispatch();
  useEffect(() => {
    fetchProjects(projectDispatch);
    fetchUsers(memberDispatch);
  }, [projectDispatch, memberDispatch]);
  return <Outlet />;
};

export default ProjectContainer;