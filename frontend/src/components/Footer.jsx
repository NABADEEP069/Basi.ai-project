// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-2 mt-6">
      <p>&copy; {new Date().getFullYear()} Patient Health Dashboard. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.linkedin.com/in/nabadeep-kr-das/" className="text-blue-400 hover:underline">Social Media</a>
        <a href="#" className="text-blue-400 hover:underline">About Us</a>
        <a href="#" className="text-blue-400 hover:underline">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
