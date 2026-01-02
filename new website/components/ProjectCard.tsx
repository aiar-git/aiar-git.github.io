import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`flex flex-col gap-4 group cursor-pointer mb-16 ${project.size === 'large' ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}>
      <div className="relative overflow-hidden w-full bg-stone-200 aspect-[4/3] md:aspect-auto">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {project.videoUrl && project.videoButtonText && (
          <a 
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20
                       flex items-center gap-2
                       px-5 py-2.5 rounded-full
                       bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
                       text-white text-xs md:text-sm font-medium tracking-wide uppercase
                       hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
            {project.videoButtonText}
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-4 text-xs md:text-sm pt-2 border-t border-stone-300">
        <div className="md:col-span-3 font-bold tracking-tight text-lg md:text-base">{project.title}</div>
        
        <div className="md:col-span-2 text-stone-500">
            <span className="block text-stone-900 font-medium mb-1">Hosted by</span>
            {project.hostedBy}
        </div>
        
        <div className="md:col-span-5 text-stone-500">
             <span className="block text-stone-900 font-medium mb-1">Description</span>
             <p className="leading-relaxed">{project.description}</p>
        </div>
        
        <div className="md:col-span-2 text-stone-500 text-left md:text-right">
            <span className="block text-stone-900 font-medium mb-1">Year</span>
            {project.year}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;