import React, { useEffect, useState } from 'react';
 // Import the CSS file

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);

  const githubUsername = 'Taha7865'; // Replace with your GitHub username

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch(`https://api.github.com/users/${githubUsername}/repos`);
      const projects = await response.json();
      setProjects(projects);
    }

    fetchProjects();
  }, []);

  const ProjectCard = ({ project }) => (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 shadow-md rounded-md p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-gradient text-2xl font-semibold mb-4">{project.name}</h2>
      <p className="mb-4">{project.description || 'No description provided.'}</p>
      <a href={project.html_url} className="bg-blue-700 text-white px-4 py-2 rounded-md" target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default GitHubProjects;
