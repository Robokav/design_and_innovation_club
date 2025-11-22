import React from 'react';
import { CircuitBoard, Instagram, Linkedin, Github, Mail,YoutubeIcon } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
         
            <h3 className="text-white text-xl font-bold flex items-center justify-center md:justify-start gap-2 mb-2">
              Design & Innovation Club — VNIT Nagpur
            </h3>
            
            <p className="text-sm opacity-80">Innovation begins with imagination.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.youtube.com/@DesignandInnovationclub" target="_blank"  className="hover:text-white transition-colors"><YoutubeIcon size={20} /></a>
          {/*add when insta and linkedin and github are active*/}
       {/*     <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>*/}
            <a href="mailto:designandinnovationclub@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
            
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; 2025 designed by Kavin Bavisi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
