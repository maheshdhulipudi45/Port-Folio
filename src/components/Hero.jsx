import React from 'react';
import { FaDownload, FaPhone } from 'react-icons/fa';
import backgroundImage from '../assets/d.png';
import profileImage from '../assets/dn.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 md:py-0">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 animate-fadeIn"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 px-4 py-10 md:py-0">
        
        {/* Profile Image */}
        <div className="flex justify-center mb-6 mt-12 animate-fadeInUp delay-100">
          <img
            src={profileImage}
            alt="Mahesh Dhulipudi"
            className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-fadeInUp delay-200">
          Mahesh Dhulipudi
        </h1>

        {/* Title */}
        <p className="text-lg md:text-xl font-medium text-gray-300 mb-4 animate-fadeInUp delay-300">
          Full-Stack Developer
        </p>

        {/* Description */}
        <p className="max-w-xs sm:max-w-md mx-auto text-sm md:text-base text-gray-400 leading-relaxed mb-8 animate-fadeInUp delay-400">
          MCA graduate passionate about building scalable software solutions with MERN Stack. Experienced in creating responsive web applications and solving complex problems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp delay-500">
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
        </div>

      </div>
    </section>
  );
};

export default Hero;
