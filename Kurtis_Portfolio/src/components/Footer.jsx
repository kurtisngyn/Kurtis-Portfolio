import React from "react";
import { Link } from "react-router-dom";
import Logopurple from "../assets/Logopurple.svg"; // Ensure the path is correct

const Footer = () => {
  // Function to scroll to the top when the logo is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-5 bg-black font-quicksand text-white text-lg rounded-t-3xl">

      
      {/* Email on the left */}
      <a href="mailto:kurtis@email.com" className="text-white hover:underline">
        kurtis@email.com
      </a>

      {/* Logo on the right */}
      <div className="flex items-center space-x-2">
        <img
          src={Logopurple}
          alt="Logo"
          className="w-32 h-32 cursor-pointer"
          onClick={scrollToTop} // Calls the scroll function when clicked
        />
      </div>
    </footer>
  );
};

export default Footer;
