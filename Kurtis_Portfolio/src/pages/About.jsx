import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import AbtSummary from "../components/Abtmepieces/Abtsummary";
import ImageCard from "../components/Abtmepieces/ImageCard";
import PersonalCard from "../components/Abtmepieces/Personalcard";
import ToolSection from "../components/Abtmepieces/ToolSection";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    
    <div className="bg-lavender min-h-screen">
      {/* Header */}
      <Header />

      {/* About Me Title */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 ">
        <h1
          data-aos="fade-up"
          className="text-center mt-5 font-quicksand text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          About Me
        </h1>
      </div>

      {/* Summary Section */}
      <div className="w-full mt-6 px-4 sm:px-6 md:px-8 lg:px-12">
        <AbtSummary />
      </div>

      {/* Middle Section with PersonalCard and ImageCard */}
      <div
        className="w-full mt-12 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-8"
        data-aos="fade-up"
      >
        {/* Personal Card */}
        <div className="flex-1 max-w-lg lg:mr-4">
          <PersonalCard />
        </div>

        {/* Image Card */}
        <div className="flex-1 max-w-lg lg:ml-4">
          <ImageCard />
        </div>
      </div>

      {/* Tool Section */}
      <div
        className="w-full mt-16 px-4 sm:px-6 md:px-8 lg:px-12"
        data-aos="fade-up"
      >
        <ToolSection />
      </div>
    </div>
  );
};

export default About;
