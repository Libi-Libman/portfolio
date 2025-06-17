import React from 'react';

const Navbar: React.FC = () => (
  <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">MyPortfolio</div>
      <ul className="flex space-x-8">
        <li>
          <a href="#hero" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
        </li>
        <li>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Projects</a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;