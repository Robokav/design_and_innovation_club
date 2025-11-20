import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

// Main Pages
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx'; // Acts as "All Projects" page
import ProjectDetails from './pages/ProjectDetails.jsx';
import Contact from './pages/Contact.jsx';

// Team Pages
import Professor from './pages/team/Professor.jsx';
import CoreMembers from './pages/team/CoreMembers.jsx';
import JuniorMembers from './pages/team/JuniorMembers.jsx';


// NEW Project Category Pages (Connected to Dropdown)
import ActiveProjects from './pages/Projects/ActiveProjects.jsx';
import ThreeDModels from './pages/Projects/threeDModels.jsx';

// Individual Project Pages (Optional/Legacy)


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <NavBar />
      
      <main className="flex-grow">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          
          {/* Projects Routing */}
          <Route path="/projects" element={<Projects />} /> {/* "All Projects" link goes here */}
        
          
          {/* Dynamic Project Details (Handles clicks on cards) */}
          <Route path="/projects/:id" element={<ProjectDetails />} />
           <Route path="/projects/active" element={<ActiveProjects />} /> 
           
          <Route path="/projects/3d-models" element={<ThreeDModels />} /> 
       

          <Route path="/contact" element={<Contact />} />
          
          {/* Team Pages */}
          
          <Route path="/team/professor" element={<Professor />} />
          <Route path="/team/core" element={<CoreMembers />} />
          <Route path="/team/junior" element={<JuniorMembers />} />

          {/* Legacy Individual Project Routes (Can be kept or removed if using dynamic :id) */}


        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;