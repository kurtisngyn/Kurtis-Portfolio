import React from "react";
import ImageCarousel from "./ImageCarousel";

function DescriptionCard() {
  return (
    <div
      className="w-full py-8" // Full width with padding
      data-aos="fade-right"
    >
      <div className="flex w-full gap-8">
        {/* Left Side - Description /} */}
        <div className="w-1/2 p-7 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-black font-outfit mb-4">
            Outside of work...
          </h2>
          <p className="text-black font-outfit text-base sm:text-lg leading-relaxed">
            I’m always seeking inspiration from the world around me. Whether it’s hiking through nature, exploring new destinations, or diving into new hobbies, I enjoy using these adventures to spark new ideas that bring fresh perspectives to my design work.
          </p>
        </div>

        {/* {/ Right Side - Image Carousel */}
        <div className="w-1/2">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;