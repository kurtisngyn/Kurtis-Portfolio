import React from "react";

function AbtSummary() {
  return (
    <div className="mt-8">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="bg-white mx-auto w-10/12 lg:w-8/12 p-6 sm:p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-6"
      >
        {/* Left Column */}
        <div className="flex-1">
          <p className="text-black font-quicksand text-2xl sm:text-3xl font-bold leading-snug">
            I'm a designer looking forward to making a meaningful impact through my work.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <p className="text-black font-quicksand text-lg sm:text-xl leading-relaxed">
            Based in Vancouver, Canada. I am currently studying at British Columbia Institute of
            Technology to develop intuitive and engaging digital experiences. I find inspiration in
            other creative works, which fuels my own creations, always aiming to add a personal
            touch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AbtSummary;
