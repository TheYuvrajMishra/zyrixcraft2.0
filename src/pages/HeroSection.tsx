import HeroSectionStripOne from "../components/HeroSectionStripOne";
const HeroSection = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="space-y-4 text-center">
          <h1 className="text-8xl">
            <span className="text-white">Brand.</span>
            <span className="text-white/60">Design.</span>
            <span className="text-white/60">Product.</span>
          </h1>
          <p className="text-7xl mt-8 text-left text-white font-medium">In-Hous Development.</p>
          <p className="text-7xl mt-8 text-left text-white font-medium">&More</p>
        </div>
        <HeroSectionStripOne />
      </div>
    );
  };
  
  export default HeroSection;
  