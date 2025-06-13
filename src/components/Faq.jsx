import React from 'react';

const Faq = () => {
  return (
    <section className="bg-[#0b0b0d] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center">
          <span className="mr-2">✺</span>Frequently asked questions
        </h2>

        {/* Questions */}
        <div className="space-y-10">
          {/* FAQ 1 */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              What is your design process?
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl">
              My design process typically involves four key phases: research, design, prototype, and test. 
              In the research phase, I gather insights about the user and their needs. In the design phase, 
              I create wireframes and visual designs that meet those needs. In the prototype phase, 
              I create interactive models of the design for testing. In the test phase, I collect feedback 
              from users to refine the design.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              What tools and software do you use for UX design?
            </h3>
          </div>

          {/* FAQ 3 */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              How do you measure the success of your UX designs?
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
