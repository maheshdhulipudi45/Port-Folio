
// import React, { useState, useEffect } from 'react';
// import { 
//   FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaDownload, FaPhone, FaBars, FaTimes, FaServer, FaGlobe, FaCode, FaDatabase, FaMapMarkerAlt, FaAward
// } from 'react-icons/fa';
// import backgroundImage from './assets/d.png';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Data for each section
// const skills = [
//   { 
//     title: "Languages", 
//     icon: FaCode, 
//     techs: ["Python", "Java", "JavaScript", "HTML", "CSS"] 
//   },
//   { 
//     title: "Frontend", 
//     icon: FaGlobe, 
//     techs: ["React.js", "HTML5", "CSS3", "Responsive Design", "REST APIs"] 
//   },
//   { 
//     title: "Backend", 
//     icon: FaServer, 
//     techs: ["Node.js", "Express.js", "JWT Auth", "RESTful APIs"] 
//   },
//   { 
//     title: "Database", 
//     icon: FaDatabase, 
//     techs: ["MongoDB", "MySQL", "Database Design"] 
//   }
// ];

// const projects = [
//   {
//     title: "CampusFix",
//     subtitle: "Campus Electrical Issue Management System",
//     description: "Full-stack web application for reporting and tracking campus electrical issues. Built with MERN stack featuring JWT authentication, RESTful APIs, and MongoDB integration with responsive React.js UI.",
//     techs: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
//     codeLink: "#",
//     liveLink: "#"
//   },
//   {
//     title: "RestroPoint",
//     subtitle: "Restaurant Website",
//     description: "A visually appealing and responsive restaurant website to showcase menus, enable online reservations, and provide contact information. Developed using modern frontend technologies.",
//     techs: ["React.js", "HTML", "CSS"],
//     codeLink: "#",
//     liveLink: "#"
//   },
//   {
//     title: "Blog Application",
//     subtitle: "Personal Blogging Platform",
//     description: "A full-stack blog application where users can create, read, update, and delete their own blog posts. Features user authentication and a rich text editor for content creation.",
//     techs: ["Node.js", "Express.js", "MongoDB"],
//     codeLink: "#",
//     liveLink: "#"
//   },
//   {
//     title: "SportsInfo",
//     subtitle: "Sports Updates Website",
//     description: "Frontend application providing live scores, player statistics, and sports updates. Integrated third-party sports API for real-time match data with responsive design and advanced search & filter features.",
//     techs: ["React.js", "CSS3", "REST APIs", "Responsive Design"],
//     codeLink: "#",
//     liveLink: "#"
//   }
// ];

// const education = [
//   {
//     degree: "Master of Computer Applications",
//     institution: "Aditya College Of Engineering",
//     duration: "2024 - 2026",
//     cgpa: "7.33"
//   },
//   {
//     degree: "Bachelor of Science (Computer Science)",
//     institution: "Aditya Degree College",
//     duration: "2021 - 2024",
//     cgpa: "7.77"
//   },
//   {
//     degree: "Intermediate (MPC)",
//     institution: "Aditya Junior College",
//     duration: "2021 - 2024",
//     cgpa: "7.61"
//   }
// ];

// const certificates = [
//   {
//     title: "Full Stack Development",
//     issuer: "Udemy",
//     image: "/src/assets/placeholder.jpg"
//   },
//   {
//     title: "JavaScript Algorithms and Data Structures",
//     issuer: "freeCodeCamp",
//     image: "/src/assets/placeholder.jpg"
//   },
//   {
//     title: "React.js Essential Training",
//     issuer: "LinkedIn Learning",
//     image: "/src/assets/placeholder.jpg"
//   }
// ];

