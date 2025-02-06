import React from "react";
import { Link } from "react-router-dom";
import Logopurple from "../assets/Logopurple.svg"; // Ensure the path is correct

const Footer = () => {
  // Function to scroll to the top when the logo is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-5 bg-black font-quicksand text-white text-lg rounded-t-3xl">
      
      {/* Email centered on mobile, left on larger screens */}
      <a href="mailto:kurtis@email.com" className="text-white hover:underline mb-3 sm:mb-0">
        kurtis@email.com
      </a>

      {/* Logo centered on mobile, right on larger screens */}
      <div className="flex items-center">
        <img
          src={Logopurple}
          alt="Logo"
          className="w-16 h-16 sm:w-32 sm:h-32 cursor-pointer"
          onClick={scrollToTop} // Calls the scroll function when clicked
        />
      </div>
    </footer>
  );
};

export default Footer;
