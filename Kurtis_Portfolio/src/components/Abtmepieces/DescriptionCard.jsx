import React from "react";
import ImageCarousel from "./ImageCarousel";

function DescriptionCard() {
  return (
    <div className="w-full py-8" data-aos="fade-right">
      <div className="flex w-full gap-8">
        {/* Left Side - Larger Description Card */}
        <div className="w-3/5 p-7 bg-white rounded-2xl shadow-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl text-black font-outfit mb-4">
          a multidisciplinary creative 
          from Vancouver, Canada.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-black font-outfit mt-[100px]">
            I’m always seeking inspiration from the world around me. Whether it’s hiking through nature, exploring new destinations, or diving into new hobbies, I enjoy using these adventures to spark new ideas that bring fresh perspectives to my design work.
          </p>
        </div>

        {/* Right Side - Smaller Image Carousel */}
        <div className="w-2/5">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;
