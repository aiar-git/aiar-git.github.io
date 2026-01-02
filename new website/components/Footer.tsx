import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-100 px-6 md:px-12 pb-12 pt-32 border-t border-stone-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        
        <div className="max-w-md">
          <h3 className="text-2xl font-bold tracking-tight mb-6">Get in touch</h3>
          <a href="mailto:aiar.infos@gmail.com" className="text-2xl md:text-4xl tracking-tight block hover:text-stone-500 transition-colors">
            aiar.infos@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
                <h4 className="font-bold mb-4">Social</h4>
                <ul className="space-y-2 text-stone-600">
                    <li>
                      <a 
                        href="https://www.instagram.com/aiar_collective/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-black cursor-pointer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.youtube.com/channel/UCfAJIZfzUEPhC8adWVoLPog/videos" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-black cursor-pointer"
                      >
                        YouTube
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://github.com/aiar-git" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-black cursor-pointer"
                      >
                        GitHub
                      </a>
                    </li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Location</h4>
                <p className="text-stone-600">
                    Leipzig, Germany
                </p>
            </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <h1 className="text-[20vw] leading-none font-bold tracking-tighter text-center md:text-left">
          aiar
        </h1>
      </div>
      
      <div className="flex justify-between items-end mt-4 text-xs font-mono uppercase text-stone-500">
        <div>©2023 aiar collective</div>
      </div>
    </footer>
  );
};

export default Footer;