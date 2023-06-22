import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
function LandingPage() {
  return (
    <div>
      <HeroSection />
      <Features />
      <CTA />
      <Testimonials />
    </div>
  );
}

export default LandingPage;
