import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const Contact = ({ visible = true }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Toast on typing
    if (value.trim() === '') {
      toast.warn(`${name} cannot be empty`, { theme: 'colored' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all fields!', { theme: 'colored' });
      return;
    }

    console.log('Form submitted:', formData);
    toast.success('Message sent successfully!', { theme: 'colored' });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className={`py-16 bg-[#0d0d16] text-white transition-opacity duration-1000 transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <ToastContainer />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-full mx-auto  p-3 rounded-2xl shadow-lg   ">
          {/* Contact Info */}
          <div className="space-y-8 p-6 border-b bg-[#19142b] md:border-b-0 md:border-r border-[#2f1860]  rounded-xl">
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-cyan-400 inline-block pb-2">Contact Information</h3>

            <div className="flex items-center space-x-4 border-l-4 border-cyan-400 pl-3 py-2 rounded-md hover:bg-[#2f1860] transition-all duration-300">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-300 text-1.2xl">maheshdhulipudi45@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-l-4 border-cyan-400 pl-3 py-2 rounded-md hover:bg-[#2f1860] transition-all duration-300">
              <FaPhone className="text-cyan-400 text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-300">7658956116</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-l-4 border-cyan-400 pl-3 py-2 rounded-md hover:bg-[#2f1860] transition-all duration-300">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-300">Amalapuram, Andhra Pradesh</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 text-1.5xl mt-4">
              {[FaLinkedin, FaGithub, FaTwitter, FaEnvelope].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-[#2f1860] p-3 rounded-full border-2 border-[#2f1860] hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-[#19142b] border-2 border-[#2f1860]  rounded-xl">
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-cyan-400 inline-block pb-2">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'message'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-400 capitalize">{field}</label>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="mt-1 block w-full bg-[#2f1860]  border-[#3a1b7e] rounded-lg shadow-sm p-3 focus:ring-cyan-400 focus:border-cyan-400 text-white transition-all duration-300"
                      required
                    />
                  ) : (
                    <textarea
                      id={field}
                      name={field}
                      rows="4"
                      value={formData[field]}
                      onChange={handleChange}
                      className="mt-1 block w-full bg-[#2f1860] border-[#3a1b7e] rounded-lg shadow-sm p-3 focus:ring-cyan-400 focus:border-cyan-400 text-white transition-all duration-300"
                      required
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-gradient-to-r from-blue-400 to-yellow-400 hover:text-black"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
