import React from "react";
import Header from "../components/Header"; 

const Work = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project",
      imageUrl: "/path-to-project1-image.jpg", 
    },
    {
      title: "Project 2",
      description: "Description for Project",
      imageUrl: "/path-to-project2-image.jpg", 
    },
    {
      title: "Project 3",
      description: "Description for Project",
      imageUrl: "/path-to-project3-image.jpg", 
    },
    {
      title: "Project 4",
      description: "Description for project",
      imageUrl: "/path-to-project4-image.jpg", 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-lavendar">
      <Header />

      <div className="w-full px-4 lg:px-12 mt-10">
        <h1 className="text-center mt-5 font-quicksand text-4xl lg:text-6xl font-bold">My Work</h1>
        <p className="text-center mt-4 text-xl max-w-3xl mx-auto">
          Here's a showcase of my projects and designs. Each piece represents my skills in UX/UI design and front-end development.
        </p>
      </div>

      <div className="flex-grow flex flex-col items-center justify-start px-4 lg:px-12 mt-10">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col md:flex-row w-full max-w-6xl mb-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
              <p className="text-lg mb-4">{project.description}</p>
              <a href="#" className="text-periwinkle-500 hover:underline">View Project</a>
            </div>
            <div className="md:w-1/2">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Work;