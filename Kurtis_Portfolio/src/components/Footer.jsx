import React from "react";
import { Link } from "react-router-dom";
import Logopurple from "../assets/Logopurple.svg";

const Footer = ({ Logopurple, onEmailClick }) => {
  return (
    <footer className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 bg-black font-quicksand text-white text-lg rounded-t-3xl">
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img 
            src={Logopurple} 
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
