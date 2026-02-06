import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Intercept wheel events to prevent the Spline viewer from hijacking the scroll.
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    container.addEventListener('wheel', handleWheel, { capture: true });

    // Attempt to remove "Built with Spline" watermark by injecting styles into Shadow DOM
    const removeLogo = () => {
      const viewer = container.querySelector('spline-viewer');
      if (viewer && viewer.shadowRoot) {
        // Prevent duplicate injection
        if (viewer.shadowRoot.querySelector('#hide-logo-style')) return;
        
        const style = document.createElement('style');
        style.id = 'hide-logo-style';
        style.textContent = '#logo { display: none !important; }';
        viewer.shadowRoot.appendChild(style);
      }
    };

    // Try immediately and retry after a delay to ensure the web component is hydrated
    removeLogo();
    const timer = setTimeout(removeLogo, 1000);

    return () => {
      container.removeEventListener('wheel', handleWheel, { capture: true });
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full h-[90vh] bg-stone-100 flex flex-col justify-center items-center overflow-hidden">
      {/* 3D Model Container - z-0 to be background */}
      <div ref={containerRef} className="absolute inset-0 z-0">
         {/* @ts-ignore */}
         <spline-viewer url="https://prod.spline.design/ZJ1zeDkoUhQevTHk/scene.splinecode"></spline-viewer>
      </div>

      {/* Overlay Text - z-10 on top */}
      <div className="absolute z-10 bottom-12 left-6 md:left-12 right-6 md:right-12 pointer-events-none">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] max-w-5xl">
          <span className="text-[#D1001C]">aiar</span>
          <span className="text-stone-100 mix-blend-difference"> collective</span>
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.9] text-stone-100 max-w-5xl mix-blend-difference">
          bridging neuroscience and art
        </h1>
      </div>
    </section>
  );
};

export default Hero;