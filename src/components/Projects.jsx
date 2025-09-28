import React from 'react';
import { FaServer } from 'react-icons/fa';

const projectsData = [
  {
    title: "CampusFix",
    subtitle: "Campus Electrical Issue Management System",
    description: "Full-stack web application for reporting and tracking campus electrical issues. Built with MERN stack featuring JWT authentication, RESTful APIs, and MongoDB integration with responsive React.js UI.",
    techs: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    codeLink: "#",
    liveLink: "#"
  },
  {
    title: "RestroPoint",
    subtitle: "Restaurant Website",
    description: "A visually appealing and responsive restaurant website to showcase menus, enable online reservations, and provide contact information. Developed using modern frontend technologies.",
    techs: ["React.js", "HTML", "CSS"],
    codeLink: "#",
    liveLink: "#"
  },
  {
    title: "Blog Application",
    subtitle: "Personal Blogging Platform",
    description: "A full-stack blog application where users can create, read, update, and delete their own blog posts. Features user authentication and a rich text editor for content creation.",
    techs: ["Node.js", "Express.js", "MongoDB"],
    codeLink: "#",
    liveLink: "#"
  },
  {
    title: "SportsInfo",
    subtitle: "Sports Updates Website",
    description: "Frontend application providing live scores, player statistics, and sports updates. Integrated third-party sports API for real-time match data with responsive design and advanced search & filter features.",
    techs: ["React.js", "CSS3", "REST APIs", "Responsive Design"],
    codeLink: "#",
    liveLink: "#"
  }
];

const Projects = ({ visible }) => (
  <div id="projects" className={`py-16 bg-[#0d0d16] text-white px-4 transition-opacity duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="text-center mb-12 mt-11">
      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
        Projects
      </h2>
      <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
        Showcase of full-stack applications demonstrating technical expertise and problem-solving skills.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {projectsData.map((project, index) => (
        <div key={index} className="bg-[#19142b] p-6 rounded-2xl shadow-lg border border-[#2f1860] hover:border-[#9c52fe] hover:scale-[1.02] transition duration-300">
          <div className="flex items-center gap-2 mb-3">
            <FaServer className="text-[#02b8f0]  text-2xl" />
            <span className=" text-white-100 text-xs px-3 py-1 rounded-full hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
              FULL-STACK
            </span>
          </div>

          <h3 className="text-2xl font-bold">{project.title}</h3>
          <a href={project.liveLink} className="text-purple-400 hover:underline font-medium block mb-3">
            {project.subtitle}
          </a>

          <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.techs.map((tech, i) => (
              <span key={i} className="bg-[#2f1860] px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-between">
            <a href={project.codeLink} className="flex-1 bg-black text-white py-2 rounded-lg flex items-center justify-center text-sm hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
              View Code
            </a>
            <a href={project.liveLink} className="flex-1 ml-4 py-2 rounded-lg flex items-center justify-center border border-[#2f1860] p-4  text-sm transition-all duration-300 text-white hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
