import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Abtmain from "../components/Abtmepieces/Abtmain";
import DescriptionCard from "../components/Abtmepieces/DescriptionCard";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    // Always start at the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow bg-periwinkle rounded-2xl -mt-3 -mb-10 px-4 sm:px-6 md:px-8 pt-16">
        <h1
          data-aos="fade-right"
          className="font-outfit mt-10 mb-10 text-4xl sm:text-5xl md:text-6xl text-black font-bold tracking-tight"
        >
          about me
        </h1>

        <div className="flex flex-col items-center mb-20">
          <Abtmain />
          <DescriptionCard />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
