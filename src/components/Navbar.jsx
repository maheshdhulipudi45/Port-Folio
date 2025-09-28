import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = ['hero', 'skills', 'projects', 'experience', 'education', 'certificates', 'contact'];

  return (
    <header className="flex justify-between items-center p-5 fixed w-full z-50 bg-[#0d0d16] bg-opacity-95">
      <div className="w-11 h-10 md:w-12 md:h-12 bg-[#2f1860] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
          <span className="text-lg md:text-xl font-bold ">MD</span>
        </div>

      <button className="text-white text-2xl md:hidden" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Slide-in sidebar for mobile */}
      <nav
        className={`md:flex md:items-center fixed md:static top-0 left-0 h-screen md:h-auto w-64 md:w-auto bg-[#0d0d16] bg-opacity-95 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 shadow-lg`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 mt-20 md:mt-0 p-5 md:p-0 text-left text-white">
          {links.map(link => (
            <li
              key={link}
              className="py-2 md:py-0 cursor-pointer hover:text-[#00c3ff] transition-colors"
              onClick={() => { scrollToSection(link); setMenuOpen(false); }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
