import React from "react";
import Doradesign from '../assets/Doradesign.png'
import Wave from '../assets/wavefun.png'
import Frame from '../assets/Frame.png'
import Hero1 from '../assets/hero-img1.jpg'
import Hero2 from '../assets/hero-img2.png'

export default function HeroBanner() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-2 pt-0 mt-15">
      {/* HERO TEXT */}
      <div className="w-full max-w-6xl flex flex-col gap-6 mt-0 pt-0">
        {/* First Line */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <span className="text-white uppercase font-black tracking-[0.08em] text-2xl md:text-6xl lg:text-7xl font-orbitron">
            I AM A
          </span>
          <span className="inline-flex items-center justify-center rounded-[999px] overflow-hidden bg-white w-24 h-14 md:w-32 md:h-15 mx-0">
            <img
              src={Hero1}
              alt=""
              className="object-cover w-full h-full"
            />
          </span>
          <span className="text-white uppercase font-black tracking-[0.08em] text-2xl md:text-6xl lg:text-7xl font-orbitron">
            FREELANCE
          </span>
        </div>
        {/* Second Line */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <span className="text-white uppercase font-black tracking-[0.08em] text-2xl md:text-6xl lg:text-7xl font-orbitron">
            DESIGNER
          </span>
          <span className="inline-flex items-center justify-center rounded-[999px] overflow-hidden bg-white w-24 h-10 md:w-32 md:h-15 mx-0">
            <img
              src={Hero2}
              alt=""
              className="object-cover w-full h-full"
            />
          </span>
          <span className="text-white uppercase font-black tracking-[0.08em] text-2xl md:text-6xl lg:text-7xl font-orbitron">
            FROM
          </span>
        </div>
        {/* Third Line */}
        <div className="flex justify-center">
          <span className="text-white uppercase font-black tracking-[0.08em] text-2xl md:text-6xl lg:text-7xl font-orbitron">
            SAN FRANCISCO
          </span>
        </div>
      </div>

      {/* LOGOS & INTRO */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center mt-16 gap-8">
        {/* LOGOS */}
        <div className="flex flex-1 justify-evenly items-center w-full md:w-auto gap-8">
          <img src={Doradesign} alt="logo1" className="h-6 md:h-8 opacity-80" />
          <img src={Wave} alt="logo2" className="h-6 md:h-8 opacity-80" />
          <img src={Frame} alt="logo3" className="h-6 md:h-8 opacity-80" />
        </div>
        {/* INTRO TEXT */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Welcome to my portfolio. Here, artistry meets functionality.
            Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </div>
  );
}
