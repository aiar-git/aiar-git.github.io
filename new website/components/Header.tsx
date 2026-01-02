import React from 'react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-start px-6 py-6 md:px-12 mix-blend-difference text-stone-100 pointer-events-none">
      <div className="font-bold text-2xl tracking-tighter pointer-events-auto cursor-pointer">
        aiar
      </div>
      
      <nav className="flex gap-8 md:gap-12 pointer-events-auto">
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label} 
            href={item.href} 
            className="text-sm font-medium hover:opacity-50 transition-opacity uppercase tracking-wide"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;