import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import DescriptionCard from "../components/Abtmepieces/DescriptionCard";
import Footer from "../components/Footer";
import ValueCard from "../components/Abtmepieces/ValueCard";
import ToolCard from "../components/Abtmepieces/ToolCard";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-lavender">
      <Header />

      {/* Content Container */}
      <div className="flex-grow bg-periwinkle rounded-2xl px-8 sm:px-8 md:px-10 pt-16 pb-16">
        <div className="grid grid-cols-[1fr_auto] items-center mb-10">
          <h1
            data-aos="fade-right"
            className="font-outfit text-4xl sm:text-5xl md:text-7xl text-black font-bold tracking-tight"
          >
            about me
          </h1>

          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1ps0LRRFwsbk9WS_v4E5My2mJXoguL5hz/view?usp=drive_link",
                "_blank"
              )
            }
            className="px-6 py-2 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-800 transition duration-300 whitespace-nowrap justify-self-end"
          >
            Resume
          </button>
        </div>

        <div className="flex flex-col items-center mb-20">
          <DescriptionCard />
          <ToolCard />
          <ValueCard />
        </div>
      </div>

      {/* Footer placed outside the rounded container */}
    
        <Footer />
      
    </div>
  );
};

export default About;