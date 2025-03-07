import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import AbtSummary from "../components/Abtmepieces/Abtsummary";
import Abtmain from "../components/Abtmepieces/Abtmain";
// import ImageCarousel from "../components/Abtmepieces/ImageCarousel";
import DescriptionCard from "../components/Abtmepieces/DescriptionCard";
import ToolSection from "../components/Abtmepieces/ToolSection";
import Footer from "../components/Footer";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
    // Always start at the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-lavender min-h-screen">
      {/* Header */}
      <Header />

      {/* About Me Title */}
      <div className="w-full px-4 sm:px-6 md:px-8 ">
        <h1
          data-aos="fade-right"
          className="font-outfit mt-5 mb-10   text-4xl sm:text-5xl md:text-6xl text-black font-bold tracking-tight"
        >
          about me
        </h1>
        <div class="rounded-2xl py-10 px-4 flex flex-col items-center bg-periwinkle">
  <Abtmain />
  <DescriptionCard />
</div>
      </div>


      {/* Summary Section */}
      {/* <div className="w-full mt-6 px-4 sm:px-6 md:px-8 lg:px-12">
        <AbtSummary />
      </div> */}

      {/* Image Carousel and PersonalCard Section */}
      {/* <div
        className="w-full mt-12 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-8 max-w-screen-lg mx-auto"
        data-aos="fade-up"
      > */}
        

        {/* Personal Card */}
        {/* <div className="mx-10">
          <DescriptionCard />
        </div>
      </div> */}

      {/* Tool Section */}
      {/* <div
        className="w-full mt-16 px-4 sm:px-6 md:px-8 lg:px-12"
        data-aos="fade-up"
      >
        <ToolSection />
      </div> */}

      {/* margin bottom basically lol */}
      <div className="h-28" />
      <Footer />
    </div>
  );
};

export default About;
