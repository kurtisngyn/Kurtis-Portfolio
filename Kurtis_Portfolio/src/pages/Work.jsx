import React from "react";
import Header from "../components/Header"; 

const Work = () => {
  return (
    <div className="flex flex-col min-h-screen bg-lavendar">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center px-4 lg:px-12">
        <div className="w-full max-w-7xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">My Work</h1>
          <p className="text-xl mb-8">
            Here's a showcase of my projects and designs. Each piece represents my skills in UX/UI design and front-end development.
          </p>
          
          {/* Project Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* project card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Project Title</h2>
              <p className="mb-4">Short description of the project goes here.</p>
              <a href="#" className="text-periwinkle-500 hover:underline">View Project</a>
            </div>
            
            {/* Add more project cards...*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;