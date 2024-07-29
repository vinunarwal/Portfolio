import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ecommerceImage from '../assets/icons/E-commerce.jpg';
import FreeWaterImage from '../assets/icons/Free Water2.jpg';
import colorGameImage from '../assets/icons/color.jpg';
import restaurantImage from '../assets/icons/RastroSS.jpg';
import matrimonialImage from '../assets/icons/Matrimonal4.jpg';
import ReactImage from '../assets/icons/React Site.jpg';
import SightCareImage from '../assets/icons/Sight Care.jpg';

const projects = [
  {
    title: 'Restaurant Management',
    description: 'Developed a comprehensive Restaurant Product Management System using the MERN stack. This application streamlines the management of restaurant products, including inventory tracking, product updates, and efficient order handling. The intuitive interface ensures ease of use for restaurant staff, enhancing productivity and operational efficiency.',
    link: 'https://cloud-billing.vercel.app',
    image: restaurantImage
  },
  {
    title: 'E-commerce Site',
    description: 'Designed a responsive and visually appealing Multi-Mart E-Commerce platform focusing on the UI using ReactJs. This project showcases a front-end experience, including product browsing, search functionality, and a streamlined shopping cart interface. It demonstrates proficiency in modern web design and user experience principles, providing a seamless and engaging shopping experience for users.',
    link: 'https://e-commerce-multimart.vercel.app/',
    image: ecommerceImage
  },
  {
    title: 'Freewater Advertising Platform',
    description: 'Developed a unique Freewater subscription website where users can sign up to receive free water bottles. This project serves a dual purpose: providing free water to users and offering a platform for advertisers to promote their brands by placing labels on the bottles. The site features a user-friendly interface for easy subscription and efficient management of bottle distribution and advertisement placements..',
    link: 'https://free-water-six.vercel.app/',
    image: FreeWaterImage
  },
  {
    title: 'Color Prediction Game',
    description: 'Developed an engaging Color Prediction Game using the MERN stack. This interactive platform allows users to place bets on different numbers or colors, offering the thrill of potential winnings. The site features a user-friendly interface, real-time updates, and secure transaction handling, providing an exciting and safe environment for users to test their luck and enjoy the game.',
    link: 'https://color-selector-one.vercel.app/',
    image: colorGameImage
  },
  {
    title: 'Matrimonial Matchmaking Website',
    description: 'Collaborated with a team to develop a Matrimonial Matchmaking Website. This platform enables users to create detailed profiles, search for potential partners  based on their preferences. It offers advanced search filters and a user-friendly interface to enhance the matchmaking experience, making it easier for individuals to find their ideal life partners.',
    link: 'https://matrimony-five.vercel.app/',
    image: matrimonialImage
  },
  {
    title: 'SightCare E-Commerce Interface',
    description: 'Designed the user interface for SightCare, an e-commerce platform dedicated to selling eyedrops. This project focuses on creating an intuitive and visually appealing shopping experience, featuring easy navigation, product details, and a streamlined checkout process. The UI design ensures users can quickly find and purchase the eye care products they need.',
    link: 'https://sight-care.vercel.app/',
    image: SightCareImage
  },
  {
    title: 'React Project',
    description: 'Developed a  website dedicated to React topics and interview questions. This platform provides a  resource for learners which provide explanations of React concepts, practical examples, and a collection of commonly asked interview questions. The site aims to enhance users understanding of React and help them prepare effectively for technical interviews.',
    link: 'https://react-introduction-lovat.vercel.app/',
    image: ReactImage
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
              <a href={project.link} target='_blank' className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
