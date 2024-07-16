import React from 'react';
import { motion } from 'framer-motion';
import blueParticle from '../assets/icons/reactLogo.png';
import purpleParticle from '../assets/icons/githublogo.png';
import greenParticle from '../assets/icons/jsLogo.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 p-6 md:p-12 lg:p-20 flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Blue Particle */}
          <motion.div
            className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-blue-400 opacity-20 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{ top: '20%', left: '20%' }}
          >
            <img src={blueParticle} alt="Blue Particle" className="w-full h-full rounded-full opacity-90" />
          </motion.div>
          {/* Purple Particle */}
          <motion.div
            className="absolute w-28 h-28 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-purple-500 opacity-20 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            style={{ top: '40%', right: '15%' }}
          >
            <img src={purpleParticle} alt="Purple Particle" className="w-full h-full rounded-full opacity-30" />
          </motion.div>
          {/* Green Particle */}
          <motion.div
            className="absolute w-32 h-32 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-green-400 opacity-20 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{ bottom: '7%', left: '45%' }}
          >
            <img src={greenParticle} alt="Green Particle" className="w-full h-full rounded-full opacity-30" />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">Hey, I'm Vinu</h1>
        <p className="mt-2 md:mt-4 text-lg md:text-2xl mb-2">A passionate Web Developer</p>
        <p className="text-lg md:text-2xl mb-7">Building Bridges Between Vision and User Interaction</p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 md:mt-8 px-6 py-3 bg-white text-blue-600 rounded-md font-semibold shadow-md"
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
