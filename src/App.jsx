// import { motion } from "framer-motion";
// import { Link } from "react-scroll";
// import { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// // Icons
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { FaGithub, FaLinkedin, FaDownload, FaPhone, FaEnvelope, FaJava } from "react-icons/fa";
// import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython, SiHackerrank } from "react-icons/si";
// import { BsArrowUpRight } from "react-icons/bs";
// import { CgWebsite } from "react-icons/cg";

// // Assets
// import maheshImage from "./assets/mahesh.png";

// // Data
// const sectionsData = {
//   nav: ["home", "about", "skills", "projects", "education", "certifications", "contact"],
//   skills: [
//     { name: "JavaScript", icon: <SiJavascript /> },
//     { name: "Node.js", icon: <SiNodedotjs /> },
//     { name: "Python", icon: <SiPython /> },
//     { name: "Java", icon: <FaJava /> },
//     { name: "React.js", icon: <SiReact /> },
//     { name: "MongoDB", icon: <SiMongodb /> },
//     { name: "Express.js", icon: <SiExpress /> },
//     { name: "MySQL", icon: <SiMysql /> },
//   ],
//   projects: [
//     {
//       title: "CampusFix",
//       description: "MERN app for campus issue tracking with real-time notifications & JWT auth.",
//       technologies: ["React", "Node.js", "Express", "MongoDB"],
//       code: "https://github.com/maheshdhulipudi45/campus-fix",
//       live: "",
//       featured: true,
//     },
//     {
//       title: "SportsInfo Dashboard",
//       description: "React app showing live sports updates, API integration & filters.",
//       technologies: ["React", "REST API", "JavaScript"],
//       code: "https://github.com/maheshdhulipudi45/sports-info",
//       live: "",
//       featured: true,
//     },
//   ],
//   education: [
//     { degree: "MCA", school: "Aditya College Of Engineering", duration: "2024 – 2026", gpa: "CGPA: 7.33" },
//     { degree: "BSc", school: "Aditya Degree College", duration: "2021 – 2024", gpa: "CGPA: 7.77" },
//   ],
//   certifications: [
//     { name: "Full Stack Development", issuer: "Technical Hub", icon: <CgWebsite /> },
//     { name: "HTML, CSS, JS", issuer: "Appex Planet", icon: <SiJavascript /> },
//     { name: "JS Intermediate", issuer: "HackerRank", icon: <SiHackerrank /> },
//     { name: "Node.js Intermediate", issuer: "HackerRank", icon: <SiNodedotjs /> },
//   ],
// };

// // Animation
// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const App = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       let current = "home";
//       sectionsData.nav.forEach((section) => {
//         const el = document.getElementById(section);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) current = section;
//         }
//       });
//       setActiveSection(current);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Hooks
//   const [refAbout, inViewAbout] = useInView({ triggerOnce: true, threshold: 0.3 });
//   const [refSkills, inViewSkills] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [refProjects, inViewProjects] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [refEducation, inViewEducation] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [refCerts, inViewCerts] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [refContact, inViewContact] = useInView({ triggerOnce: true, threshold: 0.2 });

//   return (
//     <div className="bg-[#0a0617] text-white font-sans scroll-smooth">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-[#0a0617]/80 backdrop-blur-md shadow-lg z-50">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//           <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9c52fe] to-[#f704ae]">MD</h1>
//           <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
//             {sectionsData.nav.map((id) => (
//               <li key={id}>
//                 <Link
//                   to={id}
//                   smooth={true}
//                   duration={500}
//                   offset={-80}
//                   className={`cursor-pointer transition-colors hover:text-[#9c52fe] ${activeSection === id ? "text-[#f2e20b]" : "text-gray-400"}`}
//                 >
//                   {id.charAt(0).toUpperCase() + id.slice(1)}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <button className="md:hidden text-gray-300 text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <IoMdClose /> : <IoMdMenu />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {menuOpen && (
//           <ul className="md:hidden bg-[#0a0617]/90 backdrop-blur-md absolute top-full left-0 w-full flex flex-col gap-4 p-6 text-gray-300 font-medium z-40">
//             {sectionsData.nav.map((id) => (
//               <li key={id}>
//                 <Link
//                   to={id}
//                   smooth={true}
//                   duration={500}
//                   offset={-80}
//                   onClick={() => setMenuOpen(false)}
//                   className={`cursor-pointer transition-colors hover:text-[#9c52fe] ${activeSection === id ? "text-[#770bf2]" : "text-gray-400"}`}
//                 >
//                   {id.charAt(0).toUpperCase() + id.slice(1)}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>

