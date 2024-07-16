import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-700 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">Feel free to get in touch with me:</p>

        {/* Contact Form */}
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-xl bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            {formSubmitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center">
          <a href="/" target="_blank" rel="noopener noreferrer" className="text-3xl mx-4 hover:text-blue-400 transition-colors duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="text-3xl mx-4 hover:text-blue-400 transition-colors duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer" className="text-3xl mx-4 hover:text-blue-400 transition-colors duration-300">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
