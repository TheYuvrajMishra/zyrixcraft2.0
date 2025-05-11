import React, { useState, lazy, Suspense } from "react"
import HeroSection from "../pages/HeroSection"
import Service from "../pages/Service"
import Footer from "../pages/Footer"
import PcAnimation from "../pages/PcAnimation"
import Portfolio from "../pages/Portfolio"




function Wrapper() {
 

  return (
    <div className="min-h-screen min-w-screen ">
      <HeroSection  />
      <Service />
      <PcAnimation />
      <Portfolio />
      <Footer  />
      
    </div>
  )
}

export default React.memo(Wrapper)