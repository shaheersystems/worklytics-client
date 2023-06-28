import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Header from "../components/Header";
import Footer from "../components/Footer";
function LandingPage() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <Features />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
