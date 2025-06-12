import React from 'react';

const Navbar = () => {
  return (
    <nav className=" text-white px-6 py-4 flex justify-between items-center">
      {/* Left - Logo */}
      <div className="text-xl font-bold">
        MyLogo
      </div>

      {/* Center - Pages */}
      <ul className="hidden md:flex space-x-6 text-lg">
        <li className="hover:text-gray-300 cursor-pointer ">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Services</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>

      {/* Right - Button */}
      <div>
        <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
