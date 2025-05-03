import React from "react";

function HeroSectionStripOne() {
  return (
    <div className="overflow-hidden">
      <div className="absolute flex -left-0 text-xl top-140 text-center text-white -rotate-5 bg-white/10 h-15 w-[100vw] ">
        <div className="mt-4 ml-70 flex">
          <span className="uppercase">Graphic Design</span>{" "}
          <div className="text-[#616183] mr-5 ml-5">●</div>
          <span className="uppercase">UI/UX</span>
          <div className="text-[#616183] mr-5 ml-5">●</div>
          <span className="uppercase">MARKETING</span>
          <div className="text-[#616183] mr-5 ml-5">●</div>
          <span className="uppercase">Web Project</span>
          <div className="text-[#616183] mr-5 ml-5">●</div>
          <span className="uppercase">Animation</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionStripOne;
