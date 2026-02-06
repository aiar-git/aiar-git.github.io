import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative bg-stone-100 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-stone-900 text-white hover:bg-stone-700 transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="w-full bg-stone-200">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{project.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
            <div>
              <span className="block text-stone-900 font-bold mb-2 uppercase text-xs tracking-wide">Hosted by</span>
              <p className="text-stone-600">{project.hostedBy}</p>
            </div>
            
            <div>
              <span className="block text-stone-900 font-bold mb-2 uppercase text-xs tracking-wide">Year</span>
              <p className="text-stone-600">{project.year}</p>
            </div>
            
            {project.keywords && (
              <div>
                <span className="block text-stone-900 font-bold mb-2 uppercase text-xs tracking-wide">Keywords</span>
                <p className="text-stone-600 text-xs uppercase font-mono">{project.keywords.join(', ')}</p>
              </div>
            )}
          </div>

          <div className="mb-8">
            <span className="block text-stone-900 font-bold mb-3 uppercase text-xs tracking-wide">Description</span>
            <p className="text-stone-700 leading-relaxed">{project.description}</p>
          </div>

          {project.videoUrl && project.videoButtonText && (
            <a 
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-sm font-medium uppercase tracking-wide hover:bg-stone-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
              {project.videoButtonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
