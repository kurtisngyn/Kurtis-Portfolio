import React from "react";
import Arrow from "./Arrow"; // ✅ make sure path is correct

const HomeSection = () => {
  return (
    <section className="relative text-center bg-lavender min-h-screen flex flex-col items-center justify-start pt-20">
  <div className="max-w-3xl mx-auto">
    <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2 font-sans">
      Hey, I’m Kurtis
    </p>
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black font-sans mb-4">
      Product & Brand <br className="hidden sm:block" /> Designer
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-700 font-sans">
      Trying to create physical experiences
    </p>
  </div>

  {/* Arrow fixed to bottom center */}
<div className="mt-[300px]">
  <Arrow />
</div>


</section>

  );
};

export default HomeSection;
