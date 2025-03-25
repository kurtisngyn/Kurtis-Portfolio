import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projectcards from "./ProjCards";

function RecentProjs() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true,     // Animation should happen only once
    });
    // Ensure the page does not auto-scroll to the top on render
  }, []);

  return (
    <div 
      id="recent-projects"  // Add this ID to fix the arrow scroll issue
      className="flex flex-col min-h-screen bg-lavender font-quicksand"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
        <h1 
          className="font-sans text-black tracking-tight text-center mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold"
          data-aos="fade-down"
        >
          Recent Projects
        </h1>
        <p 
          className="font-quicksand text-black text-center mt-4 text-lg sm:text-xl max-w-3xl mx-auto"
          data-aos="fade-down"
        >
          Explore my featured projects.
        </p>
        <Projectcards />
      </div>
    </div>
  );
}

export default RecentProjs;
