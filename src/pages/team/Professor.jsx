import React, { useState,useEffect } from 'react';
import { Linkedin, Mail, User, ChevronDown, ChevronUp } from 'lucide-react';

// --- OPTION 2: LOCAL IMAGE IMPORT ---
// Uncomment this if you have the local file
import prof1 from '../../assets/reddysir.jpg'; 
import prof2 from '../../assets/ankitsir.png'; 

// --- PLACEHOLDER FOR PREVIEW ---


// 1. TeamMember Component: Manages its OWN state
const TeamMember = ({ member,onClick }) => {
  // This state is created FRESH for every single card.
  // Clicking one will NOT affect the others.
  const [isExpanded, setIsExpanded] = useState(false);
    // CRITICAL FIX: Scrolls the page to the top (0, 0) every time the component loads.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty array ensures it runs only on mount/refresh


  return (
    <div 
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-fit`}
    >
      <div className="p-6 text-center flex-grow flex flex-col items-center">
        
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-50 transition-colors relative flex-shrink-0">
          {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
              <User size={48} />
            </div>
          )}
        </div>
        
        <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
        <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
        
        <div className="flex justify-center gap-3 text-gray-400 mb-4">
             {member.linkedin && (
        <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors z-10 relative"
            //onClick={(e) => e.stopPropagation()} // Prevents the card click (bio modal)
        >
            <Linkedin size={18} />
        </a>)}
        
         
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors focus:outline-none"
        >
          {isExpanded ? 'Close Profile' : 'Faculty Profile'}
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Expandable Bio Section - Controlled by THIS card's state only */}
      <div 
        className={`bg-gray-50 overflow-y-auto transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 border-none'}`}
      >
        <div className="p-6">
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
            {member.bio || "Bio coming soon..."}
            </p>
        </div>
      </div>
    </div>
  );
};

const Professor = () => {
  const professorInCharge = [
    { 
        name: "Dr. Seelam Rajasekhar Reddy", 
        role: "Professor of Metallurgical and Materials Engineering at VNIT", 
        image: prof1,
        bio: "I am Dr. Seelam Rajasekhar Reddy, an Assistant Professor of Metallurgical and Materials Engineering at VNIT, Nagpur. My academic background includes a Ph.D. from IIT Hyderabad and postdoctoral research at IIT Kanpur. My primary research expertise lies in Physical Metallurgy and the thermomechanical processing of advanced materials.In addition to this, my group actively works on exciting areas like Additive Manufacturing of materials for both strategic applications and biomedical uses. We also explore recycling scrap metals for unique cultural purposes, such as Dokra art, and focus on new equipment development for materials engineering research. My other research areas include Mineral Processing and Steel Making. I am currnetly Incharge of Mineral Processing Laboratory and Additive Manufacturing (Polymer Processing) Laboratory and I am proud to serve as the In-Charge of the Design and Innovation Club of VNIT." ,
        linkedin: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://in.linkedin.com/in/rajasekhar-reddy-seelam-727b9162&ved=2ahUKEwjxt82itIORAxVRm68BHQCJMmIQFnoECCcQAQ&usg=AOvVaw0JjoYOnkRcfeJwJa4s05zD"
      },
    { 
        name: "Dr. Ankit A. Bhurane", 
        role: "Professor of Electronics and Communication Engineering at VNIT", 
        image: prof2,
        bio: "Dr. Ankit A. Bhurane has received his B.E. in Electronics and Communication, M.Tech. in Electronics, and Ph.D. in 2008, 2011, and 2016 respectively from SGBAU University, SGGS Nanded, and Indian Institute of Technology Bombay (IITB). He is following teaching as his passion and has 9+ years of experience teaching undergraduate and postgraduate courses at various institutes of national importances like Indian Institute of Information Technology, National Institute of Technology etc. He has published several papers in various International conferences and journals. He has been active reviewer for reputed IEEE conference and Elsevier journals. He has four Indian Patent Granted, and 3 filed with IPR office, India. His research interested include embedded systems, biomedical signal processing, scalable video coding and green Communication." ,
        linkedin: "https://www.linkedin.com/in/ankit-bhurane-5aa61a9/"    
      }, 
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professor In-Charge</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guiding us with experience and vision.
          </p>
        </div>

        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.01s' }}>
          {/* 'items-start' ensures cards don't stretch weirdly when one expands */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl items-start">
            {professorInCharge.map((member, index) => (
              <TeamMember 
                key={index} 
                member={member} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professor;