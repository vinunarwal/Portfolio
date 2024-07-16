import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="relative p-20 bg-gradient-to-r from-gray-200 to-gray-400 text-gray-900">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg leading-8 mb-6" data-aos="zoom-out">
            Hi there! I'm Vinay, a passionate web developer specializing in the MERN stack. I enjoy crafting clean and intuitive web experiences that bring ideas to life.
          </p>
          <p className="text-lg leading-8 mb-6" data-aos="zoom-out">
            During my internship at KODU, I worked on diverse projects like e-commerce platforms and healthcare solutions, honing my skills in full-stack development.
          </p>
          <p className="text-lg leading-8 mb-6" data-aos="zoom-out">
            Currently, I'm dedicated to building impactful web applications at MetafyApps Pvt Ltd, where I collaborate on innovative projects that push boundaries.
          </p>
          <p className="text-lg leading-8" data-aos="zoom-out">
            Let's connect! I'm eager to discuss how we can collaborate and create meaningful digital experiences together.
          </p>
        </div>
        <div className='pt-6'
          data-aos="flip-right"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none"
          >
            Contact Me
          </a>
        </div>
      </div>

    </section>
  );
};

export default About;
