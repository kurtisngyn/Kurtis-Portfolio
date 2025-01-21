import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Mockupcraiglist from "../assets/mockupcraiglist.jpg";
import MockupJukebox from "../assets/MockupJukebox.jpg";
import MockupPlateful from "../assets/mockupplateful.jpg";
import MockupWaterplus from "../assets/mockupwaterplus.jpg";

function Projectcards() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true,     // Animation should happen only once
    });
    // When opening a new page, always start at the top
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "Craigslist",
      imageUrl: Mockupcraiglist,
      path: "/artifacts/craigslist",
    },
    {
      title: "Jukebox",
      imageUrl: MockupJukebox,
      path: "/artifacts/jukebox",
    },
    {
      title: "Plateful!",
      imageUrl: MockupPlateful,
      path: "/artifacts/plateful",
    },
    {
      title: "Water+",
      imageUrl: MockupWaterplus,
      path: "/artifacts/waterplus",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-lavender font-quicksand">
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
        <h1 
          className="font-quicksand text-black text-center mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold"
          data-aos="fade-down"
        >
          Featured Projects
        </h1>
        <p 
          className="font-quicksand text-black text-center mt-4 text-lg sm:text-xl max-w-3xl mx-auto"
          data-aos="fade-down"
        >
          Explore my featured projects.
        </p>
      </div>

      <div 
  className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-0 mt-10 w-full max-w-7xl mx-auto justify-center"
  data-aos="fade-up"
>

        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.path}
            className="relative group rounded-lg shadow-md overflow-hidden w-full h-[300px]"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white font-quicksand text-2xl font-bold">{project.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projectcards;
