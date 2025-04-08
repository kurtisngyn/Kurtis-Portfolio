import React from "react";
import Logopurple from "../assets/Logopurple.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black  font-outfit text-white rounded-t-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 mt-[-26px] pb-32 md:pb-24">
      {/* Flex wrapper ensuring both sections align */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            let's chat!
          </h2>
          <a
            href="mailto:kurtis@email.com"
            className="text-2xl sm:text-2xl md:text-4xl tracking-tight hover:underline mt-2 block"
          >
            kurtis@email.com
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <img
            src={Logopurple}
            alt="Logo"
            className="w-16 h-16 sm:w-24 sm:h-24 cursor-pointer mb-4 md:mb-0"
            onClick={scrollToTop}
          />
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/kurtisnguyen1/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon 
                icon={faLinkedin} 
                className="text-2xl sm:text-3xl text-white hover:text-periwinkle-500 transition-transform duration-300 transform hover:scale-110" 
                alt="LinkedIn profile"
              />
            </a>
            
            <a href="https://github.com/kurtisngyn" target="_blank" rel="noreferrer">
              <FontAwesomeIcon 
                icon={faSquareGithub} 
                className="text-2xl sm:text-3xl text-white hover:text-periwinkle-500 transition-transform duration-300 transform hover:scale-110" 
                alt="GitHub profile"
              />
            </a>

            <a href="https://www.instagram.com/kurtisngyn/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon 
                icon={faSquareInstagram} 
                className="text-2xl sm:text-3xl text-white hover:text-periwinkle-500 transition-transform duration-300 transform hover:scale-110" 
                alt="Instagram profile"
              />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom section with "made in react" and small text */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-white">
        <p className="text-2xl sm:text-2xl md:text-4xl tracking-tight text-center md:text-left mb-4 md:mb-0">
          made with <span className="text-periwinkle-500">React</span>
        </p>
        <div className="text-xs text-center md:text-right">
          <p>designed & developed by Kurtis Nguyen</p>
          <p>&copy; 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
