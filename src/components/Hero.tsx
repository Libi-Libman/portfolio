import React from 'react';
import cartoonLibi from '../assets/cartoon-libi.png';


const Hero: React.FC = () => (
  <section
    id="hero"
    className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24"
  >
     <img className='max-w-xs' src={cartoonLibi} alt="a cartoon image of Libi" />
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center">
      Hi, I'm <span className="text-blue-600">Libi</span>
    </h1>
    <p className="text-lg md:text-2xl text-gray-700 mb-8 text-center max-w-2xl">
      a web developer passionate about writing clean, accessible code that puts users first. I believe the web should be inclusive, intuitive, and open to everyone.
    </p>
    <a
      href="#projects"
      className="px-8 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors font-semibold"
    >
      View My Work
    </a>
  </section>
);

export default Hero;