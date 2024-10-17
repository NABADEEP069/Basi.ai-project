import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 sm:p-6 mt-auto w-full">
      <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Patient Health Dashboard. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/nabadeep-kr-das/" className="text-blue-400 hover:underline text-sm sm:text-base">
          Social Media
        </a>
        <a href="#" className="text-blue-400 hover:underline text-sm sm:text-base">
          About Us
        </a>
        <a href="#" className="text-blue-400 hover:underline text-sm sm:text-base">
          Contact Us
        </a>
      </div>
    </footer>
  );
}

export default Footer;
