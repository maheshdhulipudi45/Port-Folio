import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Certificates from './Certificates';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  // Optional: for animation/visibility
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    skills: true,
    projects: true,
    experience: true,
    education: true,
    certificates: true,
    contact: true,
  });

  // Optional scroll effect
  useEffect(() => {
    console.log("Home mounted");
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-white">
      <Navbar scrollToSection={scrollToSection} />

      <section id="hero"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects visible={visibleSections.projects} /></section>
      <section id="experience"><Experience visible={visibleSections.experience} /></section>
      <section id="education"><Education visible={visibleSections.education} /></section>
      <section id="certificates"><Certificates visible={visibleSections.certificates} /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
};

export default Home;
