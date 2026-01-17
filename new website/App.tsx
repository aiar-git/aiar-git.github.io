import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectGridCard from './components/ProjectGridCard';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import { FEATURED_PROJECTS, ALL_PROJECTS, MEMBERS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 selection:bg-stone-900 selection:text-white font-sans">
      <Header />
      
      <main>
        <Hero />

        {/* Introduction Section */}
        <section className="px-6 md:px-12 py-24 md:py-40 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-stone-200">
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12">
              An international and interdisciplinary team of artists and neuroscientists.
            </h2>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end">
             <p className="text-lg md:text-xl leading-relaxed text-stone-600">
               We integrate brain imaging tools such as electroencephalography (EEG) and Functional near-infrared spectroscopy (fNIRS) to measure and implement brain oscillations into various artistic practices.
             </p>
          </div>
        </section>

        {/* Upcoming Section */}
        <section className="px-6 md:px-12 py-24 border-b border-stone-200">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">Upcoming</h2>
          
          <div className="relative w-full bg-stone-200">
            <img 
              src="/assets/img/berlinale.jpg" 
              alt="Berlinale Film Festival 2026" 
              className="w-full h-auto object-contain"
            />
            <a 
              href="https://www.berlinale.de/en/2026/programme/202609855.html"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-6 px-5 py-2.5 bg-stone-900 text-white text-xs md:text-sm font-medium uppercase tracking-wide hover:bg-stone-700 transition-colors"
            >
              See Details
            </a>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="work" className="px-6 md:px-12 py-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* All Projects Section */}
        <section className="px-6 md:px-12 py-24 border-t border-stone-200">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">All Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {ALL_PROJECTS.map((project) => (
              <ProjectGridCard 
                key={project.id} 
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>

        {/* Collaborators Section */}
        <section className="px-6 md:px-12 py-24 border-t border-stone-200 bg-white">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-sm">
                    Organisations we worked with
                </h2>
                
                <div className="relative w-full min-h-[300px] md:min-h-[350px] md:col-span-3">
                  {/* Logos positioned quasi-randomly - more horizontal distribution */}
                  <div className="absolute top-[8%] left-[5%] w-32 md:w-40">
                    <img src="/assets/img/max planck.png" alt="Max Planck Institute" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                  
                  <div className="absolute top-[5%] right-[10%] w-28 md:w-36">
                    <img src="/assets/img/cambridge_colour.png" alt="University of Cambridge" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                  
                  <div className="absolute top-[15%] left-[45%] w-24 md:w-32">
                    <img src="/assets/img/amarte.png" alt="Amarte" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                  
                  <div className="absolute top-[48%] left-[35%] w-16 md:w-20">
                    <img src="/assets/img/NIRx_logo.webp" alt="NIRx" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                  
                  <div className="absolute top-[45%] right-[5%] w-36 md:w-44">
                    <img src="/assets/img/Universität_Leipzig_logo.png" alt="Universität Leipzig" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                  
                  <div className="absolute top-[70%] left-[8%] w-20 md:w-28">
                    <img src="/assets/img/stadt_leipzig_logo.svg" alt="Stadt Leipzig" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                  
                  <div className="absolute top-[72%] right-[25%] w-20 md:w-24">
                    <img src="/assets/img/Yonsei_Logo.png" alt="Yonsei University" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                  
                  <div className="absolute top-[42%] left-[8%] w-20 md:w-24">
                    <img src="/assets/img/dog_NP3_blackglow.png" alt="NP3" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                  
                  <div className="absolute top-[68%] right-[55%] w-24 md:w-32">
                    <img src="/assets/img/gemennte.png" alt="Gemennte" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                  
                  <div className="absolute top-[10%] left-[25%] w-20 md:w-24">
                    <img src="/assets/img/berghain.png" alt="Berghain" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                  
                  <div className="absolute top-[50%] right-[40%] w-16 md:w-20">
                    <img src="/assets/img/ccn logo.png" alt="CCN" className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                  </div>
                </div>
             </div>
        </section>

        {/* The Collective Section */}
        <section id="collective" className="px-6 md:px-12 py-24 bg-stone-100 border-t border-stone-200">
             <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-20">
                The Collective
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-12">
                 {MEMBERS.map((member, i) => (
                     <div key={i} className="flex flex-col gap-4">
                         <div className="aspect-square w-full overflow-hidden bg-stone-200">
                             <img 
                                src={member.imageUrl} 
                                alt={member.name} 
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                                style={{ objectPosition: member.name === 'Harin Lee' ? 'center' : 'center 60%' }}
                             />
                         </div>
                         <div>
                            <h4 className="font-bold text-lg tracking-tight mb-1">{member.name}</h4>
                            <p className="text-[10px] font-mono uppercase text-stone-500 mb-3 tracking-wide">{member.role}</p>
                            <p className="text-stone-700 leading-relaxed text-xs mb-3">
                                {member.bio}
                            </p>
                            {member.website && (
                              <a 
                                href={member.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xs text-stone-900 hover:text-stone-600 underline"
                              >
                                website
                              </a>
                            )}
                         </div>
                     </div>
                 ))}
             </div>
        </section>

      </main>

      <Footer />
      
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;