import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import StatsSection from "./Components/StatsSection";
import Coursesection from "./Components/Coursesection";
import InstructorsSection from "./Components/InstructorsSection";
import Testimonials from "./Components/Testimonials";
import PricingSection from "./Components/PricingSection";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <StatsSection />
      <Coursesection />
      <InstructorsSection />
      <Testimonials />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Home;
