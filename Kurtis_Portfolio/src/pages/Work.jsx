import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header"; 
import Mockupcraiglist from "../assets/mockupcraiglist.png";
import MockupJukebox from "../assets/MockupJukebox.png";
import { Link } from 'react-router-dom';
import StaticCircle from "../components/Static-Circle";
import CircleLeft from "../components/Circle-Left";

function Work() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true,     // Animation should happen only once
    });
  }, []);

  const projects = [
    {
      label: "Craigslist",
      title: "Website Redesign",
      description: "The Craigslist project is to create a redesigned product that corrects the understanding of having modern UI/UX standards using user research and Figma mockup prototyping",
      imageUrl: Mockupcraiglist,
      path: "/artifacts/craigslist"
    },
    {
      label: "Jukebox", 
      title: "Hypothetical App Launch",
      description: "The Jukebox project is a conceptual app for a karaoke music streaming platform, offering a user-friendly experience and a visually attractive design through functionality. As a team using Waterfall methodology we create assets for an App launch.",
      imageUrl: MockupJukebox,
      path: "/artifacts/jukebox"
    },
    {
      label: "LiveSeeker",
      title: "UX/UI Case Study",
      description: "The LiverSeeker project is to create a design of a hypothetical app that is based on a relevant app today. The chosen app is Ticketmaster with the purpose of this project is to show ways to improve today’s standard of apps.",
      imageUrl: MockupJukebox,
      path: "/artifacts/plateful"
    },
    {
      label: "Water+",
      title: "Hypothetical App Launch",
      description: "Project Water+ is a crowdsourced platform that lets you find and track quality drinking water refill stations wherever you are. This project not only aims to tackle a real-world problem but also serves as a UI/UX design initiative, focusing on creating an intuitive and user-friendly experience. From seamless navigation to visually engaging interfaces, the app prioritizes accessibility and ease of use to ensure users can quickly locate reliable water refill stations.",
      imageUrl: MockupJukebox,
      path: "/artifacts/waterplus"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-lavender font-quicksand">
      <Header />
      <div className="w-full px-4 lg:px-12 mt-10">
        <h1 
          className="font-quicksand text-center mt-5 text-4xl lg:text-6xl font-bold"
          data-aos="fade-down"
        >
          My Work
        </h1>
        <p 
          className="font-quicksand text-center mt-4 text-xl max-w-3xl mx-auto"
          data-aos="fade-down"
        >
          Here's a showcase of my projects and designs. Each piece represents my skills in UX/UI design and front-end development.
        </p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-start px-4 lg:px-12 mt-10">
      {projects.map((project, index) => (
  <div 
    key={index} 
    className={`flex flex-col md:flex-row w-full max-w-6xl mb-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
    data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
  >
    <div 
      className="md:w-1/2 p-6" 
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    >
      {/* Content */}
      {project.label && (
        <span className="bg-black text-white py-2 px-6 rounded-full text-sm font-bold tracking-wider shadow-md uppercase mb-4 inline-block">
          {project.label}
        </span>
      )}
      <h2 className=" font-quicksand text-3xl font-semibold mb-4">{project.title}</h2>
      <p className="font-quicksand text-lg mb-4">{project.description}</p>
      <Link 
        to={project.path} 
        className="font-quicksand inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-periwinkle-500 transition-colors"
      >
        View Project
      </Link>
    </div>
    <div 
      className="md:w-1/2" 
      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
    >
      
       <StaticCircle />
       
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-full object-cover rounded-lg shadow-md" 
      />
    </div>
  </div>
))}
      </div>
    </div>
  );
};

export default Work;
