// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Header = () => {
  const emailAddress = "kurtisnguyen1234@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <header className="grid grid-cols-[1fr_auto] items-center px-4 sm:px-6 md:px-8 py-2 sm:py-4 bg-lavender font-quicksand text-white text-lg">
      {/* Logo with negative margin to compensate padding */}
      <div className="flex items-center -ml-3 sm:-ml-4"> {/* Adjust negative margin based on your needs */}
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 sm:w-32 sm:h-32 cursor-pointer"
          />
        </Link>
      </div>

      {/* Email button */}
      <button
        onClick={handleEmailClick}
        className="px-6 py-2 bg-black hover:bg-gray-700 text-white font-bold rounded-lg shadow-lg text-lg whitespace-nowrap justify-self-end"
      >
        Email me
      </button>
    </header>
  );
};

export default Header;