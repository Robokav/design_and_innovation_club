      {/*add this in each section to showcase extra features on website
        features: ["6-Wheel Drive System", "Real-time SLAM Mapping", "Obstacle Avoidance"],*/}
import image from "../assets/commingsoon.png"
import hogwarts from "../assets/hogwarts.jpg"
import hogwarts1 from "../assets/hogwarts1.jpg"
import mom from "../assets/lovemom.jpg"
import dad from "../assets/lovedad.jpg"
import love from "../assets/love.jpg"
import god1 from "../assets/god.jpg"
import peacock from "../assets/peacock.jpg"
import dragon from "../assets/dragon.jpg"


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
        title: "3D Dual-View Ambigram",
        description: "A perspective-based 3D ambigram combining two names into one reversible design.",
        fullDescription: " This project is a 3D dual-view ambigram, designed so that a single 3D structure displays two different messages when viewed from opposite angles. From one direction, the letters visually align to form the phrase \“LOVE U MOM,\” and when the model is viewed from the other side, the same geometry reads \“LOVE U DAD.\"The design was created by modeling each letter with precise depth, rotation, and perspective alignment so that the shapes overlap in a way that produces two readable words within one object. This type of structure is known as a 3D ambigram or perspective ambigram, where the interpretation changes depending on the viewer’s position. The final model was 3D-printed using individually formed letters placed on a base, demonstrating creativity in CAD modeling, spatial visualization, and dual-message design. The piece serves as a unique decorative display and a personalized tribute to both parents.",
        //features: ["EMG Signal Processing", "3D Printed Components"],
        image:love,
        gallery: [love,mom,dad],
        tags: ["Ambigram", "3D Printing","AutoCad"],
        category: "3d-model",
        github: "",
        videoLink: "",
       //ocsLink: "https://drive.google.com/doc/ai_manual_link" // <-- NEW FIELD0
    },
    {
        id: 4,
        title: "Fun Projects",
        description: "Creative 3D prints crafted just for fun.",
        fullDescription: "Explore our collection of cool, creative, and precision-engineered designs—each born from AutoCAD sketches and brought to life through high-quality 3D printing. From quirky desk gadgets to mini mechanical marvels, these fun-focused projects blend playful imagination with solid technical craftsmanship.",
        
        gallery: [hogwarts,hogwarts1,god1,peacock,dragon],
        tags: ["AutoCad", "3d printing","fun"],
        category: "3d-model",
        image: hogwarts,
        github: "",
        videoLink: "",
        docsLink: "" // <-- NEW FIELD
        
      }
];