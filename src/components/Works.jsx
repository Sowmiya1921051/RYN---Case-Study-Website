import React from 'react';
import Img1 from '../assets/Img1.png'; // replace with your actual image path
import Img2 from '../assets/Img2.png'; // replace with your actual image path
import Img3 from '../assets/Img3.png'; // replace with your actual image path

const Works = () => {
    return (
        <section className="bg-[#0e0e0e] text-white py-16 px-4">
            {/* Header Row */}
            <div className="flex justify-between items-center max-w-7xl mx-auto mb-12">
                <h2 className="text-4xl font-bold">
                    <span className="mr-2">✺</span>Works
                </h2>
                <a href="#" className="underline text-sm hover:opacity-80">view all</a>
            </div>

            {/* Work Card */}
            <div className="max-w-7xl mx-auto bg-[#2f2f2f] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src={Img1}
                        alt="Envelope"
                        className="rounded-2xl w-full h-auto object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-left space-y-12">
                    <h3 className="text-3xl font-semibold">Analysis Application</h3>
                    <p className="text-gray-300 leading-relaxed">
                        With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.
                    </p>

                    {/* Tags */}
                    <div className="flex gap-4 flex-wrap mt-4">
                        <span className="border border-white px-4 py-1 rounded-full text-sm">FIGMA</span>
                        <span className="border border-white px-4 py-1 rounded-full text-sm">UX</span>
                    </div>

                    {/* Button */}
                    <div className="pt-6">
                        <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
                            View Case Study
                        </button>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto bg-[#2f2f2f] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 mt-10">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src={Img2}
                        alt="Envelope"
                        className="rounded-2xl w-full h-auto object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-left space-y-12">
                    <h3 className="text-3xl font-semibold">Fortknox Application</h3>
                    <p className="text-gray-300 leading-relaxed">
                        With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.
                    </p>

                    {/* Tags */}
                    <div className="flex gap-4 flex-wrap mt-4">
                        <span className="border border-white px-4 py-1 rounded-full text-sm">MOBILE</span>
                        <span className="border border-white px-4 py-1 rounded-full text-sm">WEB</span>
                    </div>

                    {/* Button */}
                    <div className="pt-6">
                        <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
                            View Case Study
                        </button>
                    </div>
                </div>

            </div>


            <div className="max-w-7xl mx-auto bg-[#2f2f2f] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 mt-10">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src={Img3}
                        alt="Envelope"
                        className="rounded-2xl w-full h-auto object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-left space-y-12">
                    <h3 className="text-3xl font-semibold">Zenocide Application</h3>
                    <p className="text-gray-300 leading-relaxed">
                       With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.
                    </p>

                    {/* Tags */}
                    <div className="flex gap-4 flex-wrap mt-4">
                        <span className="border border-white px-4 py-1 rounded-full text-sm">APP</span>
                        <span className="border border-white px-4 py-1 rounded-full text-sm">WEB</span>
                    </div>

                    {/* Button */}
                    <div className="pt-6">
                        <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
                            View Case Study
                        </button>
                    </div>
                </div>

            </div>


        </section>
    );
};

export default Works;
