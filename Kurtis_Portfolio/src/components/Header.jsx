import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Header = () => {
    const emailAddress = "kurtisnguyen1234@gmail.com";
  
    const handleEmailClick = () => {
      window.location.href = `mailto:${emailAddress}`;
    };

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 bg-lavender font-quicksand text-white text-lg">
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-32 h-32 cursor-pointer" 
          />
        </Link>
      </div>

      <button 
        onClick={handleEmailClick} 
        className="px-6 py-3 bg-black hover:bg-gray-700 text-white font-quicksand font-bold rounded-lg shadow-lg w-[130px]"
      >
        Email me
      </button>
    </header>
  );
};

export default Header;
