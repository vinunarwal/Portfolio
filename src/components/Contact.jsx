import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log(result.text);
      setFormSubmitted(true);
      setFormError(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    })
    .catch((error) => {
      console.log(error.text);
      setFormError(true);
      setFormSubmitted(false);
    });
  };

  return (
    <section id="contact" className="ab py-20 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-8">Feel free to get in touch with me:</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
          {formError && (
            <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>
          )}
        </form>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/8307615016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mx-4 hover:text-blue-400 transition-colors duration-300"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/vinu-narwal-6b9a77284/" target="_blank" rel="noopener noreferrer" className="text-3xl mx-4 hover:text-blue-400 transition-colors duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/vinunarwal" target="_blank" rel="noopener noreferrer" className="text-3xl mx-4 hover:text-blue-400 transition-colors duration-300">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
