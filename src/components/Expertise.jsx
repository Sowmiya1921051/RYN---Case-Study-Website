import React from 'react';

const Expertise = () => {
  return (
    <section className=" text-white  px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">
          <span className="mr-2">✺</span>Expertise
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-bold mb-2">▪ Branding</h3>
            <p className="text-gray-300 leading-relaxed">
              I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.
            </p>
          </div>

          {/* UI Design */}
          <div>
            <h3 className="text-lg font-bold mb-2 font-sharetech">▪ UI Design</h3>
            <p className="text-gray-300 leading-relaxed">
              I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.
            </p>
          </div>

          {/* UX Design */}
          <div>
            <h3 className="text-lg font-bold mb-2">▪ UX Design</h3>
            <p className="text-gray-300 leading-relaxed">
              I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.
            </p>
          </div>

          {/* Development */}
          <div>
            <h3 className="text-lg font-bold mb-2">▪ Development</h3>
            <p className="text-gray-300 leading-relaxed">
              I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
