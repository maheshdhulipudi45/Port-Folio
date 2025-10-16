// import React from 'react';
// import { FaDownload, FaPhone } from 'react-icons/fa';
// import backgroundImage from '../assets/d.png';
// import profileImage from '../assets/dn.jpg';

// const Hero = () => {
//   return (
//     <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 md:py-0">
      
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 animate-fadeIn"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-70"></div>
//       </div>
      
//       {/* Hero Content */}
//       <div className="relative z-10 px-4 py-10 md:py-0">
        
//         {/* Profile Image */}
//         <div className="flex justify-center mb-6 mt-12 animate-fadeInUp delay-100">
//           <img
//             src={profileImage}
//             alt="Mahesh Dhulipudi"
//             className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white object-cover shadow-lg"
//           />
//         </div>

//         {/* Name */}
//         <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-fadeInUp delay-200">
//           Mahesh Dhulipudi
//         </h1>

//         {/* Title */}
//         <p className="text-lg md:text-xl font-medium text-gray-300 mb-4 animate-fadeInUp delay-300">
//           Full-Stack Developer
//         </p>

//         {/* Description */}
//         <p className="max-w-xs sm:max-w-md mx-auto text-sm md:text-base text-gray-400 leading-relaxed mb-8 animate-fadeInUp delay-400">
//           MCA graduate passionate about building scalable software solutions with MERN Stack. Experienced in creating responsive web applications and solving complex problems.
//         </p>

//         {/* Action Buttons */}
        // <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp delay-500">
        //   <a 
        //     href="/Mahesh_Dhulipudi_Resume.pdf" 
        //     download 
        //     className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-[#0e0e2e] text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
        //   >
        //     <FaDownload className="mr-2" />
        //     Download Resume
        //   </a>
        //   <a 
        //     href="tel:+917658956116" 
        //     className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
        //   >
        //     <FaPhone className="mr-2" />
        //     Get In Touch
        //   </a>
        // </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaPhone } from 'react-icons/fa';
import profileImage from '../assets/Mahesh.jpg'; // Ensure this path is correct

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center bg-[#0d0d16] min-h-screen px-4 py-12"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-purple-400 p-2 transform rotate-6 hover:rotate-0 transition-transform duration-500 mb-8 md:mb-0 md:order-2"
      >
        <img
          src={profileImage}
          alt="Mahesh Dhulipudi"
          className="w-full h-full rounded-full object-cover shadow-2xl"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full md:w-auto relative z-10 p-4 text-center md:text-left md:order-1"
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
        >
          Mahesh Dhulipudi
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl font-medium text-gray-300 mb-4"
        >
          Full-Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto md:mx-0 text-sm md:text-base text-gray-400 leading-relaxed mb-8"
        >
          MCA graduate passionate about building scalable software solutions with MERN Stack.
          Experienced in creating responsive web applications and solving complex problems.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="/Mahesh_Dhulipudi_Resume.pdf"
            download
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-[#0e0e2e] text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>

          <a
            href="tel:+917658956116"
            className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
          >
            <FaPhone className="mr-2" />
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