//       <main className="pt-24">
//         {/* Home Section */}
//         <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 relative">
//           <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a1353] via-[#0a0617] to-[#0a0617]"></div>
//           <motion.div className="z-10 mt-20 md:mt-0" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5d25a5] to-[#f704ae]">Hi, I'm Mahesh</h1>
//             <p className="mt-4 text-gray-300 text-lg max-w-xl leading-relaxed">
//               MCA graduate specializing in <span className="text-[#4501ff] ">MERN STACK</span> and <span className="text-[#4501ff]">PYTHON</span>. Passionate about building scalable software solutions and solving real-world problems.
//             </p>
//             <div className="mt-6 flex gap-4 justify-center md:justify-start">
//               <a href="https://github.com/maheshdhulipudi45" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#2f1860]/60 backdrop-blur-md rounded-full flex items-center gap-2 hover:bg-[#3d2482] transition">
//                 <FaGithub /> GitHub
//               </a>
//               <a href="https://linkedin.com/in/mahesh-dhulipudi-909606325" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#4c1d95]/60 backdrop-blur-md rounded-full flex items-center gap-2 hover:bg-[#3e1974] transition">
//                 <FaLinkedin /> LinkedIn
//               </a>
//               <a href="/Mahesh_Dhulipudi_Resume.pdf" download className="px-6 py-3 bg-yellow-500 text-black rounded-full flex items-center gap-2 hover:bg-yellow-600 transition">
//                 <FaDownload /> Resume
//               </a>
//             </div>
//           </motion.div>
//           <motion.img src={maheshImage} alt="Mahesh" className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#9c52fe] shadow-xl object-cover mt-12 md:mt-0 md:ml-12 z-10" initial={{ opacity: 0, scale: 0.5, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: "easeOut" }} />
//         </section>

//         {/* About */}
//         <motion.section id="about" ref={refAbout} initial="hidden" animate={inViewAbout ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
//           <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9c52fe] to-[#f2e20b] mb-6">About Me</h2>
//           <div className="flex justify-center items-center ">
//           <div className="    p-3 w-3/4 bg-[#19142b] rounded-2xl shadow-lg border border-[#2f1860] hover:border-[#9c52fe] hover:scale-[1.02] " >
//           <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Detail-oriented MCA graduate with a strong foundation in full-stack development. Passionate about building scalable software solutions and solving real-world problems.</p>
//           </div>
//           </div>
//         </motion.section>

//         {/* Skills */}
//         <motion.section id="skills" ref={refSkills} initial="hidden" animate={inViewSkills ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
//           <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6d01fa] to-[#ff0faf] mb-12">Skills</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//             {sectionsData.skills.map((skill, i) => (
//               <motion.div key={i} className="p-6 bg-[#1a0f3d] rounded-xl shadow-lg border border-[#2f1860] hover:bg-[#2f1860] hover:scale-105 transition-all cursor-pointer" initial={{ y: 20, opacity: 0 }} animate={inViewSkills ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
//                 <div className="text-6xl text-[#0695f5] mb-4 flex ">{skill.icon}</div>
//                 <h3 className="font-semibold">{skill.name}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Projects */}
//         <motion.section id="projects" ref={refProjects} initial="hidden" animate={inViewProjects ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
//           <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6403e4] to-[#f20b0b] mb-12">Projects</h2>
//           <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//             {sectionsData.projects.map((p, i) => (
//               <motion.div key={i} className="p-8 bg-[#19142b] rounded-2xl shadow-lg border border-[#2f1860] hover:border-[#9c52fe] hover:scale-[1.02] transition-all text-left relative overflow-hidden" initial={{ y: 20, opacity: 0 }} animate={inViewProjects ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.2 }}>
//                 {p.featured && <span className="absolute top-4 left-4 text-xs font-bold text-[#f2e20b] bg-[#3e1974] px-3 py-1 rounded-full">Featured</span>}
//                 <a href={p.code} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-gray-400 hover:text-[#9c52fe] text-xl"><BsArrowUpRight /></a>
//                 <h3 className="text-2xl text-yellow-400 mt-10">{p.title}</h3>
//                 <p className="text-gray-300 mt-2 leading-relaxed">{p.description}</p>
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {p.technologies.map((t, j) => <span key={j} className="bg-[#2f1860] px-3 py-1 rounded-full text-sm">{t}</span>)}
//                 </div>
//                 <div className="mt-6 flex gap-3">
//                   <a href={p.code} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#9c52fe] rounded-full text-sm hover:bg-[#845ef2]">View Code</a>
//                   <a href={p.live || "#"} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#f2e20b] text-black rounded-full text-sm hover:bg-yellow-400">Live Demo</a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Education */}
//         <motion.section id="education" ref={refEducation} initial="hidden" animate={inViewEducation ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
//           <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9c52fe] to-[#f2e20b] mb-12">Education</h2>
//           <ul className="space-y-6 max-w-3xl mx-auto">
//             {sectionsData.education.map((edu, i) => (
//               <motion.li key={i} className="p-6 bg-[#1a0f3d] rounded-xl shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-[#2f1860] transition-colors" initial={{ x: -50, opacity: 0 }} animate={inViewEducation ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.2 }}>
//                 <div>
//                   <h3 className="text-xl font-semibold">{edu.degree}</h3>
//                   <p className="text-gray-400">{edu.school}</p>
//                   <p className="text-sm text-gray-500">{edu.duration}</p>
//                 </div>
//                 <span className="bg-[#3e1974] px-4 py-1 rounded-full mt-3 sm:mt-0">{edu.gpa}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </motion.section>

