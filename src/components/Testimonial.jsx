import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Profile from '../assets/Profile.png'

const Testimonial = () => {
  return (
    <section className="bg-[#0b0b0d] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center">
          <span className="mr-2">✺</span>What they say
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-60">
          {/* Left */}
          <div className="flex items-center gap-4">
            <img
              src={Profile} // replace with your image path
              alt="User"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">Floyd Miles</h3>
              <p className="text-sm text-gray-400">eBay</p>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex-1">
            <FaQuoteLeft className="absolute text-[70px] text-gray-600 opacity-20 -top-6 -left-6" />
            <p className="text-lg leading-relaxed z-10 relative">
              Synergy's resume builder is fantastic. It helped me create a professional resume
              that stood out to employers. Synergy's resume builder is fantastic. It helped me
              create a professional resume that stood out to employers.
            </p>

            {/* Arrows */}
            <div className="flex gap-4 mt-6">
              <button className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300">
                <FaArrowLeft />
              </button>
              <button className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300">
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
