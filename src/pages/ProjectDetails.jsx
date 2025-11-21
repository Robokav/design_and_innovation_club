import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight, Video, FileText ,X} from 'lucide-react';
// CORRECTED PATH: ../data/projects
import { projects } from '../data/projects'; 

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  
  // CRITICAL: We must find the project data from the imported list
  const project = projects.find(p => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    const [isImageModalOpen, setIsImageModalOpen] = useState(false); // Modal State

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (project) setCurrentImageIndex(0); // Reset gallery index when project loads
  }, [project]);

  // Gallery Navigation Handlers
  const nextImage = (e) => {
    if(e) e.stopPropagation(); // Important: Stop click from closing modal
    if (project && project.gallery && project.gallery.length > 1) {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % project.gallery.length
        );
    }
  };

  const prevImage = (e) => {
    if(e) e.stopPropagation(); // Important: Stop click from closing modal
    if (project && project.gallery && project.gallery.length > 1) {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + project.gallery.length) % project.gallery.length
        );
    }
  };

  // Determine the display name for the back button
  const getBackName = (category) => {
    switch (category) {
        case 'active':
            return "Projects";
        case '3d-model':
            return "Projects";
        default:
            return "Projects";
    }
  };


  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 text-gray-600 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Project not found</h2>
        <p className="mb-8 text-gray-500">We couldn't find the project you're looking for.</p>
        <button onClick={() => navigate('/projects')} className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg">
          <ArrowLeft size={20} /> Back to Projects
        </button>
      </div>
    );
  }

  // Determine the category for the back button text
  const galleryImages = project.gallery || [project.image];
  const backCategory = project.category ? project.category : 'all'; 

  return (
    <section className="py-20 bg-white min-h-screen pt-32 animate-fade-in-up">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Back Button - USES navigate(-1) FOR TRUE HISTORY BACK */}
        <button 
          onClick={() => navigate(-1)} // Navigates back to the actual previous page in history
          className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8 font-medium group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to {getBackName(backCategory)}
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          
                     
          {/* Image Gallery Column */}
          <div className="space-y-4">
            <div 
                className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-96 lg:h-[500px] relative group bg-black/90 flex items-center justify-center cursor-zoom-in"
                onClick={() => setIsImageModalOpen(true)} 
            >
                {/* Main Image */}
                <img 
                    src={galleryImages[currentImageIndex]} 
                    alt={`${project.title} - Photo`} 
                    className="w-full h-full object-contain animate-fade-in"
                />

                <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Click to Expand
                </div>

                {/* Gallery Navigation Buttons */}
                {galleryImages.length > 1 && (
                    <>
                        <button 
                            onClick={(e) => prevImage(e)}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 backdrop-blur-md transition-colors z-20"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={(e) => nextImage(e)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 backdrop-blur-md transition-colors z-20"
                        >
                            <ChevronRight size={24} />
                        </button>
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                            {galleryImages.map((_, index) => (
                                <div 
                                    key={index}
                                    className={`w-2 h-2 rounded-full cursor-pointer transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        setCurrentImageIndex(index);
                                    }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            
            {/* Links/Buttons */}
            <div className="flex flex-wrap gap-4">
                
                {/* VIDEO LINK BUTTON */}
                {project.videoLink ? (
                    <a 
                        href={project.videoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium shadow-sm hover:shadow-md"
                    >
                        <Video size={20} /> Watch Video
                    </a>
                ) : (
                    <span 
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-500 rounded-xl font-medium shadow-sm cursor-default"
                    >
                        Video Not Available
                    </span>
                )}

                {/* DOCUMENTATION LINK BUTTON (NEW) */}
                {project.docsLink && (
                    <a 
                        href={project.docsLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
                    >
                        <FileText size={20} /> View Documentation
                    </a>
                )}
                

                {project.github && (
                <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium shadow-sm hover:shadow-md"
                >
                    <Github size={20} /> View Code
                </a>
                )}
            </div>
          </div>

          {/* Content Column */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{project.title}</h1>
            
            <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed">
              <p>{project.fullDescription || project.description}</p>
            </div>

            {project.features && (
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>

    
      {/* FULL SCREEN IMAGE MODAL */}
      {isImageModalOpen && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setIsImageModalOpen(false)}
        >
            <button 
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
            >
                <X size={32} />
            </button>

            <img 
                src={galleryImages[currentImageIndex]} 
                alt="Full Screen View" 
                className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
            />

            {galleryImages.length > 1 && (
                <>
                    <button 
                        onClick={(e) => prevImage(e)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full"
                    >
                        <ChevronLeft size={48} />
                    </button>
                    <button 
                        onClick={(e) => nextImage(e)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 text-white/70 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full"
                    >
                        <ChevronRight size={48} />
                    </button>
                </>
            )}
        </div>
      )}
      
    </section>
  );
};

export default ProjectDetails;