//         {/* Certifications */}
//         <motion.section id="certifications" ref={refCerts} initial="hidden" animate={inViewCerts ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
//           <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9c52fe] to-[#f2e20b] mb-12">Certifications</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
//             {sectionsData.certifications.map((cert, i) => (
//               <motion.div key={i} className="p-6 bg-[#1a0f3d] rounded-xl shadow-lg border border-[#2f1860] hover:bg-[#2f1860] hover:scale-105 transition-all" initial={{ scale: 0.8, opacity: 0 }} animate={inViewCerts ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}>
//                 <div className="text-5xl text-[#9c52fe] mb-4 flex justify-center">{cert.icon}</div>
//                 <h3 className="font-semibold">{cert.name}</h3>
//                 <p className="text-gray-400 text-sm">{cert.issuer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Contact */}
//         <motion.section id="contact" ref={refContact} initial="hidden" animate={inViewContact ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
//           <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9c52fe] to-[#f2e20b] mb-12">Contact Me</h2>
//           <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
//             <div className="space-y-6 text-left">
//               <p className="text-gray-300 flex items-center gap-2"><FaPhone /> +91 909606325</p>
//               <p className="text-gray-300 flex items-center gap-2"><FaEnvelope /> maheshdhulipudi45@gmail.com</p>
//             </div>
//             <form className="flex flex-col gap-4">
//               <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-[#1a0f3d] border border-[#2f1860] focus:outline-none focus:border-[#9c52fe]" />
//               <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-[#1a0f3d] border border-[#2f1860] focus:outline-none focus:border-[#9c52fe]" />
//               <textarea placeholder="Message" className="p-3 rounded-lg bg-[#1a0f3d] border border-[#2f1860] focus:outline-none focus:border-[#9c52fe]" rows={4}></textarea>
//               <button type="submit" className="px-6 py-3 bg-[#9c52fe] rounded-full hover:bg-[#845ef2] transition text-white font-semibold">Send Message</button>
//             </form>
//           </div>
//         </motion.section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[#1a0f3d] text-center py-6 border-t border-[#2f1860]">
//         <p className="text-gray-500 text-sm">© 2025 Mahesh Dhulipudi. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;











// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";
// import { useInView } from "react-intersection-observer";

// // Icons
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaDownload,
//   FaPhone,
//   FaEnvelope,
//   FaJava,
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiMysql,
//   SiPython,
//   SiHackerrank,
// } from "react-icons/si";
// import { CgWebsite } from "react-icons/cg";

// const App = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const [refHome, inViewHome] = useInView({ threshold: 0.3 });
//   const [refAbout, inViewAbout] = useInView({ threshold: 0.3 });
//   const [refSkills, inViewSkills] = useInView({ threshold: 0.25 });
//   const [refProjects, inViewProjects] = useInView({ threshold: 0.25 });
//   const [refEducation, inViewEducation] = useInView({ threshold: 0.25 });
//   const [refCerts, inViewCerts] = useInView({ threshold: 0.25 });
//   const [refContact, inViewContact] = useInView({ threshold: 0.25 });