// const App = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [visibleSections, setVisibleSections] = useState({});

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       {
//         threshold: 0.2, // Trigger when 20% of the section is visible
//       }
//     );

//     const sections = ['skills', 'projects', 'experience', 'education', 'certificates', 'contact'];
//     sections.forEach(id => {
//       const element = document.getElementById(id);
//       if (element) {
//         observer.observe(element);
//       }
//     });

//     return () => {
//       sections.forEach(id => {
//         const element = document.getElementById(id);
//         if (element) {
//           observer.unobserve(element);
//         }
//       });
//     };
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     toast.success("Message sent successfully!", {
//       position: "bottom-center",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   };

//   return (
//     <div className="relative min-h-screen bg-[#0d0d16] text-white font-poppins overflow-hidden scroll-smooth">
//       <ToastContainer />
      
//       {/* CSS for animations and smooth scrolling */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');
        
//         body {
//           font-family: 'Poppins', sans-serif;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn { animation: fadeIn 1.5s ease-out; }
//         .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
//         .delay-100 { animation-delay: 0.1s; }
//         .delay-200 { animation-delay: 0.2s; }
//         .delay-300 { animation-delay: 0.3s; }
//         .delay-400 { animation-delay: 0.4s; }
//         .delay-500 { animation-delay: 0.5s; }
//         .delay-600 { animation-delay: 0.6s; }
//         .smooth-scroll {
//           scroll-behavior: smooth;
//         }

//         /* Certificate flip animation */
//         .flipper {
//           transition: transform 0.6s;
//           transform-style: preserve-3d;
//           position: relative;
//         }
//         .flipper.is-flipped {
//           transform: rotateY(180deg);
//         }
//         .flipper .front,
//         .flipper .back {
//           backface-visibility: hidden;
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//         }
//         .flipper .front {
//           z-index: 2;
//           transform: rotateY(0deg);
//         }
//         .flipper .back {
//           transform: rotateY(180deg);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: #19142b;
//           border-radius: 1rem;
//         }
//         .timeline-circle {
//           position: absolute;
//           top: 50%;
//           left: 0;
//           width: 16px;
//           height: 16px;
//           border-radius: 50%;
//           background: #9333ea;
//           transform: translate(-50%, -50%);
//           z-index: 10;
//         }
//       `}</style>
      
//       {/* ==================== Navigation Bar & Mobile Menu ==================== */}
      // <nav className={`fixed top-0 w-full p-6 flex justify-between items-center z-20 transition-colors duration-500 ${isScrolled ? 'bg-[#0d0d16] bg-opacity-95 shadow-lg' : 'bg-transparent'}`}>
      //   <div className="w-10 h-10 md:w-12 md:h-12 bg-[#32bee9] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
      //     <span className="text-lg md:text-xl font-bold ">MD</span>
      //   </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-8 text-lg font-medium">
//           <a href="#hero" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
//           <a href="#skills" className="hover:text-cyan-400 transition-colors duration-300">Skills</a>
//           <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
//           <a href="#experience" className="hover:text-cyan-400 transition-colors duration-300">Internships</a>
//           <a href="#education" className="hover:text-cyan-400 transition-colors duration-300">Education</a>
//           <a href="#certificates" className="hover:text-cyan-400 transition-colors duration-300">Certificates</a>
//           <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
//         </div>
        
//         {/* Mobile Menu Toggle Button (Right Side) */}
//         <div className="md:hidden z-30">
//           <button 
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
//             className="text-white focus:outline-none"
//           >
//             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu (slides from the left) */}
//       <div className={`fixed inset-y-0 left-0 w-64 z-20 bg-gray-900 bg-opacity-95 backdrop-blur-sm transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
//         <div className="flex flex-col items-start p-8 space-y-8 text-2xl font-bold">
//           <button 
//             onClick={() => setIsMobileMenuOpen(false)} 
//             className="text-white focus:outline-none mb-4"
//           >
//             <FaTimes size={24} />
//           </button>
//           <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors duration-300">Home</a>
//           <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors duration-300">Skills</a>
//           <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
//           <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors duration-300">Internships</a>
//           <a href="#education" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors duration-300">Education</a>
//           <a href="#certificates" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors duration-300">Certificates</a>
//           <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
//         </div>
//       </div>
      
//       {/* ==================== Hero Section ==================== */}
//       <div id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 md:py-0">
        
//         {/* Background Image with Overlay */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 animate-fadeIn" 
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         >
//           <div className="absolute inset-0 bg-black opacity-70"></div>
//         </div>
        
//         {/* Hero Content */}
//         <div className="relative z-10 px-4 py-10 md:py-0">
//           <div className="flex justify-center mb-6 mt-12 animate-fadeInUp delay-100">
//             <img
//               src="\src\assets\dn.jpg"
//               alt="Mahesh Dhulipudi"
//               className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white object-cover shadow-lg"
//             />
//           </div>

//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-fadeInUp delay-200">
//             Mahesh Dhulipudi
//           </h1>
//           <p className="text-lg md:text-xl font-medium text-gray-300 mb-4 animate-fadeInUp delay-300">
//             Full-Stack Developer
//           </p>
//           <p className="max-w-xs sm:max-w-md mx-auto text-sm md:text-base text-gray-400 leading-relaxed mb-8 animate-fadeInUp delay-400">
//             MCA graduate passionate about building scalable software solutions with MERN stack, Java, and Python. Experienced in creating responsive web applications and solving complex problems.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp delay-500">
//             <a 
//               href="/Mahesh_Dhulipudi_Resume.pdf" 
//               download 
//               className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-[#0e0e2e] text-[white] rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
//             >
//               <FaDownload className="mr-2" />
//               Download Resume
//             </a>
//             <a 
//               href="tel:+917658956116" 
//               className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
//             >
//               <FaPhone className="mr-2" />
//               Get In Touch
//             </a>
//           </div>
//         </div>
//       </div>
      
//       {/* ==================== Technical Skills Section ==================== */}
//       <section id="skills" className={`py-16 bg-[#0d0d16] text-white transition-opacity duration-1000 transform ${visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="text-center mb-12 mt-14">
//           <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
//             Technical Skills
//           </h2>
//           <p className="mt-2 text-gray-400 text-sm md:text-base">
//             Comprehensive expertise in full-stack development with modern technologies
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
//           {skills.map((skill, index) => {
//             const Icon = skill.icon;
//             return (
//               <div 
//                 key={index} 
//                 className="bg-[#19142b] rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition transform duration-300 border border-[#2f1860]"
//               >
//                 <Icon className="text-cyan-400 text-4xl mx-auto mb-4" />
//                 <h3 className="text-lg font-semibold mb-4">{skill.title}</h3>
//                 <div className="flex flex-wrap justify-center gap-2">
//                   {skill.techs.map((tech, i) => (
//                     <span key={i} className="bg-[#2f1860] px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* ==================== Projects Section ==================== */}
//       <div id="projects" className={`py-16 bg-[#0d0d16] text-white px-4 transition-opacity duration-1000 transform ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
//         {/* Title */}
//         <div className="text-center mb-12 mt-11">
//           <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
//             Projects
//           </h2>
//           <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
//             Showcase of full-stack applications demonstrating technical expertise and problem-solving skills.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {projects.map((project, index) => (
//             <div 
//               key={index}
//               className="bg-[#19142b] p-6 rounded-2xl shadow-lg border border-[#2f1860] hover:border-[#9c52fe] hover:scale-[1.02] transition duration-300"
//             >
//               <div className="flex items-center gap-2 mb-3">
//                 <FaServer className="text-purple-400 text-2xl" />
//                 <span className="bg-purple-900 text-purple-300 text-xs px-3 py-1 rounded-full hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
//                   FULL-STACK
//                 </span>
//               </div>

//               <h3 className="text-2xl font-bold">{project.title}</h3>
//               <a href={project.liveLink} className="text-purple-400 hover:underline font-medium block mb-3">
//                 {project.subtitle}
//               </a>

//               <p className="text-gray-400 mb-4 text-sm leading-relaxed">
//                 {project.description}
//               </p>

//               {/* Tech Tags */}
//               <div className="flex flex-wrap gap-2 mb-5">
//                 {project.techs.map((tech, i) => (
//                   <span key={i} className="bg-[#2f1860] px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black ">
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex justify-between">
//                 <a href={project.codeLink} className="flex-1 bg-black text-white py-2 rounded-lg flex items-center justify-center text-sm hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
//                   View Code
//                 </a>
//                 <a href={project.liveLink} className="flex-1 ml-4 py-2 rounded-lg flex items-center justify-center text-sm transition-all duration-300 text-white hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ==================== Internship & Experience Section ==================== */}
//       <section id="experience" className={`py-16 bg-[#0d0d16] text-white transition-opacity duration-1000 transform ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="text-center mb-10 mt-7">
//           <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
//             Internship
//           </h2>
//           <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
//             Hands-on experience in building and deploying real-world applications.
//           </p>
//         </div>
//         <div className="max-w-4xl mx-auto relative pl-6 md:pl-12">
//           {/* Vertical timeline line */}
//           <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#2f1860] ml-6 md:ml-12 "></div>
//           <div className="mb-8 relative pl-6">
//             <div className="timeline-circle"></div>
//             <div className="bg-[#19142b] p-5 rounded-2xl mr-6 shadow-lg border border-[#2f1860] hover:scale-[1.02] transition duration-300">
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="text-2xl font-bold">Full Stack Developer Intern</h3>
//                 <span className="text-sm text-gray-400">Jan 2024 - Present</span>
//               </div>
//               <p className="text-purple-400 font-medium mb-2">Technical Hub</p>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Developed and maintained full-stack web applications using MERN stack. Collaborated with a team of developers on projects, including an electrical issue management system, and implemented RESTful APIs and real-time features.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

      // {/* ==================== Education Section ==================== */}
      // <section id="education" className={`py-16 bg-[#0d0d16] text-white m-5 transition-opacity duration-1000 transform ${visibleSections.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      //   <div className="text-center mb-12 mt-7">
      //     <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
      //       Education
      //     </h2>
      //     <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
      //       Academic background and qualifications.
      //     </p>
      //   </div>
      //   <div className="max-w-4xl mx-auto relative pl-6 md:pl-12">
      //     {/* Vertical timeline line */}
      //     <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#2f1860] ml-6 md:ml-12"></div>
          
      //     {education.map((item, index) => (
      //       <div key={index} className="mb-8 relative pl-6">
      //         <div className="timeline-circle"></div>
      //         <div className="bg-[#19142b] p-6 rounded-2xl shadow-lg border border-[#2f1860] hover:scale-[1.02] transition duration-300">
      //           <div className="flex justify-between items-center mb-2">
      //             <h3 className="text-2xl font-bold">{item.degree}</h3>
      //             <span className="text-sm text-gray-400">{item.duration}</span>
      //           </div>
      //           <p className="text-purple-400 font-medium mb-2">{item.institution}</p>
      //           <p className="text-yellow-400 text-sm leading-relaxed">
      //             CGPA: {item.cgpa}
      //           </p>
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      // </section>

      // {/* ==================== Certificates Section with Flip Animation ==================== */}
      // <section id="certificates" className={`py-16 bg-[#0d0d16] text-white m-5 transition-opacity duration-1000 transform ${visibleSections.certificates ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      //   <div className="text-center mb-12 mt-7">
      //     <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
      //       Certificates
      //     </h2>
      //     <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
      //       Showcasing skills gained through professional courses and certifications.
      //     </p>
      //   </div>
      //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      //     {certificates.map((cert, index) => (
      //       <div key={index} className="group h-[250px] perspective-1000">
      //         <div className="flipper w-full h-full rounded-2xl shadow-lg border border-[#2f1860]" onMouseEnter={(e) => e.currentTarget.classList.add('is-flipped')} onMouseLeave={(e) => e.currentTarget.classList.remove('is-flipped')}>
      //           <div className="front bg-[#19142b] p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center text-center">
      //             <FaAward className="text-cyan-400 text-4xl mb-4" />
      //             <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
      //             <p className="text-gray-400 text-sm">{cert.issuer}</p>
      //           </div>
      //           <div className="back p-2 rounded-2xl shadow-lg">
      //             <img src={cert.image} alt={cert.title} className="w-full h-full object-contain rounded-xl" />
      //           </div>
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      // </section>

//       {/* ==================== Contact Section with Form ==================== */}
//       <section id="contact" className={`py-16 bg-[#0d0d16] text-white transition-opacity duration-1000 transform ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="container mx-auto px-4">
//           {/* Header */}
//           <div className="text-center mb-12 mt-7">
//             <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
//               Get In Touch
//             </h2>
//             <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
//               Ready to bring your ideas to life. Let's discuss your next project and create something amazing together.
//             </p>
//           </div>

//           {/* Main Content Grid with Contact Info and Form */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto bg-[#19142b] p-8 rounded-2xl shadow-lg border border-[#2f1860]">
//             {/* Left Column: Contact Details */}
//             <div className="space-y-8 p-4">
//               <h3 className="text-2xl font-bold text-white-400 mb-4">Contact Information</h3>
//               <div className="flex items-center space-x-4">
//                 <FaEnvelope className="text-cyan-400 text-2xl" />
//                 <div>
//                   <h4 className="font-semibold text-lg">Email</h4>
//                   <p className="text-gray-300">maheshdhulipudi45@gmail.com</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <FaPhone className="text-cyan-400 text-2xl" />
//                 <div>
//                   <h4 className="font-semibold text-lg">Phone</h4>
//                   <p className="text-gray-300">7658956116</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
//                 <div>
//                   <h4 className="font-semibold text-lg">Location</h4>
//                   <p className="text-gray-300">Amalapuram, Andhra Pradesh</p>
//                 </div>
//               </div>
//               <div className="flex space-x-6 text-3xl">
//                 <a 
//                   href="#" 
//                   className="bg-[#2f1860] p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
//                 >
//                   <FaLinkedin />
//                 </a>
//                 <a 
//                   href="#" 
//                   className="bg-[#2f1860] p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
//                 >
//                   <FaGithub />
//                 </a>
//                 <a 
//                   href="#" 
//                   className="bg-[#2f1860] p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
//                 >
//                   <FaTwitter />
//                 </a>
//                 <a 
//                   href="#" 
//                   className="bg-[#2f1860] p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
//                 >
//                   <FaEnvelope />
//                 </a>
//               </div>
//             </div>

//             {/* Right Column: Contact Form */}
//             <div className="p-4">
//               <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
//                   <input type="text" id="name" name="name" className="mt-1 block w-full bg-[#2f1860] border border-[#2f1860] rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 text-white" required />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
//                   <input type="email" id="email" name="email" className="mt-1 block w-full bg-[#2f1860] border border-[#2f1860] rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 text-white" required />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
//                   <textarea id="message" name="message" rows="4" className="mt-1 block w-full bg-[#2f1860] border border-[#2f1860] rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 text-white" required></textarea>
//                 </div>
//                 <div>
//                   <button type="submit" className="w-full flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== Footer ==================== */}
//       <footer className="py-8 text-center text-gray-400 text-sm bg-[#0a0a10]">
//         <p>Made by Mahesh Dhulipudi</p>
//         <p className="mt-1">&copy; 2024 All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import Home from './components/Home';

function App() {
  return <Home />;
}

export default App;

