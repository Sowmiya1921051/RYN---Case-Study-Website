import React from 'react';

const experiences = [
  {
    title: 'Lead Product Designer',
    company: 'Fortknox',
    date: 'Mar 2022 - Oct 2023',
  },
  {
    title: 'Intern Designer',
    company: 'OmniSafe',
    date: 'Mar 2022 - Oct 2023',
  },
  {
    title: 'UI Designer',
    company: 'Doradesign',
    date: 'Mar 2022 - Oct 2023',
  },
  {
    title: 'Frontend Developer',
    company: 'OpacityAuthor',
    date: 'Mar 2022 - Oct 2023',
  },
];

const Experience = () => {
  return (
    <section className="text-white py-16 px-4 bg-[#0b0b0d]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10 font-michroma">
          <span className="mr-2">✺</span>Experience
        </h2>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:justify-between border-b border-gray-700 pb-4"
            >
              <div className="text-xl font-medium">{exp.title}</div>
              <div className="text-right mt-2 md:mt-0">
                <div className="font-semibold">{exp.company}</div>
                <div className="text-sm text-gray-400">{exp.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