//   useEffect(() => {
//     if (inViewHome) setActiveSection("home");
//     else if (inViewAbout) setActiveSection("about");
//     else if (inViewSkills) setActiveSection("skills");
//     else if (inViewProjects) setActiveSection("projects");
//     else if (inViewEducation) setActiveSection("education");
//     else if (inViewCerts) setActiveSection("certifications");
//     else if (inViewContact) setActiveSection("contact");
//   }, [
//     inViewHome,
//     inViewAbout,
//     inViewSkills,
//     inViewProjects,
//     inViewEducation,
//     inViewCerts,
//     inViewContact,
//   ]);

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
//   };

//   const sectionsData = {
//     nav: ["home", "about", "skills", "projects", "education", "certifications", "contact"],
//     skills: [
//       { name: "JavaScript", icon: <SiJavascript /> },
//       { name: "React.js", icon: <SiReact /> },
//       { name: "Node.js", icon: <SiNodedotjs /> },
//       { name: "Express.js", icon: <SiExpress /> },
//       { name: "MongoDB", icon: <SiMongodb /> },
//       { name: "MySQL", icon: <SiMysql /> },
//       { name: "Python", icon: <SiPython /> },
//       { name: "Java", icon: <FaJava /> },
//     ],
//     projects: [
//       {
//         name: "CampusFix",
//         description:
//           "MERN app for reporting and tracking campus issues. JWT auth, notifications and CRUD operations.",
//         code: "https://github.com/maheshdhulipudi45/campus-fix",
//         demo: "",
//       },
//       {
//         name: "SportsInfo Dashboard",
//         description:
//           "React dashboard for live sports updates using external APIs, filtering and search.",
//         code: "https://github.com/maheshdhulipudi45/sports-info",
//         demo: "",
//       },
//     ],
//     education: [
//       {
//         title: "MCA",
//         school: "Aditya College Of Engineering",
//         duration: "2024 – 2026",
//         cgpa: "CGPA: 7.33",
//       },
//       {
//         title: "BSc",
//         school: "Aditya Degree College",
//         duration: "2021 – 2024",
//         cgpa: "CGPA: 7.77",
//       },
//     ],
//     certifications: [
//       { name: "Full Stack Development", issuer: "Technical Hub", icon: <CgWebsite /> },
//       { name: "HTML, CSS, JS", issuer: "Appex Planet", icon: <SiJavascript /> },
//       { name: "JS Intermediate", issuer: "HackerRank", icon: <SiHackerrank /> },
//       { name: "Node.js Intermediate", issuer: "HackerRank", icon: <SiNodedotjs /> },
//     ],
//   };

//   return (
//     <div className="bg-[#071026] text-white min-h-screen font-sans">
//       {/* NAV */}
//       <nav className="fixed top-0 w-full z-50 bg-[#071026]/60 backdrop-blur-md border-b border-[#12203a]/40">
//         <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
//           <div className="flex items-center gap-3">
//             <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]">
//               Mahesh
//             </div>
//           </div>

