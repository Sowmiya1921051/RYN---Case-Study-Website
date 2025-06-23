import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-[#0b0b0d] overflow-hidden py-6 w-full">
      <div className="marquee whitespace-nowrap text-[4rem] font-bold uppercase">
        <span className="mx-8 stroke-text">
          Flow ✺ Figma ✺ Designer ✺ Developer ✺ Flow ✺ Figma ✺ Designer ✺ Developer ✺
        </span>
      </div>
    </div>
  );
};

export default Marquee;
