import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Left - Logo */}
        <div className="text-xl font-bold mr-8">
          MyLogo
        </div>

        {/* Center - Pages */}
        <ul className="flex-1 flex justify-center space-x-8 text-lg">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>

        {/* Right - Button */}
        <div className="ml-8">
          <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
