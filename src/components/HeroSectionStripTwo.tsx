import React from "react";
import { motion } from "framer-motion";

function HeroSectionStripTwo() {
  return (
    <div className="absolute top-[30px] right-0 w-[600px] h-[600px] z-10">
      <div className="absolute top-[210px] right-[-130px]  w-[800px] h-10 bg-white text-black rotate-45 overflow-x-hidden flex items-center">
        <motion.div
          className="inline-flex gap-5 whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          <span>WEB DEVELOPMENT</span>
          <span className="px-2 text-orange-600">•</span>
          <span>GRAPHICS</span>
          <span className="px-2 text-orange-600">•</span>
          <span>ANIMATION</span>
          <span className="px-2 text-orange-600">•</span>
          <span>UI-UX</span>
          <span className="px-2 text-orange-600">•</span>
          <span>MOTION</span>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSectionStripTwo;
