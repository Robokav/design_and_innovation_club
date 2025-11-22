import React, { useEffect } from 'react'; // <-- Ensure useEffect is imported
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb,Wrench,Trophy,PenTool,Printer,Scan,PencilRuler,Microscope } from 'lucide-react'; 

// --- NOTE FOR VS CODE USERS ---
// 1. Place your 'logo.png' file inside the 'src/assets' folder.
// 2. Uncomment the line below and delete the placeholder line.
import logo from '../assets/logo.png'; // <--- Ensure this points to your real logo

// --- PLACEHOLDER FOR PREVIEW (REMOVE THIS LINE IN VS CODE) ---
// const logo = "https://placehold.co/200x200/a5f3fc/082f49?text=D&I"; 

const Home = () => {
    // CRITICAL FIX: Scrolls the page to the top (0, 0) every time the component loads.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty array ensures it runs only on mount/refresh
  return (
    <>
      {/* HERO SECTION - Darker BG, Strobe Logo, Blending Pulse */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        
        {/* Animated Living Background (Darker Blues) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 bg-[length:400%_400%] animate-gradient-x -z-20 opacity-90"></div>
        
        {/* Optional Pattern Overlay for Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] -z-10"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto">
          
          {/* Logo Container with Ripple Pulse */}
          <div className="mb-8 inline-block relative  animate-fade-in-up">
            {/* Blending Pulse Effect */}
                 
            
            {/* Floating and Strobe-waving Logo */}
            <img 
              src={logo} 
              alt="club Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain animate-float" 
            
            />
          </div>

          {/* Animated Text */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white animate-fade-in-up whitespace-nowrap text-center mx-auto">
            Imagine • <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Innovate • Implement</span>
          </h1>

                    
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The newest design hotspot at VNIT—where imagination sparks innovation, and innovation leads to implementation.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              View Projects <ArrowRight size={20} />
            </Link>
            
          </div>
        </div>
      </section>

      {/* INFO SECTION (Remains White) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                What is this club about?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                This club is all about unleashing student creativity — turning concepts into creations, challenges into opportunities, and engineering knowledge into future-ready designs.
                

              </p>
         {/* VIDEO CONTAINER (Replaces Filler Image) */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-video bg-black group relative">
                {/* Replace 'src' below with your actual video URL (YouTube Embed or MP4) */}
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=VideoPlaceholder" 
                  title="Club Intro Video" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
                
                {/* Optional Overlay (removed on hover/play if needed, or keep simple) */}
                {/* <div className="absolute inset-0 bg-black/20 pointer-events-none"></div> */}
              </div>
              <p className="text-sm text-gray-500 italic text-center">Watch our introduction video.</p>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
                What we do
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                    <PencilRuler size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Design & Development</h4>
                    <p className="text-gray-600 mt-1">Creating innovative machine parts, engineering systems, and functional prototypes that solve real-world problems.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <div className="bg-cyan-100 p-3 rounded-full text-cyan-600 shrink-0">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Characterization Equipment</h4>
                    <p className="text-gray-600 mt-1">Designing and fabricating advanced tools and instruments used for material testing, analysis, and system characterization.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 shrink-0">
                    <Printer size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">3D Printing & Prototyping</h4>
                    <p className="text-gray-600 mt-1">Bringing your ideas to life by turning simple CAD designs into real, tangible models—making it easy for anyone to visualize, test, and refine their creations.</p>
                  </div>
                </li>

                
              
                
                
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;