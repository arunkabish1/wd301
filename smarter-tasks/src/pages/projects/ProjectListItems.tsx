import { useProjectsState } from "../../context/projects/context";
import { Link } from "react-router-dom";

export default function ProjectListItems() {
  let state: any = useProjectsState();
  const { isError, errorMessage, projects, isLoading } = state;

  if (projects.length === 0 && isLoading) {
    return <span>Loading</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {projects.map((project: any) => (
        <Link
        key={project.id}
        to={`${project.id}`}
          className="block p-6 bg-blue-100 border border-gray-300 rounded-lg shadow-md hover:bg-blue-200 dark:bg-gray-800 dark:border-blue-700 dark:hover:bg-blue-700 transition duration-300"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
          </Link>
      ))}
    </>
  );
}
