import React ,{useEffect} from 'react';
import { Mail, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const Contact = () => {
    // CRITICAL FIX: Scrolls the page to the top (0, 0) every time the component loads.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty array ensures it runs only on mount/refresh

  return (
    <section className="py-20 bg-white min-h-screen animate-slide-up flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-16 animate-fade-in-up">
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to us directly via email, phone, or visit our lab.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
          
          {/* Visit Us Card (Clickable for Maps) */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Material+Engineering+Centre,+VNIT+Nagpur" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative text-center p-8 bg-gray-50 rounded-2xl border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer block hover:-translate-y-1"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-400">
              <ExternalLink size={18} />
            </div>
            
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <MapPin size={24} />
            </div>
            
            
            <h3 className="font-bold text-xl text-gray-900 mb-2">Address</h3>
            
          
            <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors leading-relaxed">
              Lab no-003,<br/>Material Engineering Centre,<br/>VNIT-Nagpur.
            </p>
          </a>

          {/* Email Us Card - CLICKABLE */}
          <a 
            href="mailto:designandinnovationclub@gmail.com"
            className="group relative text-center p-8 bg-gray-50 rounded-2xl border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer block hover:-translate-y-1"
            
          >
             <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-400">
              <ArrowRight size={18} />
            </div>

             <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Mail size={24} />
            </div>
            
            <h3 className="font-bold text-xl text-gray-900 mb-2">Email Us</h3>
            <p className="text-sm text-gray-600 break-words font-medium group-hover:text-blue-600 transition-colors">
              designandinnovationclub@gmail.com
            </p>
          </a>

          {/* Call Us Card - CLICKABLE */}
          <a 
            href="tel:+917981847865"
            className="group relative text-center p-8 bg-gray-50 rounded-2xl border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-xl transition-all duration-300 cursor-pointer block hover:-translate-y-1"
          >
             <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-400">
              <ArrowRight size={18} />
            </div>

             <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Phone size={24} />
            </div>
            
            <h3 className="font-bold text-xl text-gray-900 mb-2">Call Us</h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              +91 79818 47865
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;