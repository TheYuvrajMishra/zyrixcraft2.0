import HeroSectionLeftText from "../components/HeroSectionLeftText";
import HeroSectionStripOne from "../components/HeroSectionStripOne";
import HeroSectionStripTwo from "../components/HeroSectionStripTwo";
import HeroSectionTopLeftText from "../components/HeroSectionTopLeftText";
const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
      <div className="space-y-6 text-center">
      <div className="image-cover bg-no-repeat brightness-50 z-1 top-20 left-20 absolute h-200 w-200 bg-[url(../../public/images/ZyrixcraftLogo.webp)]"></div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
          <span className="text-white">Brand.</span>
          <span className="text-white/60">Design.</span>
          <span className="text-white/60">Product.</span>
        </h1>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mt-6 sm:mt-8 text-left text-white font-medium">
          In-House Development.
        </p>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl mt-6 sm:mt-8 text-left text-white font-medium">
          &More
        </p>
      </div>
      <HeroSectionTopLeftText />
      <HeroSectionLeftText/>
      <HeroSectionStripOne />
      <HeroSectionStripTwo />
    </div>
  );
};

export default HeroSection;
