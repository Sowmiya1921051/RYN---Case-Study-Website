import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0d] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">

        {/* Scrolling/Decorative Text */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl md:text-4xl font-bold tracking-wider">
          <span className="border-white border-2 px-4 py-1">FLOW</span>
          <span className="text-xl">✺</span>
          <span className="border-white border-2 px-4 py-1">FIGMA</span>
          <span className="text-xl">✺</span>
          <span className="border-white border-2 px-4 py-1">DESIGNER</span>
          <span className="text-xl">✺</span>
          <span className="border-white border-2 px-4 py-1">DEVELOPER</span>
        </div>

        {/* Let's Talk Section */}
        <h2 className="text-4xl md:text-5xl font-extrabold">LET’S TALK!</h2>
        <p className="flex items-center justify-center gap-2 text-gray-300 hover:underline cursor-pointer">
          rehanurraihan@gmail.com <FaArrowUpRightFromSquare className="inline-block" />
        </p>

        {/* Footer bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© Rehan Raihan – 2023</p>
          <div className="flex gap-6 mt-4 md:mt-0 justify-center">
            <a href="#" className="hover:text-white">Dribbble</a>
            <a href="#" className="hover:text-white">Behance</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
