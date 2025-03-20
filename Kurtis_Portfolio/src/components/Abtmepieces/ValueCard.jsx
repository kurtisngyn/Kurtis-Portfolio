import React from "react";
import Groupimage from "../../assets/Abtassets/Groupimage.png";

function ValueCard() {
  return (
    <div
      className="w-full mx-auto bg-white mt-2 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row"
      data-aos="fade-right"
    >
      {/* Left Section: Image */}
      <div className="w-full sm:w-1/2">
        <img
          src={Groupimage}
          alt="Illustration of my background"
          className="rounded-lg w-full sm:w-3/4 h-auto mx-auto"
        />
      </div>

      {/* Right Section: Text */}
      <div className="w-full sm:w-1/2 pl-0 sm:pl-6 mt-6 sm:mt-0">
        <h2 className="mt-8 font-outfit text-2xl sm:text-2xl md:text-4xl text-black font-bold tracking-tight">
          values
        </h2>
        <div className="text-lg sm:text-xl md:text-2xl text-black font-outfit mt-[30px]">
          <p className="mb-6">
            I deeply value <strong>communication</strong> and the <strong>connections</strong> we build through shared experiences.
          </p>
          <p className="mb-6">
            Whether it's through meaningful conversations, collaborating on creative projects, or simply spending time with others, I believe strong relationships are the foundation of impactful work.
          </p>
          <p className="mb-6">
            I'm passionate about genuine connections and using design as a tool to bring people together, solve problems, and create memorable experiences. I'm always eager to learn from others and grow through collaboration while.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ValueCard;