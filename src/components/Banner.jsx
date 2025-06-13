import React from 'react';
import img1 from '../assets/robot1.jpg';
import img2 from '../assets/robot1.jpg';

const Banner = () => {
  return (
    <section className="bg-black text-white py-10 text-center px-4">
      {/* Centered Heading Section */}
      <div className="w-full max-w-5xl mx-auto space-y-6 font-michroma">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase flex flex-wrap justify-center items-center gap-5">
          I am a
          <span className="w-10 h-10 md:w-20 md:h-12 rounded-full overflow-hidden inline-block">
            <img src={img1} alt="robot" className="w-full h-full object-cover" />
          </span>
          Freelance
        </h1>

        <h2 className="text-5xl md:text-6xl font-extrabold uppercase flex flex-wrap justify-center items-center gap-2">
          Designer
          <span className="w-10 h-10 md:w-20 md:h-12 rounded-full overflow-hidden inline-block">
            <img src={img2} alt="robot" className="w-full h-full object-cover" />
          </span>
          From
        </h2>

        <h3 className="text-5xl md:text-6xl font-extrabold uppercase">
          San Francisco
        </h3>
      </div>

      {/* 4 Text Flex Items (Left-Aligned) */}
      <div className="mt-16 max-w-6xl mx-auto text-left px-2">
        <div className="flex flex-wrap gap-8">
          <div className="w-64 mt-10">
            <h4 className="text-xl ">doraDesign</h4>
          </div>
          <div className="w-64 mt-10">
            <h4 className="text-xl font-semibold">Wave</h4>
          </div>
          <div className="w-64 mt-10">
            <h4 className="text-xl font-semibold">SILILA</h4>
          </div>
          <div className="w-64">
            <p>Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
