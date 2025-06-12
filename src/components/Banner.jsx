import React from 'react';

const Banner = () => {
  return (
    <section className="bg-black text-white h-[60vh] flex items-center justify-center text-center">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-mono tracking-widest uppercase text-[#00ffcc]">
          I am a
        </h1>
        <h2 className="text-3xl md:text-4xl font-mono tracking-wider uppercase">
          Freelance Designer
        </h2>
        <h3 className="text-2xl md:text-3xl font-mono tracking-wider uppercase text-gray-300">
          From San Francisco
        </h3>
      </div>
    </section>
  );
};

export default Banner;
