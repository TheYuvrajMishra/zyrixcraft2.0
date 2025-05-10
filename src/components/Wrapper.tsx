import { useEffect, useState } from "react"
import HeroSection from "../pages/HeroSection"
import Service from "../pages/Service"
import Footer from "../pages/Footer"
import ClientHome from "../pages/ClientHome"
import Blog from "../pages/Blog"
import PcAnimation from "../pages/PcAnimation"
import Portfolio from "../pages/Portfolio"
function Wrapper() {
  const [overlayOn, setOverlay] = useState(false);
  useEffect(() => {
    console.log(overlayOn)
  },[overlayOn]);

  return (
    <div className=" min-h-screen min-w-screen">
      <HeroSection setOverlay={setOverlay} />
      <Service />
      <PcAnimation />
      <Portfolio />
      {/* <Blog /> */}
      <Footer  setOverlay={setOverlay} />
      {overlayOn &&

        <ClientHome setOverlay={setOverlay} />
      }
    </div>
  )
}

export default Wrapper