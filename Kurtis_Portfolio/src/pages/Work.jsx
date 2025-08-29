import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import MockupJukebox from "../assets/MockupJukebox.jpg";
import MockupPlateful from "../assets/mockupplateful.jpg";
import MockupWaterplus from "../assets/mockupwaterplus.jpg";
import nature from "../assets/nature.jpg";
import Tourdeforce from "../assets/Tourdeforce.jpg";

function Work() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    { label: "Tour De Force", title: "Luxury Magazine Booklet", imageUrl: Tourdeforce, path: "/artifacts/TDF", bgColor: "bg-blue-500" },
    { label: "Nature's Path", title: "Photo Gallery Website Design & Dev", imageUrl: nature, path: "/artifacts/nature", bgColor: "bg-blue-500" },
    { label: "Jukebox", title: "Hypothetical App Launch", imageUrl: MockupJukebox, path: "/artifacts/jukebox", bgColor: "bg-orange-500" },
    { label: "Plateful!", title: "Ui Design and UX Strategy", imageUrl: MockupPlateful, path: "/artifacts/plateful", bgColor: "bg-green-500" },
    { label: "Water+", title: "Ui Design and UX Strategy", imageUrl: MockupWaterplus, path: "/artifacts/waterplus", bgColor: "bg-teal-500" },
  ];

  return (
    <div className="flex flex-col min-h-screen"> 
  <Header />

  {/* White background for content */}
  <div className="flex-grow bg-white rounded-t-3xl pt-16 pb-16 px-4 lg:px-20 xl:px-32">
    <div className="text-center mb-12">
      <h1 className="text-black text-4xl lg:text-6xl font-bold" data-aos="fade-down">My Work</h1>
      <p className="text-black text-xl max-w-3xl mx-auto mt-4" data-aos="fade-down">
        A showcase of my UX/UI and front-end projects.
      </p>
    </div>

    {/* GRID CONTAINER */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
      {projects.map((project, index) => (
        <Link 
          to={project.path} 
          key={index} 
          className={`relative overflow-hidden rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 ${project.bgColor}`}
          data-aos="fade-up"
        >
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-30" 
          />
          <div className="relative z-10 flex flex-col justify-center text-left text-white p-6">
            <h2 className="text-3xl font-bold">{project.label}</h2>
            <p className="text-lg mt-2">{project.title}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
  <Footer />
</div>

   
  );
}

export default Work;
