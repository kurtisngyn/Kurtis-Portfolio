import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import MockupJukebox from "../assets/MockupJukebox.jpg";
import MockupWaterplus from "../assets/mockupwaterplus.jpg";

function Projectcards() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "Water+",
      description: "music & karaoke streaming app",
      linkText: "a mobile app prototype for music lovers - with user research strategies",
      imageUrl: MockupWaterplus,
      path: "/artifacts/waterplus",
    },
    {
      title: "JukeBox",
      description: "music & karaoke streaming app",
      linkText: "a mobile app prototype for music lovers - with user research strategies",
      imageUrl: MockupJukebox,
      path: "/artifacts/jukebox",
    },
  ];

  return (
    <div className="mt-10 space-y-8 max-w-7xl mb-20 mx-auto w-full ">
      {projects.map((project, index) => (
        <Link
          key={index}
          to={project.path}
          className="flex sm:flex-row bg-periwinkle rounded-lg shadow-md p-4 sm:p-6 w-full items-center sm:items-start gap-4 sm:gap-6"
          data-aos="fade-up"
        >
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-sans text-black">{project.title}</h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-black font-semibold font-sans mt-1">{project.description}</p>
            <p className="text-xl sm:text-2xl lg:text-2xl text-black font-sans mt-1">{project.linkText}</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-6 sm:mt-40">
              <span className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">ux/ui</span>
              <span className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">user research</span>
              <span className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">figma</span>
            </div>
          </div>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-lg object-cover mt-4 sm:mt-0"
          />
        </Link>
      ))}
    </div>
  );
}

export default Projectcards;
