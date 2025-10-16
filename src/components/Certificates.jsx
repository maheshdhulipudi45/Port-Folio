// import React from "react";
// import { FaAward } from "react-icons/fa";

// // Data for the Certificates section (placeholder)
// const certificates = [
//   {
//     title: "AWS Certified Cloud Practitioner",
//     issuer: "Amazon Web Services",
//     image: "https://via.placeholder.com/400x250/0d0d16/9ca3af?text=AWS+Certificate",
//   },
//   {
//     title: "Google Project Management",
//     issuer: "Coursera",
//     image: "https://via.placeholder.com/400x250/0d0d16/9ca3af?text=Google+PM",
//   },
//   {
//     title: "Responsive Web Design",
//     issuer: "freeCodeCamp",
//     image: "https://via.placeholder.com/400x250/0d0d16/9ca3af?text=RWD+Certificate",
//   },
//   {
//     title: "Machine Learning with Python",
//     issuer: "IBM",
//     image: "https://via.placeholder.com/400x250/0d0d16/9ca3af?text=IBM+ML",
//   },
//   {
//     title: "JavaScript Algorithms and Data Structures",
//     issuer: "freeCodeCamp",
//     image: "https://via.placeholder.com/400x250/0d0d16/9ca3af?text=JS+Certificate",
//   },
// ];

// const Certificates = ({ visible = true }) => {
//   return (
//     <section
//       id="certificates"
//       className={`py-16 bg-[#0d0d16] text-white mx-auto px-5 md:px-0 transition-opacity duration-1000 transform 
//         ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//     >
//       <div className="text-center mb-12 mt-7">
//         <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
//           Certificates
//         </h2>
//         <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
//           Showcasing skills gained through professional courses and certifications.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {certificates.map((cert, index) => (
//           <div key={index} className="group h-[250px] relative perspective-1000">
//             <div
//               className="w-full h-full rounded-2xl shadow-lg transition-transform duration-700 transform-style-3d group-hover:rotate-y-180"
//             >
//               {/* Front Face with Glassmorphism Effect */}
//               <div className="absolute inset-0 backface-hidden p-6 rounded-2xl flex flex-col justify-center items-center text-center backdrop-blur-sm bg-white/5 border border-white/10 group-hover:border-purple-400 group-hover:shadow-2xl transition-all duration-300">
//                 <FaAward className="text-cyan-400 text-4xl mb-4" />
//                 <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
//                 <p className="text-gray-300 text-sm">{cert.issuer}</p>
//               </div>

//               {/* Back Face */}
//               <div className="absolute inset-0 backface-hidden rounded-2xl transform rotate-y-180">
//                 <img src={cert.image} alt={cert.title} className="w-full h-full object-cover rounded-xl" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certificates;


import React, { useState } from "react";
import { FaAward, FaTimes } from "react-icons/fa";

// Data for the Certificates section (same as before)
const certificates = [
  {
    title: "Full Stack Development Internship",
    issuer: "Technical Hub Pvt Ltd",
    image: "/thubps.jpg", 
    description: "Completed a summer internship focusing on HTML, CSS, JavaScript, ReactJS, NodeJS, and MongoDB. Demonstrated skills on a project titled 'Campus Fix'.",
  },
  {
    title: "Web Development Internship (SkillDzire)",
    issuer: "SkillDzire (JNTUK, Kakinada)",
    image: "/SkillDzire.jpg", 
    description: "Successfully completed a short-term internship program on Web Development, organized by SkillDzire.",
  },
  {
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    image: "/ciscojs1.jpg", 
    description: "Focused on advanced JavaScript concepts and programming techniques through the Cisco Networking Academy program.",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    image: "/ciscojs2.jpg", 
    description: "Mastered foundational JavaScript concepts necessary for web development and front-end programming.",
  },
  {
    title: "Web Dev Internship (ApexPlanet)",
    issuer: "ApexPlanet Software Pvt. Ltd.",
    image: "/Appex.jpg", 
    description: "Completed a virtual internship specializing in Web Development using HTML, CSS, and JavaScript.",
  },
];

const Certificates = ({ visible = true }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const closeModal = () => setSelectedCert(null);

  return (
    <section
      id="certificates"
      className={`py-16 bg-[#0d0d16] text-white mx-auto px-5 md:px-0 transition-opacity duration-1000 transform 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="text-center mb-12 mt-7">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Certificates
        </h2>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
          Click on any card to view the full certificate image and details.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          // --- Certificate Card (Clickable with Thumbnail) ---
          <div 
            key={index} 
            className="h-[320px] relative cursor-pointer group"
            onClick={() => setSelectedCert(cert)} 
          >
            <div
              className="w-full h-full rounded-2xl shadow-lg flex flex-col items-center backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400 hover:shadow-2xl overflow-hidden"
            >
              {/* Image Thumbnail Section */}
              <div className="w-full h-32 overflow-hidden rounded-t-2xl relative">
                <img
                  src={cert.image}
                  alt={`${cert.title} preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Title and Issuer Section */}
              <div className="flex flex-col justify-center items-center text-center p-4 flex-grow">
                <FaAward className="text-purple-400 text-3xl mb-2" />
                <h3 className="text-lg font-semibold mb-1 leading-snug">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------------------------------------------------------------- */}
      {/* --- Modal Overlay (DECREASED SIZE) --- */}
      {/* ---------------------------------------------------------------------------------- */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity duration-300"
          onClick={closeModal} 
        >
          <div 
            // **** DECREASED WIDTH: Changed max-w-2xl to max-w-xl (approx 640px) ****
            className="relative bg-[#0d0d16] rounded-xl shadow-2xl p-6 max-w-xl w-full max-h-[90vh] transition-transform duration-300 transform scale-95 opacity-0 animate-scale-in"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 text-gray-400 hover:text-white transition"
              onClick={closeModal}
            >
              <FaTimes className="text-xl" />
            </button>

            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                {selectedCert.title}
            </h3>
            <p className="text-gray-400 mb-4 text-xs">Issued by: {selectedCert.issuer}</p>
            
            {/* **** DECREASED HEIGHT: Changed max-h-[60vh] to max-h-[50vh] **** */}
            <div className="overflow-y-auto max-h-[50vh] rounded-lg border border-white/10">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full h-auto object-contain" 
              />
            </div>
            
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
                <p className="text-sm text-gray-300">{selectedCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;