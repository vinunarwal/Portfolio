import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import htmlIcon from '../assets/icons/htmlLogo.png';
import cssIcon from '../assets/icons/cssLogo.png';
import javascriptIcon from '../assets/icons/jsLogo.jpg';
import reactIcon from '../assets/icons/reactLogo.png';
import nodejsIcon from '../assets/icons/node-logo.png';
import mongodbIcon from '../assets/icons/MongoDb-Logo.png';
import gitIcon from '../assets/icons/githublogo.png';
import tailwindIcon from '../assets/icons/tailwindLogo.jpeg';

const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="bg-gray-100 py-10 px-5 md:py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
              data-aos="fade-up" 
            >
              <div className="w-20 md:w-24 h-20 md:h-24 mb-4">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
