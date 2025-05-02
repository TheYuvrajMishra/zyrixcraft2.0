import React from "react";

function HeroSectionStripOne() {
  return (
    <div className="overflow-hidden">
      <div className="absolute flex -left-1 top-140 text-center text-white -rotate-5 bg-white/10 h-15 w-[102vw] ">
        <span className="uppercase">Graphic Design</span> <div className="text-amber-500 mr-5 ml-5">●</div>
        <span className="uppercase">UI/UX</span><div className="text-amber-500 mr-5 ml-5">●</div>
        <span className="uppercase">MARKETING</span><div className="text-amber-500 mr-5 ml-5">●</div>
        <span className="uppercase">Web Project</span><div className="text-amber-500 mr-5 ml-5">●</div>
        <span className="uppercase">Animation</span>
      </div>
    </div>
  );
}

export default HeroSectionStripOne;
