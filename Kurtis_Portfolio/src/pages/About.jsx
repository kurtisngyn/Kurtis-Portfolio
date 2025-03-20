import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Abtmain from "../components/Abtmepieces/Abtmain";
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

    // Always start at the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow bg-periwinkle rounded-2xl -mt-3 -mb-10 px-4 sm:px-6 md:px-8 pt-16">
        {/* About Me Section */}
        <div className="flex items-center justify-between mb-10">
        <h1
data-aos="fade-right"
className="font-outfit text-4xl sm:text-5xl md:text-7 xl text-black font-bold tracking-tight"
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
            className="px-6 py-2 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Resume
          </button>
        </div>

        {/* Main Content Sections */}
        <div className="flex flex-col items-center mb-20">
          {/* <Abtmain /> */}
          <DescriptionCard />
          <ToolCard />
          <ValueCard />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
