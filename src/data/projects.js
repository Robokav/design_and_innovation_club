      {/*add this in each section to showcase extra features on website
        features: ["6-Wheel Drive System", "Real-time SLAM Mapping", "Obstacle Avoidance"],*/}
import image from "../assets/commingsoon.png"

export const projects = [
    {
      id: 1,
      title: "Tensile testing Machine",
      description: "Working on a tensile testing machine to measure material strength and deformation under controlled load.",
      fullDescription: "Comming Soon",
      image: image,
      gallery: [ image,
    
      ],
      tags: ["instrumentation", "research and development", "Arduino"],
      category: "active",
      github: "",
      videoLink: "",// This is where the warning originates
      docsLink: "" // <-- NEW FIELD
    },
    {
      id: 2,
      title: "AI Drone Surveillance",
      description: "Smart drone system capable of real-time object detection and tracking for campus security monitoring.",
      fullDescription: "This project involves a quadcopter drone equipped with a high-resolution camera and an onboard AI processing unit...",
      features: [""],
      gallery: ["https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800"],
      tags: ["instrumentation", "research and development", "Arduino"],
      category: "active",
      github: "#",
      videoLink: "",// Blank field is fine, but ensures consistency
      docsLink: "https://drive.google.com/doc/ai_manual_link" // <-- NEW FIELD
    },
    // Adding placeholder for other projects to complete the file structure
    {
        id: 3,
        title: "Smart Prosthetic Arm",
        description: "Low-cost 3D printed prosthetic arm controlled by EMG muscle signals.",
        fullDescription: "A bio-medical engineering marvel, this smart prosthetic arm is 3D printed to keep costs low.",
        //features: ["EMG Signal Processing", "3D Printed Components"],
        gallery: ["https://images.unsplash.com/photo-1589254065878-42c9da9e2fc6?auto=format&fit=crop&q=80&w=800"],
        tags: ["Bio-Medical", "3D Printing"],
        category: "3d-model",
        github: "#",
        videoLink: "",
       //ocsLink: "https://drive.google.com/doc/ai_manual_link" // <-- NEW FIELD0
    },
    {
        id: 4,
        title: "",
        description: "Custom 3D printed chassis designed for lightweight performance.",
        fullDescription: "The Gesture Controlled Car Chassis showcases rapid prototyping and mechanical design.",
        features: ["null"],
        gallery: ["https://images.unsplash.com/photo-1517055248131-1f8f53ad5419?auto=format&fit=crop&q=80&w=800"],
        tags: ["3D Design", "Prototyping"],
        category: "3d-model",
        github: "#",
        videoLink: "https://www.youtube.com/watch?v=car_chassis_link",
        docsLink: "https://drive.google.com/doc/ai_manual_link" // <-- NEW FIELD
        
      }
];