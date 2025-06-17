import React from 'react';

const Hero: React.FC = () => (
  <section
    id="hero"
    className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24"
  >
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center">
      Hi, I'm <span className="text-blue-600">Libi</span>
    </h1>
    <p className="text-lg md:text-2xl text-gray-700 mb-8 text-center max-w-2xl">
      I’m a passionate web developer specializing in building (and occasionally designing) exceptional digital experiences.
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