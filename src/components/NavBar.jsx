import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react'; 
import logo from '../assets/logo1.png';   

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false); 
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const projectsDropdownRef = useRef(null); // NEW Ref

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTeamDropdownOpen(false);
      }
       if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target)) {
        setProjectsDropdownOpen(false);
      }
          // Close Projects Dropdown if clicked outside
      
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Helper to close menu when a link is clicked
  const closeMenus = () => {
    setMobileMenuOpen(false);
    setTeamDropdownOpen(false);
    
  };

  // Helper class for active links to keep code clean
  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `flex items-center h-full px-1 transition-colors ${isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`;
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION */}
        <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Club Logo" 
            className="h-10 w-auto object-contain" 
          />
          <span>Design & Innovation Club</span>
        </Link>

        {/* DESKTOP MENU - Fixed Alignment */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 items-center h-10">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          {/* --- NEW: PROJECTS DROPDOWN --- */}
                 {/* PROJECTS DROPDOWN */}
          <div className="relative h-full flex items-center" ref={projectsDropdownRef}>
            <button 
              onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
              className={`flex items-center gap-1 h-full transition-colors ${location.pathname.includes('/projects') ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            >
              Projects <ChevronDown size={16} className={`transform transition-transform duration-200 ${projectsDropdownOpen ? 'rotate-180' : ''} mt-[1px]`} />
            </button>
            
            {projectsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in-up z-50">
                <Link to="/projects" className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm" onClick={closeMenus}>All Projects</Link>
                <div className="border-t border-gray-50 mx-2"></div>
                <Link to="/projects/active" className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm" onClick={closeMenus}>Active Projects</Link>
                <div className="border-t border-gray-50 mx-2"></div>
                <Link to="/projects/3d-models" className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm" onClick={closeMenus}>3D Printed Models</Link>
              </div>
            )}
          </div>
          {/* TEAM DROPDOWN */}
          <div className="relative h-full flex items-center" ref={dropdownRef}>
            <button 
              onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
              className={`flex items-center gap-1 h-full transition-colors ${location.pathname.includes('/team') ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
            >
              Our Team <ChevronDown size={16} className={`transform transition-transform duration-200 ${teamDropdownOpen ? 'rotate-180' : ''} mt-[1px]`} />
            </button>
            
            {/* The Dropdown Menu Box */}
            {teamDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in-up z-50">
                <Link 
                  to="/team/professor" 
                  className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm"
                  onClick={closeMenus}
                >
                  Professor Incharge
                </Link>
                <div className="border-t border-gray-50 mx-2"></div>
                <Link 
                  to="/team/core" 
                  className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm"
                  onClick={closeMenus}
                >
                  Executive Committee
                </Link>
                <div className="border-t border-gray-50 mx-2"></div>
                <Link 
                  to="/team/junior" 
                  className="block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm"
                  onClick={closeMenus}
                >
                  Associate Members
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className={getLinkClass('/contact')}>Contact us</Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU (Expanded) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-lg animate-slide-up h-screen">
          <div className="flex flex-col p-6 space-y-6 text-lg">
            <Link to="/" onClick={closeMenus} className="text-gray-600 font-medium hover:text-blue-600">Home</Link>
              <div className="space-y-4 bg-gray-50 p-4 rounded-xl">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Projects</p>
           <Link to="/projects" onClick={closeMenus} className="block text-gray-700 hover:text-blue-600 pl-2 border-l-2 border-gray-300 hover:border-blue-600">All Projects</Link>
              <Link to="/projects/active" onClick={closeMenus} className="block text-gray-700 hover:text-blue-600 pl-2 border-l-2 border-gray-300 hover:border-blue-600">Active Projects</Link>
              <Link to="/projects/3d-models" onClick={closeMenus} className="block text-gray-700 hover:text-blue-600 pl-2 border-l-2 border-gray-300 hover:border-blue-600">3D Printed Models</Link>
            
            </div>
            {/* Mobile Team Links */}
            <div className="space-y-4 bg-gray-50 p-4 rounded-xl">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Team</p>
              <Link to="/team/professor" onClick={closeMenus} className="block text-gray-700 hover:text-blue-600 pl-2 border-l-2 border-gray-300 hover:border-blue-600">Professor Incharge</Link>
              <Link to="/team/core" onClick={closeMenus} className="block text-gray-700 hover:text-blue-600 pl-2 border-l-2 border-gray-300 hover:border-blue-600">Core Members</Link>
              <Link to="/team/junior" onClick={closeMenus} className="block text-gray-700 hover:text-blue-600 pl-2 border-l-2 border-gray-300 hover:border-blue-600">Associate Members</Link>
            </div>

            <Link to="/contact" onClick={closeMenus} className="text-gray-600 font-medium hover:text-blue-600">Contact us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;