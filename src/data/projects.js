      {/*add this in each section to showcase extra features on website
        features: ["6-Wheel Drive System", "Real-time SLAM Mapping", "Obstacle Avoidance"],*/}
import image from "../assets/commingsoon.png"
import hogwarts from "../assets/hogwarts.jpg"
import hogwarts1 from "../assets/hogwarts1.jpg"

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
      title: "AuraRead",
      description: "A smart pen that scans any word and instantly speaks its meaning for seamless, intuitive reading.",
      fullDescription: "Comming Soon",
     
      image:image,
      gallery: [image],
      tags: ["OpenCV", "OCR", "Voice Dictionary"],
      category: "active",
      github: "",
      videoLink: "",// Blank field is fine, but ensures consistency
      docsLink: "" // <-- NEW FIELD
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
        title: "Hogwarts Castle",
        description: "A highly detailed Hogwarts Castle model designed in AutoCAD and transformed into a tangible structure through precision 3D printing",
        fullDescription: "This project features a detailed 3D model of the Hogwarts Castle, digitally crafted in AutoCAD and brought to life through 3D printing. The design captures the intricate architecture, towers, and textures of the iconic structure, demonstrating precision modeling skills and advanced knowledge of 3D CAD tools. The final print showcases complex geometries, layered terrain, and structural depth, highlighting the capabilities of additive manufacturing and the creative process from digital concept to physical model.",
        
        gallery: [hogwarts,hogwarts1],
        tags: ["AutoCad", "3d printing","Hogwarts model"],
        category: "3d-model",
        image: hogwarts,
        github: "",
        videoLink: "",
        docsLink: "" // <-- NEW FIELD
        
      }
];