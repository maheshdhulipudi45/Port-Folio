import React from "react";
import { FaAward } from "react-icons/fa";

// Data for the Certificates section (placeholder)
const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "https://via.placeholder.com/400x250/0d0d16/9ca3af?text=AWS+Certificate",
  },
  {
    title: "Google Project Management",
    issuer: "Coursera",
    image: "https://via.placeholder.com/400x250/0d0d16/9ca3af?text=Google+PM",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    image: "https://via.placeholder.com/400x250/0d0d16/9ca3af?text=RWD+Certificate",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    image: "https://via.placeholder.com/400x250/0d0d16/9ca3af?text=IBM+ML",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    image: "https://via.placeholder.com/400x250/0d0d16/9ca3af?text=JS+Certificate",
  },
];

const Certificates = ({ visible = true }) => {
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
          Showcasing skills gained through professional courses and certifications.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div key={index} className="group h-[250px] relative perspective-1000">
            <div
              className="w-full h-full rounded-2xl shadow-lg transition-transform duration-700 transform-style-3d group-hover:rotate-y-180"
            >
              {/* Front Face with Glassmorphism Effect */}
              <div className="absolute inset-0 backface-hidden p-6 rounded-2xl flex flex-col justify-center items-center text-center backdrop-blur-sm bg-white/5 border border-white/10 group-hover:border-purple-400 group-hover:shadow-2xl  transition-all duration-300">
                <FaAward className="text-cyan-400 text-4xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-300 text-sm">{cert.issuer}</p>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 backface-hidden rounded-2xl transform rotate-y-180">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;