import React from 'react';
import { UserPlus, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JuniorMembers = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Associate Members</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
             We are looking for passionate learners.
          </p>
        </div>

        {/* Coming Soon / Recruitment Section */}
        <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.01s' }}>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 text-center">
            
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
              <UserPlus size={40} />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates Comming Soon</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              There are currently no associate committee members. If you are enthusiastic about this club, this is your chance to be part of something big!
            </p>

           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             {/* <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-200"
              >
                <Sparkles size={18} /> Be a Part of It
              </Link>
              
              <a 
                href="#" // You can replace this with a Google Form link later
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-200 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Stay Updated
              </a>*/}
            </div>*

          </div>
        </div>

      </div>
    </div>
  );
};

export default JuniorMembers;