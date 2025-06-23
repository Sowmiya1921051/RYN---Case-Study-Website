import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Profile from '../assets/Profile.png';

const Testimonial = () => {
  return (
    <section className="bg-[#0b0b0d] text-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14 flex items-center">
          <span className="mr-2 text-xl">✺</span>
          What they say
        </h2>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
          {/* Left Side: Avatar and Info */}
          <div className="flex items-center gap-4">
            <img
              src={Profile}
              alt="Floyd Miles"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">Floyd Miles</h3>
              <p className="text-sm text-gray-400">eBay</p>
            </div>
          </div>

          {/* Right Side: Quote + Arrows */}
          <div className="relative flex-1 max-w-3xl">
            <FaQuoteLeft className="absolute text-[80px] text-gray-600 opacity-20 -top-6 -left-6" />
            <p className="text-lg md:text-xl leading-relaxed pl-10 relative z-10">
              Synergy's resume builder is fantastic. It helped me create a professional resume
              that stood out to employers. Synergy's resume builder is fantastic. It helped me
              create a professional resume that stood out to employers.
            </p>

            {/* Arrows */}
            {/* Arrows */}
<div className="flex justify-center gap-4 mt-10">
  <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition">
    <FaArrowLeft className="text-gray-400" />  {/* Light color */}
  </button>
  <button className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition">
    <FaArrowRight />
  </button>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