//           <ul className="hidden md:flex gap-8 text-gray-300">
//             {sectionsData.nav.map((id) => (
//               <li key={id}>
//                 <Link
//                   to={id}
//                   smooth
//                   duration={500}
//                   offset={-90}
//                   className={`cursor-pointer hover:text-[#8b5cf6] ${
//                     activeSection === id ? "text-[#8b5cf6] font-semibold" : ""
//                   }`}
//                 >
//                   {id.charAt(0).toUpperCase() + id.slice(1)}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="md:hidden">
//             <button
//               className="text-gray-300 text-2xl"
//               onClick={() => setMenuOpen((s) => !s)}
//               aria-label="menu"
//             >
//               {menuOpen ? <IoMdClose /> : <IoMdMenu />}
//             </button>
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden bg-[#071026]/90 border-t border-[#12203a]">
//             <div className="flex flex-col px-4 py-3 gap-2">
//               {sectionsData.nav.map((id) => (
//                 <Link
//                   key={id}
//                   to={id}
//                   smooth
//                   duration={500}
//                   offset={-90}
//                   className="py-2 text-gray-300 hover:text-[#8b5cf6]"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {id.charAt(0).toUpperCase() + id.slice(1)}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       <main className="pt-24">
//         {/* HOME */}
//         <motion.section
//           id="home"
//           ref={refHome}
//           initial={{ opacity: 0, y: 30 }}
//           animate={inViewHome ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="px-4 py-20 flex flex-col items-center text-center"
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={inViewHome ? { scale: 1, opacity: 1 } : {}}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative"
//           >
//             <div className="rounded-full p-1 glass-border inline-block">
//               <img
//                 src="/profile.png"
//                 alt="Mahesh"
//                 className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover"
//               />
//             </div>
//           </motion.div>

//           <h1 className="mt-6 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]">
//             Hi — I’m <span className="text-white">Mahesh Dhulipudi</span>
//           </h1>

//           <p className="mt-3 text-gray-300 max-w-2xl">
//             MCA graduate • MERN & Python developer. I build responsive, maintainable web apps with clean UI and solid backend.
//           </p>

//           <div className="mt-6 flex gap-3">
//             <a
//               href="https://github.com/maheshdhulipudi45"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="neumorph-btn"
//             >
//               <FaGithub className="text-xl" /> <span className="ml-2 hidden sm:inline">GitHub</span>
//             </a>

//             <a
//               href="https://linkedin.com/in/mahesh-dhulipudi-909606325"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="neumorph-btn"
//             >
//               <FaLinkedin className="text-xl" /> <span className="ml-2 hidden sm:inline">LinkedIn</span>
//             </a>

//             <a href="/maheshdhulipudi.pdf" download className="glass-btn">
//               <FaDownload className="text-lg" />
//               <span className="ml-2">Resume</span>
//             </a>
//           </div>
//         </motion.section>

//         {/* ABOUT */}
//         <motion.section
//           id="about"
//           ref={refAbout}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={inViewAbout ? "visible" : "hidden"}
//           className="px-4 py-16"
//         >
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-center">
//               About Me
//             </h2>

//             <motion.div
//               className="glass-card p-6 rounded-2xl"
//               initial={{ scale: 0.98, opacity: 0 }}
//               animate={inViewAbout ? { scale: 1, opacity: 1 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <p className="text-gray-200 leading-relaxed text-lg">
//                 I’m <strong className="text-[#a78bfa]">Mahesh Dhulipudi</strong>, an MCA graduate with experience building full-stack projects using the MERN stack and Python. I love solving problems and writing readable, testable code. My focus is on building applications that are performant, maintainable, and deliver a great user experience.
//               </p>
//             </motion.div>
//           </div>
//         </motion.section>

//         {/* SKILLS */}
//         <motion.section
//           id="skills"
//           ref={refSkills}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={inViewSkills ? "visible" : "hidden"}
//           className="px-4 py-16"
//         >
//           <div className="max-w-6xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]">
//               Skills
//             </h2>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//               {sectionsData.skills.map((s, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="neumorph-card p-6 rounded-2xl flex flex-col items-center"
//                   whileHover={{ scale: 1.03 }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                 >
//                   <div className="text-4xl mb-3 text-[#8b5cf6]">{s.icon}</div>
//                   <div className="font-semibold">{s.name}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* PROJECTS */}
//         <motion.section
//           id="projects"
//           ref={refProjects}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={inViewProjects ? "visible" : "hidden"}
//           className="px-4 py-16"
//         >
//           <div className="max-w-6xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-center">
//               Projects
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8">
//               {sectionsData.projects.map((p, i) => (
//                 <motion.article
//                   key={i}
//                   className="project-card rounded-2xl overflow-hidden p-6"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={inViewProjects ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: i * 0.12 }}
//                 >
//                   <h3 className="text-2xl font-bold text-[#a78bfa] mb-2">{p.name}</h3>
//                   <p className="text-gray-300 mb-4">{p.description}</p>

//                   <div className="flex flex-wrap gap-3">
//                     <a
//                       href={p.code}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="btn-code flex items-center gap-2"
//                     >
//                       View Code
//                     </a>

//                     {p.demo && (
//                       <a
//                         href={p.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn-demo flex items-center gap-2"
//                       >
//                         Live Demo
//                       </a>
//                     )}
//                   </div>
//                 </motion.article>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* EDUCATION */}
//         <motion.section
//           id="education"
//           ref={refEducation}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={inViewEducation ? "visible" : "hidden"}
//           className="px-4 py-16"
//         >
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-center">
//               Education
//             </h2>

//             <div className="relative pl-8 border-l-2 border-[#8b5cf6]">
//               {sectionsData.education.map((edu, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={inViewEducation ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: idx * 0.12 }}
//                   className="mb-8 relative"
//                 >
//                   <div className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-[#8b5cf6] ring-2 ring-[#071026]" />
//                   <div className="bg-[#0f1724]/60 border border-[#8b5cf6] p-4 rounded-xl">
//                     <div className="flex items-center justify-between">
//                       <h3 className="font-semibold text-[#a78bfa]">{edu.title}</h3>
//                       <span className="text-sm text-gray-400">{edu.duration}</span>
//                     </div>
//                     <p className="text-gray-300 mt-2">{edu.school}</p>
//                     <p className="text-sm mt-2 text-[#8b5cf6]">{edu.cgpa}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* CERTIFICATIONS */}
//         <motion.section
//           id="certifications"
//           ref={refCerts}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={inViewCerts ? "visible" : "hidden"}
//           className="px-4 py-16"
//         >
//           <div className="max-w-6xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-center">
//               Certifications
//             </h2>

//             <div className="grid md:grid-cols-2 gap-6">
//               {sectionsData.certifications.map((c, i) => (
//                 <motion.div
//                   key={i}
//                   className="glass-card p-6 rounded-2xl border border-[#8b5cf6]"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={inViewCerts ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: i * 0.08 }}
//                 >
//                   <div className="text-3xl text-[#8b5cf6] mb-3">{c.icon}</div>
//                   <h4 className="font-semibold">{c.name}</h4>
//                   <p className="text-gray-300 text-sm mt-1">{c.issuer}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* CONTACT */}
//         <motion.section
//           id="contact"
//           ref={refContact}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={inViewContact ? "visible" : "hidden"}
//           className="px-4 py-16"
//         >
//           <div className="max-w-6xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-center">
//               Contact Me
//             </h2>

//             <div className="flex flex-col md:flex-row gap-10">
//               {/* Info */}
//               <div className="flex-1 space-y-6">
//                 <div className="flex items-center gap-3 text-lg">
//                   <FaPhone className="text-[#8b5cf6]" />
//                   <span className="font-bold text-[#a78bfa]">+91 7095322308</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-lg">
//                   <FaEnvelope className="text-[#8b5cf6]" />
//                   <span className="font-bold text-[#a78bfa]">maheshdhulipudi45@gmail.com</span>
//                 </div>

//                 <div className="flex gap-4 mt-6 text-2xl">
//                   <a
//                     href="https://github.com/maheshdhulipudi45"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-[#8b5cf6]"
//                   >
//                     <FaGithub />
//                   </a>
//                   <a
//                     href="https://linkedin.com/in/mahesh-dhulipudi-909606325"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-[#8b5cf6]"
//                   >
//                     <FaLinkedin />
//                   </a>
//                   <a href="https://facebook.com" className="hover:text-[#8b5cf6]">
//                     <FaFacebook />
//                   </a>
//                   <a href="https://twitter.com" className="hover:text-[#8b5cf6]">
//                     <FaTwitter />
//                   </a>
//                   <a href="https://instagram.com" className="hover:text-[#8b5cf6]">
//                     <FaInstagram />
//                   </a>
//                 </div>
//               </div>

//               {/* Form (optional) */}
//               <div className="flex-1 glass-card p-6 rounded-2xl border border-[#8b5cf6]">
//                 <form className="flex flex-col gap-4">
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     className="p-3 rounded-lg bg-[#0f1724]/60 border border-[#8b5cf6] text-white"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="p-3 rounded-lg bg-[#0f1724]/60 border border-[#8b5cf6] text-white"
//                   />
//                   <textarea
//                     placeholder="Your Message"
//                     rows="4"
//                     className="p-3 rounded-lg bg-[#0f1724]/60 border border-[#8b5cf6] text-white"
//                   />
//                   <button
//                     type="submit"
//                     className="mt-2 bg-[#8b5cf6] hover:bg-[#6366f1] text-white p-3 rounded-lg font-semibold"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </motion.section>
//       </main>
//     </div>
//   );
// };

// export default App;




















import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Icons
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin, FaDownload, FaPhone, FaEnvelope, FaJava } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython, SiHackerrank } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

