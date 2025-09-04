import React from "react";
import { Link, useLocation } from "react-router-dom";
import AnimatedLogo from "../components/AnimatedLogo";

const Header = () => {
  const location = useLocation();

  return (
    <header className="grid grid-cols-[1fr_auto] items-center px-4 sm:px-6 md:px-8 py-2 sm:py-4 font-quicksand text-lg">
      {/* Logo */}
      <div className="flex items-center -ml-3 sm:-ml-4">
        <Link to="/">
          <AnimatedLogo />
        </Link>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4 font-bold text-2xl">
          <li>
            <Link
              to="/"
              className={`font-sans transition duration-300 px-4 py-2 ${
                location.pathname === "/"
                  ? "text-black"
                  : "text-black hover:text-gray-600"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`font-sans transition duration-300 px-4 py-2 ${
                location.pathname === "/about"
                  ? "text-black"
                  : "text-black hover:text-gray-600"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={`font-sans transition duration-300 px-4 py-2 ${
                location.pathname === "/work"
                  ? "text-black"
                  : "text-black hover:text-gray-600"
              }`}
            >
              Work
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
