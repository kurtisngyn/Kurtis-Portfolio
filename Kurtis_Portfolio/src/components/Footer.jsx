import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ logo, onEmailClick }) => {
  return (
    <footer className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 bg-black font-quicksand text-white text-lg">
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-32 h-32 cursor-pointer" 
          />
        </Link>
      </div>

      <button 
        onClick={onEmailClick} 
        className="px-6 py-3 bg-black hover:bg-gray-700 text-white font-quicksand font-bold rounded-lg shadow-lg w-[130px]"
      >
        Email me
      </button>
    </footer>
  );
};

export default Footer;
