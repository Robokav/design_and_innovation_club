import React ,{useEffect} from 'react';
import { Linkedin, Mail, User } from 'lucide-react';

const TeamMember = ({ name, role, image }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 text-center border border-gray-100 group">
    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-50 group-hover:border-blue-100 transition-colors">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
          <User size={48} />
        </div>
      )}
    </div>
    <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
    <p className="text-blue-600 text-sm font-medium mb-3">{role}</p>
    <div className="flex justify-center gap-3 text-gray-400">
      <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={18} /></a>
      <a href="#" className="hover:text-blue-600 transition-colors"><Mail size={18} /></a>
    </div>
  </div>
);

const JuniorMembers = () => {
  const juniorMembers = [
    { name: "Arjun Kumar", role: "Robotics Team", image: null },
    { name: "Sia Verma", role: "AI Team", image: null },
    { name: "Rahul Mehra", role: "Web Dev Team", image: null },
    { name: "Ishita Roy", role: "Design Team", image: null },
  ];
  // CRITICAL FIX: Scrolls the page to the top (0, 0) every time the component loads.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty array ensures it runs only on mount/refresh

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Junior Members</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The future of IvLabs, learning and building amazing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.01s' }}>
          {juniorMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JuniorMembers;