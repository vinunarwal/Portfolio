import React from 'react';
import { Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  return (
    <Menu as="nav" className="bg-gray-800 fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">Vinu's Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition duration-300">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition duration-300">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition duration-300">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
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
                <a
                  href="#about"
                  className={`${active ? 'bg-gray-700' : 'bg-gray-800'} block text-gray-300 px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                >
                  About
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#projects"
                  className={`${active ? 'bg-gray-700' : 'bg-gray-800'} block text-gray-300 px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                >
                  Projects
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#skills"
                  className={`${active ? 'bg-gray-700' : 'bg-gray-800'} block text-gray-300 px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                >
                  Skills
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#contact"
                  className={`${active ? 'bg-gray-700' : 'bg-gray-800'} block text-gray-300 px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                >
                  Contact
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Navbar;
