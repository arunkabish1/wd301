import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../config/constants';
interface Project {
  id: number;
  name: string;
}
const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    // Fetch the list of projects here
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    const token = localStorage.getItem("authToken") ?? "";
    
    try {
      setIsLoading(true);
      const response = await fetch(`${API_ENDPOINT}/projects`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
      });
      const data = await response.json();
      setProjects(data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching projects:', error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h2>Project List</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ProjectList;