import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = ({ visible = true }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add toast notification or API call
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className={`py-16 bg-[#0d0d16] text-white transition-opacity duration-1000 transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 mt-7">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Get In Touch
          </h2>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto bg-[#19142b] p-8 rounded-2xl shadow-lg border border-[#2f1860]">
          {/* Contact Info */}
          <div className="space-y-8 p-4">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-300">maheshdhulipudi45@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-cyan-400 text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-300">7658956116</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-300">Amalapuram, Andhra Pradesh</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 text-3xl mt-4">
              <a href="#" className="bg-[#2f1860] p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
                <FaLinkedin />
              </a>
              <a href="#" className="bg-[#2f1860] p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
                <FaGithub />
              </a>
              <a href="#" className="bg-[#2f1860] p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
                <FaTwitter />
              </a>
              <a href="#" className="bg-[#2f1860] p-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-[#2f1860] border border-[#2f1860] rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-[#2f1860] border border-[#2f1860] rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-[#2f1860] border border-[#2f1860] rounded-md shadow-sm p-3 focus:ring-purple-500 focus:border-purple-500 text-white"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
