import React from "react";
import Header from "../components/Header";
import Headshot from "../assets/Headshot.png";
import CircleLeft from "../components/Circle-Left";
import CircleRight from "../components/Circle-Right";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareBehance, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-lavendar">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center overflow-hidden px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-8">
          {/* Intro Section */}
          <div className="flex flex-col justify-center lg:w-1/2">
            <h1 className="font-quicksand text-black text-6xl lg:text-8xl font-bold mb-6">
              Hey, I'm <span className="text-periwinkle-500 drop-shadow-lg">Kurtis</span>
            </h1>
            <div className="flex gap-4 mb-6">
              <a href="https://www.linkedin.com/in/kurtisnguyen1/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-4xl lg:text-5xl text-gray-800 hover:text-periwinkle-500" />
              </a>
              <a href="https://www.behance.net" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSquareBehance} className="text-4xl lg:text-5xl text-gray-800 hover:text-periwinkle-500" />
              </a>
              <a href="https://github.com/kurtisngyn" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSquareGithub} className="text-4xl lg:text-5xl text-gray-800 hover:text-periwinkle-500" />
              </a>
            </div>
            <h2 className="text-black text-2xl lg:text-4xl font-semibold">
              A UX/UI designer and front-end developer crafting intuitive, responsive experiences.
            </h2>
          </div>
      
          {/* Image Section */}
          <div className="relative flex justify-center items-center lg:w-1/2">
            <CircleLeft />
            <CircleRight />
            <img
              src={Headshot}
              alt="Kurtis"
              className="w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full z-10 relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;