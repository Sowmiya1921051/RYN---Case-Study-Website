import React from 'react';
import robotImage from '../assets/robot1.jpg';

const Robot = () => {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div>
            <img 
              src={robotImage} 
              alt="Futuristic Robot" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-michroma uppercase mb-6">
              The Future of Design
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Our vision for the future is built on the synergy between human creativity and artificial intelligence. We design cutting-edge solutions that are not only visually stunning but also incredibly intuitive.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              This robotic design represents our commitment to innovation, pushing the boundaries of what's possible in the digital realm.
            </p>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Robot; 