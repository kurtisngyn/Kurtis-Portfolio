import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import AbtSummary from "../components/Abtmepieces/Abtsummary";
import ImageCarousel from "../components/Abtmepieces/ImageCarousel";
import PersonalCard from "../components/Abtmepieces/Personalcard";
import ToolSection from "../components/Abtmepieces/ToolSection";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="bg-lavender min-h-screen">
      {/* Header */}
      <Header />

      {/* About Me Title */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <h1
          data-aos="fade-up"
          className="text-center mt-5 font-quicksand text-4xl sm:text-5xl md:text-6xl text-black font-bold"
        >
          About Me
        </h1>
      </div>

      {/* Summary Section */}
      <div className="w-full mt-6 px-4 sm:px-6 md:px-8 lg:px-12">
        <AbtSummary />
      </div>

      {/* Image Carousel and PersonalCard Section */}
      <div
        className="w-full mt-12 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-8 max-w-screen-lg mx-auto"
        data-aos="fade-up"
      >
        {/* Image Carousel */}
        <div className="lg:w-1/2 w-full max-w-md mx-auto min-h-[300px]">
          <ImageCarousel />
        </div>

        {/* Personal Card */}
        <div className="lg:w-1/2 w-full max-w-md mx-auto flex flex-col justify-between">
          <PersonalCard />
        </div>
      </div>

      {/* Tool Section */}
      <div
        className="w-full mt-16 px-4 sm:px-6 md:px-8 lg:px-12"
        data-aos="fade-up"
      >
        <ToolSection />
      </div>

      {/* margin bottom basically lol */}
      <div className="h-28" />
    </div>
  );
};

export default About;
