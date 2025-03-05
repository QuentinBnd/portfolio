import React from 'react';
import ProjectCard from './ProjectCard';
import { projets } from '../Projet';

const ProjectList = ({ language }) => {
  return (
    <div className="h-screen overflow-y-auto pt-16 pb-32 px-4">
      {projets.map((project) => (
        <ProjectCard key={project.id} project={project} language={language} />
      ))}
    </div>
  );
};

export default ProjectList;