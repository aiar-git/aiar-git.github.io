import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { PROJECTS, MEMBERS } from './constants';

const App: React.FC = () => {
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

        {/* Selected Work Section */}
        <section id="work" className="px-6 md:px-12 py-24">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Selected Projects</h2>
            <div className="hidden md:block text-xs font-mono uppercase text-stone-500 text-right">
                Industry<br/>
                Art<br/>
                Technology<br/>
                Health<br/>
                Sound
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Capabilities / List Section */}
        <section className="px-6 md:px-12 py-24 border-t border-stone-200 bg-white">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter max-w-sm">
                    A Holistic Approach
                </h2>
                
                <div className="flex justify-end">
                    <div className="grid grid-cols-2 gap-12 text-sm md:text-base">
                        <div>
                             <h3 className="font-bold mb-4">Capabilities</h3>
                             <ul className="space-y-1 text-stone-600">
                                 <li>Creative Direction</li>
                                 <li>Strategy</li>
                                 <li>Visual Identity</li>
                                 <li>Brain-Computer Interface</li>
                                 <li>Motion Design</li>
                                 <li>Digital Design</li>
                             </ul>
                        </div>
                        <div>
                             <h3 className="font-bold mb-4">Research</h3>
                             <ul className="space-y-1 text-stone-600">
                                 <li>EEG Data Analysis</li>
                                 <li>Real-time Processing</li>
                                 <li>Generative Audio</li>
                                 <li>Haptic Feedback</li>
                                 <li>Neural Networks</li>
                             </ul>
                        </div>
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
    </div>
  );
};

export default App;