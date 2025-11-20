export const projects = [
    {
      id: 1,
      title: "Autonomous Rover MK-1",
      description: "A 6-wheel rover designed for rugged terrain navigation using LIDAR and SLAM algorithms.",
      fullDescription: "The Autonomous Rover MK-1 is engineered to traverse uneven landscapes autonomously...",
      features: ["6-Wheel Drive System", "Real-time SLAM Mapping", "Obstacle Avoidance"],
      gallery: [
          "https://images.unsplash.com/photo-1535376472810-5d229c6bda3c?auto=format&fit=crop&q=80&w=800",
          "https://placehold.co/800x600/324A6D/FFFFFF?text=Rover+Module+View",
          "https://placehold.co/800x600/324A6D/FFFFFF?text=Rover+Testing+Site"
      ],
      tags: ["Robotics", "ROS", "Python"],
      category: "active",
      github: "#",
      videoLink: "https://www.youtube.com/watch?v=rover_video_link",// This is where the warning originates
      docsLink: "https://drive.google.com/doc/ai_manual_link" // <-- NEW FIELD
    },
    {
      id: 2,
      title: "AI Drone Surveillance",
      description: "Smart drone system capable of real-time object detection and tracking for campus security monitoring.",
      fullDescription: "This project involves a quadcopter drone equipped with a high-resolution camera and an onboard AI processing unit...",
      
      gallery: ["https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800"],
      tags: ["AI/ML", "Computer Vision", "Drone"],
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
        features: ["EMG Signal Processing", "3D Printed Components"],
        gallery: ["https://images.unsplash.com/photo-1589254065878-42c9da9e2fc6?auto=format&fit=crop&q=80&w=800"],
        tags: ["Bio-Medical", "3D Printing"],
        category: "3d-model",
        github: "#",
        videoLink: "",
       //ocsLink: "https://drive.google.com/doc/ai_manual_link" // <-- NEW FIELD0
    },
    {
        id: 4,
        title: "Gesture Controlled Car Chassis",
        description: "Custom 3D printed chassis designed for lightweight performance.",
        fullDescription: "The Gesture Controlled Car Chassis showcases rapid prototyping and mechanical design.",
        features: ["Lightweight Design", "Modular Structure"],
        gallery: ["https://images.unsplash.com/photo-1517055248131-1f8f53ad5419?auto=format&fit=crop&q=80&w=800"],
        tags: ["3D Design", "Prototyping"],
        category: "3d-model",
        github: "#",
        videoLink: "https://www.youtube.com/watch?v=car_chassis_link",
        docsLink: "https://drive.google.com/doc/ai_manual_link" // <-- NEW FIELD
        
      }
];