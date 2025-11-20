import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';
import img from '../assets/hogwarts.jpg'; 

// --- DATA INLINED ---
import { projects } from '../data/projects'; 

// Project Card Component
const ProjectCard = ({ project }) => (
  
  <Link 
    to={`/projects/${project.id}`} 
    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full cursor-pointer hover:-translate-y-1 block"
  >
    {/* Image Section */}
    <div className="relative h-48 overflow-hidden bg-gray-100">
      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10"></div>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      
      {/* Floating Tags */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
        {project.tags.slice(0, 2).map((tag, index) => ( 
          <span key={index} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-blue-600 rounded-full shadow-sm">
            {tag}
          </span>
        ))}
        {project.tags.length > 2 && (
           <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-500 rounded-full shadow-sm">+{project.tags.length - 2}</span>
        )}
      </div>
    </div>

    {/* Content Section */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
        {project.description}
      </p>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-4">
        <span className="flex items-center gap-1 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
          View Project Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  </Link>
);

const Projects = () => {
    // CRITICAL FIX: Scrolls the page to the top (0, 0) every time the component loads.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty array ensures it runs only on mount/refresh

  return (
    <section className="py-20 bg-gray-50 min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into what we’re building right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {projects.map((project) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;