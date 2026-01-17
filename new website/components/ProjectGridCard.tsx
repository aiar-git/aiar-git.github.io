import React from 'react';
import { Project } from '../types';

interface ProjectGridCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectGridCard: React.FC<ProjectGridCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="flex flex-col gap-3 group cursor-pointer"
    >
      <div className="relative overflow-hidden w-full bg-stone-200 aspect-[4/3]">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-bold tracking-tight mb-2">{project.title}</h3>
        {project.keywords && (
          <p className="text-[10px] font-mono uppercase text-stone-500 tracking-wide">
            {project.keywords.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectGridCard;
