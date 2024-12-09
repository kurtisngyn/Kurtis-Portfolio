import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import AbtSummary from "../components/Abtmepieces/Abtsummary";
import ImageCard from "../components/ImageCard";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="bg-lavender min-h-screen flex flex-col items-center overflow-hidden" data-aos="fade-in">
      <div className="flex flex-col w-full">
        <Header />
      </div>
      
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 
          data-aos="fade-up" 
          data-aos-delay="500" 
          className="text-center mt-5 font-quicksand text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          About Me
        </h1>
      </div>

      {/* Square Section */}
    <AbtSummary />
      <ImageCard />
    </div>
  );
};

export default About;