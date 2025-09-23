import React from 'react';
import { FaCode, FaGlobe, FaServer, FaDatabase } from 'react-icons/fa';

const skills = [
  { 
    title: "Languages", 
    icon: FaCode, 
    techs: ["Python", "Java", "JavaScript", "HTML", "CSS"] 
  },
  { 
    title: "Frontend", 
    icon: FaGlobe, 
    techs: ["React.js", "HTML5", "CSS3", "Responsive Design", "REST APIs"] 
  },
  { 
    title: "Backend", 
    icon: FaServer, 
    techs: ["Node.js", "Express.js", "JWT Auth", "RESTful APIs"] 
  },
  { 
    title: "Database", 
    icon: FaDatabase, 
    techs: ["MongoDB", "MySQL", "Database Design"] 
  }
];

const Skills = ({ visible = true }) => {
  return (
    <section
      id="skills"
      className={`py-16 bg-[#0d0d16] text-white transition-opacity duration-1000 transform 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="text-center mb-12 mt-14">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Technical Skills
        </h2>
        <p className="mt-2 text-gray-400 text-sm md:text-base">
          Comprehensive expertise in full-stack development with modern technologies
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="bg-[#19142b] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition transform duration-300 border border-[#2f1860]"
            >
              {Icon && <Icon className="text-cyan-400 text-4xl mx-auto mb-4" />}
              <h3 className="text-lg font-semibold mb-4">{skill.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#2f1860] px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
