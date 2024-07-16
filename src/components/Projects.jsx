import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ecommerceImage from '../assets/icons/E-commerce.jpg';
import FreeWaterImage from '../assets/icons/Free Water2.jpg';
import colorGameImage from '../assets/icons/color.jpg';
import restaurantImage from '../assets/icons/RastroSS.jpg';
import matrimonialImage from '../assets/icons/Matrimonal4.jpg';

const projects = [
  {
    title: 'Restaurant Management',
    description: 'A system for managing restaurant operations.',
    link: 'https://cloud-billing.vercel.app',
    image: restaurantImage
  },
  {
    title: 'E-commerce Site',
    description: 'An online store with full functionality.',
    link: 'https://e-commerce-multimart.vercel.app/',
    image: ecommerceImage
  },
  {
    title: 'Free Water Project',
    description: 'A platform to advertise and distribute free water.',
    link: 'https://free-water-six.vercel.app/',
    image: FreeWaterImage
  },
  {
    title: 'Color Prediction Game',
    description: 'A fun game for predicting colors.',
    link: 'https://color-selector-one.vercel.app/',
    image: colorGameImage
  },
  {
    title: 'Matrimonial Site',
    description: 'A website for matching potential life partners.',
    link: 'https://matrimony-five.vercel.app/',
    image: matrimonialImage
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="p-8 md:p-20 bg-gradient-to-r from-white to-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              data-aos="zoom-in"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-md h-64 w-full"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-lg mb-4 text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
