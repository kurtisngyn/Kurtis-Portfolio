import React from "react";
import Header from "../components/Header";
import Headshotmin from "../assets/Headshotmin.png";
import CircleLeft from "../components/Circle-Left";
import CircleRight from "../components/Circle-Right";
import Arrow from "../components/Arrow";
import Projectcards from "../components/Projects-Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareBehance, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-lavender">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-8 py-8 lg:py-16">
          {/* Intro Section */}
          <div className="flex flex-col justify-center lg:w-1/2 mt-4 sm:mt-8 lg:mt-0">
            <h1 className="font-quicksand text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6">
              Hey, I'm <span className="text-periwinkle-500 drop-shadow-lg">Kurtis</span>
            </h1>
            <div className="flex gap-4 mb-4 sm:mb-6">
              <a href="https://www.linkedin.com/in/kurtisnguyen1/" target="_blank" rel="noreferrer" aria-label="Visit my LinkedIn profile">
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 hover:text-periwinkle-500 transform hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://www.behance.net" target="_blank" rel="noreferrer" aria-label="Visit my Behance profile">
                <FontAwesomeIcon icon={faSquareBehance} className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 hover:text-periwinkle-500 transform hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://github.com/kurtisngyn" target="_blank" rel="noreferrer" aria-label="Visit my GitHub profile">
                <FontAwesomeIcon icon={faSquareGithub} className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 hover:text-periwinkle-500 transform hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
            <h2 className="font-quicksand text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-semibold">
              A UX/UI designer and front-end developer crafting intuitive, responsive experiences.
            </h2>
          </div>

          {/* Image Section */}
          <div className="relative flex flex-col justify-center items-center lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <CircleLeft />
              <CircleRight />
              <img
                src={Headshotmin}
                alt="Kurtis"
                className="w-full h-full object-cover rounded-full z-10 relative"
              />
            </div>
            <p className="text-center text-black font-bold text-3xl sm:text-4xl lg:text-5xl z-10 relative font-quicksand mt-4">
              UX/UI Designer
            </p>
          </div>
        </div>
      </div>
      <Arrow />
     
      <Projectcards />
    </div>
  );
};

export default Home;