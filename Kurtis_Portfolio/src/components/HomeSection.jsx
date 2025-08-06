import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Arrow from "./Arrow";
import ProjectCarousel from "./ProjectCarousel";

const HomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
  <section className="relative text-center bg-lavender min-h-screen flex flex-col items-center justify-start pt-12 sm:pt-16">

      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2 font-sans">
          Hey, I’m Kurtis
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black font-sans mb-4">
          Product & Brand <br className="hidden sm:block" /> Designer
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-sans">
          Trying to create physical experiences
        </p>
      </div>

    <ProjectCarousel />

      {/* Arrow fade-up too */}
      <div className="mt-[-5px]" data-aos="fade-up" data-aos-delay="400">
        <Arrow />
      </div>
    </section>
  );
};

export default HomeSection;
