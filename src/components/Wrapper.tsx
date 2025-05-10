import React, { useState, lazy, Suspense } from "react"
import HeroSection from "../pages/HeroSection"
import Service from "../pages/Service"
import Footer from "../pages/Footer"
import PcAnimation from "../pages/PcAnimation"
import Portfolio from "../pages/Portfolio"

// Lazy load the ClientHome component since it's conditionally rendered
const ClientHome = lazy(() => import("../pages/ClientHome"))

function Wrapper() {
  const [overlayOn, setOverlay] = useState(false);

  return (
    <div className="min-h-screen min-w-screen ">
      <HeroSection setOverlay={setOverlay} />
      <Service />
      <PcAnimation />
      <Portfolio />
      <Footer setOverlay={setOverlay} />
      {overlayOn && (
        <Suspense fallback={<div>Loading...</div>}>
          <ClientHome setOverlay={setOverlay} />
        </Suspense>
      )}
    </div>
  )
}

// Memoize the Wrapper component to prevent unnecessary re-renders
export default React.memo(Wrapper)