// Assets
import maheshImage from "./assets/mahesh.png";

// Data
const sectionsData = {
  nav: ["home", "about", "skills", "projects", "education", "certifications", "contact"],
  skills: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  projects: [
    {
      title: "CampusFix",
      description: "MERN app for campus issue tracking with real-time notifications & JWT auth.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      code: "https://github.com/maheshdhulipudi45/campus-fix",
      live: "",
      featured: true,
    },
    {
      title: "SportsInfo Dashboard",
      description: "React app showing live sports updates, API integration & filters.",
      technologies: ["React", "REST API", "JavaScript"],
      code: "https://github.com/maheshdhulipudi45/sports-info",
      live: "",
      featured: true,
    },
  ],
  education: [
    { degree: "MCA", school: "Aditya College Of Engineering", duration: "2024 – 2026", gpa: "CGPA: 7.33" },
    { degree: "BSc", school: "Aditya Degree College", duration: "2021 – 2024", gpa: "CGPA: 7.77" },
  ],
  certifications: [
    { name: "Full Stack Development", issuer: "Technical Hub", icon: <CgWebsite /> },
    { name: "HTML, CSS, JS", issuer: "Appex Planet", icon: <SiJavascript /> },
    { name: "JS Intermediate", issuer: "HackerRank", icon: <SiHackerrank /> },
    { name: "Node.js Intermediate", issuer: "HackerRank", icon: <SiNodedotjs /> },
  ],
};

