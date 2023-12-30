import ProjectList from "./ProjectList";
import NewProject from "./NewProject";

const Projects = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 p-4 mb-4 rounded-md">
        <h2 className="text-2xl font-medium tracking-tight text-white">Projects</h2>
        <NewProject />
      </div>
      <ProjectList />
    </>
  );
};

export default Projects;
