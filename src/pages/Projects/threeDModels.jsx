import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// CORRECTED PATH: Jumps up two directories (out of pages/projects/) to find data/projects.js
import { projects } from '../../data/projects'; 

// Project Card Component
const ProjectCard = ({ project }) => (
  <Link 
    to={`/projects/${project.id}`} 
    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full cursor-pointer hover:-translate-y-1 block"
  >
    <div className="relative h-48 overflow-hidden bg-gray-100">
      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
        {project.tags.map((tag, index) => ( 
          <span key={index} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-blue-600 rounded-full shadow-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{project.description}</p>
      <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-4">
        <span className="flex items-center gap-1 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
          View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  </Link>
);

const ThreeDModels = () => {
  // CRITICAL FIX: Scrolls the page to the top (0, 0) every time the component loads.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty array ensures it runs only on mount/refresh

  
  // FILTERING THE DATA BASED ON CATEGORY
  const threeDProjectsList = projects.filter(p => p.category === '3d-model');

  return (
    <section className="py-20 bg-gray-50 min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">3D Printed Models</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Where digital designs come to live.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {threeDProjectsList.map((project) => (<ProjectCard key={project.id} project={project} />))}
        </div>
      </div>
    </section>
  );
};

export default ThreeDModels;