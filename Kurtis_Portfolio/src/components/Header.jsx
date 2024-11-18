import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const Header = () => {
  return (
    <header className="flex items-center justify-between px-12 py-2 bg-lavendar font-quicksand text-white text-lg">
      {/* Styling for icon*/}
      <div className="flex items-center space-x-2">
        {/* Wrap the icon with a Link component to route to the home page */}
        <Link to="/">
          <img src="Logo.svg" alt="Logo" className="w-32 h-32 cursor-pointer" />
        </Link>
        {/* <span className="font-semibold text-lg">Designs</span> */}
      </div>

      {/* Button on the right */}
      <button className="px-6 py-3 bg-black hover:bg-gray-700 text-white font-quicksand font-bold rounded-lg shadow-lg w-[130px]">
        Email me
      </button>
    </header>
  );
};

export default Header;
