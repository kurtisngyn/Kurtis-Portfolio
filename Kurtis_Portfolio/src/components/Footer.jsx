import React from "react";
import Logopurple from "../assets/Logopurple.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black font-outfit text-white rounded-t-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 mt-[-26px]">
      {/* Flex wrapper ensuring both sections align */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        
        {/* Left Section */}
        <div className="flex flex-col self-start">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            let's chat!
          </h2>
          <a
            href="mailto:kurtis@email.com"
            className="text-2xl sm:text-2xl md:text-4xl tracking-tight hover:underline mt-2"
          >
            kurtis@email.com
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center sm:items-end">
          <img
            src={Logopurple}
            alt="Logo"
            className="w-16 h-16 sm:w-24 sm:h-24 cursor-pointer"
            onClick={scrollToTop}
          />
          <p className="text-2xl sm:text-2xl md:text-4xl tracking-tight mt-2 sm:mt-0">
            made in react
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
