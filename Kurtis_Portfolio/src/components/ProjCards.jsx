import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import MockupJukebox from "../assets/MockupJukebox.jpg";
import MockupWaterplus from "../assets/mockupwaterplus.jpg";
import Platefulproduct from "../assets/platefulphotos/platefulproduct.png";

function Projectcards() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "Water+",
      description: "Crowdsourcing water supply app",
      linkText: "A user-driven platform for monitoring water quality",
      imageUrl: MockupWaterplus,
      path: "/artifacts/waterplus",
    },
    {
      title: "Plateful!",
      description: "A Catering Ordering App",
      linkText: "A mobile app to solve the divide between the resturant industry",
      imageUrl: Platefulproduct,
      path: "/artifacts/plateful",
    },
  ];

  return (
    <div className="mt-10 space-y-8 max-w-7xl mb-20 mx-auto px-4 w-full lg:pl-0">
      {projects.map((project, index) => (
        <Link
          key={index}
          to={project.path}
          className="flex flex-col md:flex-row bg-periwinkle rounded-lg shadow-md p-4 md:p-6 w-full items-start gap-4 md:gap-6"
          data-aos="fade-up"
        >
          <div className="flex-1 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-black">
              {project.title}
            </h2>
            <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-semibold font-sans mt-1">
              {project.description}
            </p>
            <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl text-black font-sans mt-1">
              {project.linkText}
            </p>
            <div className="flex flex-wrap justify-start gap-2 mt-4 md:mt-10">
              <span className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">UX/UI</span>
              <span className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">User Research</span>
              <span className="bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">Figma</span>
            </div>
          </div>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full sm:w-80 md:w-96 lg:w-[32rem] h-auto rounded-lg object-cover"
          />
        </Link>
      ))}
    </div>
  );
}

export default Projectcards;