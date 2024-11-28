import React from "react";

function AbtSummary() {
  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="
        bg-white mt-10 sm:mt-16 md:mt-20 
        mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 
        p-6 sm:p-8 md:p-10
        rounded-lg shadow-lg
        min-h-[200px]
        flex items-start justify-between"
      >

        <p className="text-black font-quicksand text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          I'm a designer looking forward to making a meaningful impact through my work.
        </p>
        <p className="text-black font-quicksand text-lg sm:text-xl md:text-2xl lg:text-3xl ml-4">
          Based in Vancouver, Canada. I am currently studying at British Columbia Institute of Technology to develop intuitive and engaging digital experiences. I find inspiration in other creative works, which fuels my own creations, always aiming to add a personal touch.
        </p>
      </div>
    </div>
  );
}

export default AbtSummary;