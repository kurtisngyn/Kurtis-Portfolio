import React from "react";
import Header from "../components/Header";
import Headshot from "../assets/Headshot.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faLinkedinIn, faSquareBehance, faBehance, faSquareGithub, faGithub } from '@fortawesome/free-brands-svg-icons';




const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="bg-lavendar min-h-screen w-full flex items-center">
        <div className="flex w-full max-w-full px-12 relative">
          {/* Intro h1 */}
          <div className="font-quicksand text-gray-800 text-lg w-1/2">
            <h1 className="text-black text-8xl font-bold mb-[30px]">
              Hey, I'm <span className="text-periwinkle-500 drop-shadow-lg">Kurtis</span>
            </h1>

            <a href="https://www.linkedin.com/in/kurtisnguyen1/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
            </a>
            <a href="https://www.behance.net" target="_blank">
              <FontAwesomeIcon icon={faSquareBehance} className="text-5xl ml-3" />
            </a>
       
            <a href="https://github.com/kurtisngyn" target="_blank">
              <FontAwesomeIcon icon={faSquareGithub} className="text-5xl ml-3" />
            </a>


            <h2 className="text-black text-4xl font-semibold mb-[260px]">
              A UX/UI designer and front-end developer crafting intuitive, responsive experiences.
            </h2>
          </div>


          <div className="w-1/2 flex justify-center items-center relative">
            {/* Bottom left circle*/}
            <div className="absolute w-80 h-80 bg-periwinkle-500 rounded-full bottom- left-44"></div>

            {/* Top right circle*/}
            <div className="absolute w-64 h-64 bg-periwinkle-500 rounded-full top-0 right-52"></div>

            {/* Image circle*/}
            <img
              src={Headshot}
              alt="Kurtis"
              className="w-96 h-96 object-cover rounded-full z-10 mb-[70px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

