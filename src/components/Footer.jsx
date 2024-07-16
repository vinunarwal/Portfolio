import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Vinay's Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
