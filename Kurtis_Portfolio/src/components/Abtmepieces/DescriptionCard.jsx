import React from "react";
import ImageCarousel from "./ImageCarousel";

function DescriptionCard() {
  return (
    <div
      className="flex justify-center gap-10 rounded-lg"
      data-aos="fade-up"
    >
      <div className="flex p-10 rounded-2xl  gap-5">
        <div className="flex-1 p-7 bg-white rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-black font-quicksand mb-4">
            Outside of work...
          </h2>
          <p className="text-black font-quicksand text-base sm:text-lg leading-relaxed">
            I’m always seeking inspiration from the world around me. Whether it’s hiking through nature, exploring new destinations, or diving into new hobbies, I enjoy using these adventures to spark new ideas that bring fresh perspectives to my design work.
          </p>
        </div>
        <div className="flex-1">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;