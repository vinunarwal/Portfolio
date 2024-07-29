import React from 'react';
import { Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import PortfoilioTitle from '../assets/icons/portfolio_title.png';

const Navbar = () => {
  return (
    <Menu as="nav" className="bg-gray-900 fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="">
              <img src={PortfoilioTitle} className="h-12" alt="" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-300 text-lg hover:text-white hover:bg-gray-600 hover:border-b-2 hover:border-white hover:shadow-lg p-2 rounded-full hover:px-5">
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 text-lg hover:text-white hover:bg-gray-600 hover:border-b-2 hover:border-white hover:shadow-lg p-2 rounded-full hover:px-5">
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-300 text-lg hover:text-white hover:bg-gray-600 hover:border-b-2 hover:border-white hover:shadow-lg p-2 rounded-full hover:px-5">
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-300 text-lg hover:text-white hover:bg-gray-600 hover:border-b-2 hover:border-white hover:shadow-lg p-2 rounded-full hover:px-5">
                Contact
              </a>
            </div>

            <div className="md:hidden">
              <Menu.Button className="text-gray-300 hover:text-white focus:outline-none transition duration-300">
                {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </Menu.Button>
            </div>
          </div>
          <Menu.Items className="md:hidden bg-gray-800 space-y-1 px-2 pb-3 pt-2">
            <Menu.Item>
              {({ active }) => (
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  className={`${active ? 'bg-gray-700' : 'bg-gray-800'} block text-gray-300 px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                >
                  About
                </motion.a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  className={`${active ? 'bg-gray-700' : 'bg-gray-800'} block text-gray-300 px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                >
                  Projects
                </motion.a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <motion.a
                  href="#skills"
                  whileHover={{ scale: 1.05 }}
                  className={`${active ? 'bg-gray-700' : 'bg-gray-800'} block text-gray-300 px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                >
                  Skills
                </motion.a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className={`${active ? 'bg-gray-700' : 'bg-gray-800'} block text-gray-300 px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                >
                  Contact
                </motion.a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Navbar;
