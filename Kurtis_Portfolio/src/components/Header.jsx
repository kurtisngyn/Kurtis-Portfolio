import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Header = () => {
  const emailAddress = "kurtisnguyen1234@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <header className="flex items-center justify-between p-2 sm:p-4 bg-lavender font-quicksand text-white text-lg">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 sm:w-32 sm:h-32 cursor-pointer"
          />
        </Link>
      </div>

      <button
        onClick={handleEmailClick}
        className="px-4 py-2 sm:px-6 sm:py-3 bg-black hover:bg-gray-700 text-white font-bold rounded-lg shadow-lg text-sm sm:text-base"
      >
        Email me
      </button>
    </header>
  );
};

export default Header;