// Animation
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sectionsData.nav.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) current = section;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observers
  const [refAbout, inViewAbout] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [refSkills, inViewSkills] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refProjects, inViewProjects] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refEducation, inViewEducation] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refCerts, inViewCerts] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refContact, inViewContact] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-[#0a0617] text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#0a0617]/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9c52fe] to-[#f704ae]">MD</h1>
          <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
            {sectionsData.nav.map((id) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth
                  duration={500}
                  offset={-80}
                  className={`cursor-pointer transition-colors hover:text-[#9c52fe] ${activeSection === id ? "text-[#f2e20b]" : "text-gray-400"}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <button className="md:hidden text-gray-300 text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-[#0a0617]/90 backdrop-blur-md absolute top-full left-0 w-full flex flex-col gap-4 p-6 text-gray-300 font-medium z-40">
            {sectionsData.nav.map((id) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer transition-colors hover:text-[#9c52fe] ${activeSection === id ? "text-[#770bf2]" : "text-gray-400"}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <main className="pt-24">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 relative">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a1353] via-[#0a0617] to-[#0a0617]"></div>
          <motion.div className="z-10 mt-20 md:mt-0" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5d25a5] to-[#f704ae] drop-shadow-lg">Hi, I'm Mahesh</h1>
            <p className="mt-4 text-gray-300 text-lg max-w-xl leading-relaxed drop-shadow">
              MCA graduate specializing in <span className="text-[#4501ff] font-semibold">MERN STACK</span> and <span className="text-[#4501ff] font-semibold">PYTHON</span>.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/maheshdhulipudi45" target="_blank" className="px-6 py-3 bg-[#2f1860]/60 backdrop-blur-md rounded-full flex items-center gap-2 hover:bg-[#3d2482] transition-all shadow-lg">
                <FaGithub /> GitHub
              </a>
              <a href="https://linkedin.com/in/mahesh-dhulipudi-909606325" target="_blank" className="px-6 py-3 bg-[#4c1d95]/60 backdrop-blur-md rounded-full flex items-center gap-2 hover:bg-[#3e1974] transition-all shadow-lg">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="/Mahesh_Dhulipudi_Resume.pdf" download className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full flex items-center gap-2 hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg">
                <FaDownload /> Resume
              </a>
            </div>
          </motion.div>
          <motion.img src={maheshImage} alt="Mahesh" className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#9c52fe] shadow-xl object-cover mt-12 md:mt-0 md:ml-12 z-10" initial={{ opacity: 0, scale: 0.5, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: "easeOut" }} />
        </section>

        {/* About Section */}
        <motion.section id="about" ref={refAbout} initial="hidden" animate={inViewAbout ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9c52fe] to-[#f2e20b] mb-6">About Me</h2>
          <div className="flex justify-center items-center">
            <div className="p-6 w-3/4 bg-[#19142b]/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#2f1860] hover:border-[#9c52fe] hover:scale-[1.02] transition-all">
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Detail-oriented MCA graduate with a strong foundation in full-stack development. Passionate about building scalable software solutions and solving real-world problems.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section id="skills" ref={refSkills} initial="hidden" animate={inViewSkills ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6d01fa] to-[#ff0faf] mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {sectionsData.skills.map((skill, i) => (
              <motion.div key={i} className="p-6 bg-[#1a0f3d]/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#2f1860] hover:bg-[#2f1860] hover:scale-105 transition-all cursor-pointer" initial={{ y: 20, opacity: 0 }} animate={inViewSkills ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="text-6xl text-[#0695f5] mb-4 flex justify-center">{skill.icon}</div>
                <h3 className="font-semibold text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" ref={refProjects} initial="hidden" animate={inViewProjects ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6403e4] to-[#f20b0b] mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {sectionsData.projects.map((p, i) => (
              <motion.div key={i} className="p-8 bg-[#19142b]/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#2f1860] hover:border-[#9c52fe] hover:scale-[1.02] transition-all text-left relative overflow-hidden" initial={{ y: 20, opacity: 0 }} animate={inViewProjects ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.2 }}>
                {p.featured && <span className="absolute top-4 left-4 text-xs font-bold text-[#f2e20b] bg-[#3e1974] px-3 py-1 rounded-full">Featured</span>}
                <a href={p.code} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-gray-400 hover:text-[#9c52fe] text-xl"><BsArrowUpRight /></a>
                <h3 className="text-2xl text-yellow-400 mt-10">{p.title}</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.technologies.map((t, j) => <span key={j} className="bg-[#2f1860] px-3 py-1 rounded-full text-sm">{t}</span>)}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#9c52fe] rounded-full text-sm hover:bg-[#845ef2] transition">View Code</a>
                  <a href={p.live || "#"} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#f2e20b] text-black rounded-full text-sm hover:bg-yellow-400 transition">Live Demo</a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section id="education" ref={refEducation} initial="hidden" animate={inViewEducation ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9c52fe] to-[#f2e20b] mb-12">Education</h2>
          <ul className="space-y-6 max-w-3xl mx-auto">
            {sectionsData.education.map((edu, i) => (
              <motion.li key={i} className="p-6 bg-[#1a0f3d]/80 backdrop-blur-md rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-[#2f1860] transition-colors" initial={{ x: -50, opacity: 0 }} animate={inViewEducation ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.2 }}>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                </div>
                <span className="bg-[#3e1974] px-4 py-1 rounded-full mt-3 sm:mt-0">{edu.gpa}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Certifications Section */}
        <motion.section id="certifications" ref={refCerts} initial="hidden" animate={inViewCerts ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9c52fe] to-[#f2e20b] mb-12">Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {sectionsData.certifications.map((cert, i) => (
              <motion.div key={i} className="p-6 bg-[#1a0f3d]/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#2f1860] hover:bg-[#2f1860] hover:scale-105 transition-all" initial={{ scale: 0.8, opacity: 0 }} animate={inViewCerts ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="text-5xl text-[#9c52fe] mb-4 flex justify-center">{cert.icon}</div>
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" ref={refContact} initial="hidden" animate={inViewContact ? "visible" : "hidden"} variants={sectionVariants} className="py-20 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9c52fe] to-[#f2e20b] mb-12">Contact Me</h2>
          <form className="flex flex-col gap-4 backdrop-blur-md p-6 rounded-2xl bg-[#1a0f3d]/70 border border-[#2f1860] shadow-lg max-w-2xl mx-auto">
            <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-[#1a0f3d]/80 border border-[#2f1860] focus:outline-none focus:border-[#9c52fe] transition-all"/>
            <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-[#1a0f3d]/80 border border-[#2f1860] focus:outline-none focus:border-[#9c52fe] transition-all"/>
            <textarea placeholder="Message" className="p-3 rounded-lg bg-[#1a0f3d]/80 border border-[#2f1860] focus:outline-none focus:border-[#9c52fe] transition-all" rows={4}></textarea>
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-[#9c52fe] to-[#845ef2] rounded-full hover:from-[#845ef2] hover:to-[#9c52fe] transition-all text-white font-semibold shadow-lg">Send Message</button>
          </form>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a0f3d]/90 text-center py-6 border-t border-[#2f1860] backdrop-blur-md shadow-inner">
        <p className="text-gray-500 text-sm">&copy; 2025 Mahesh Dhulipudi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
