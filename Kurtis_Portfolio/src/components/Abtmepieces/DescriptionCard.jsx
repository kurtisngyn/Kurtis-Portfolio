import React from "react";
import ImageCarousel from "./ImageCarousel";

function DescriptionCard() {
  return (
    <div className="w-full py-8" data-aos="fade-right">
      <div className="flex flex-col md:flex-row w-full gap-8">
        {/* Left Side - Larger Description Card */}
        <div className="w-full md:w-3/5 p-7 bg-white rounded-2xl">
          <h2 className="font-outfit text-2xl sm:text-2xl md:text-4xl text-black font-bold tracking-tight mb-4">
            multidisciplinary creative from Vancouver, Canada.
          </h2>
          <div className="text-lg sm:text-xl md:text-2xl text-black font-outfit mt-[40px]">
            <p className="mb-6">
              I continually draw inspiration from my surroundings 🫡
            </p>
            <p className="mb-6">
              Beyond design, I enjoy immersing myself in nature, music, and creative projects, whether it's capturing moments through photography, curating visuals, or working on collaborative media.
            </p>
            <p>
              The appreciation of art shaped my creativity and inspired me to explore how to design experiences with a purpose.
            </p>
          </div>
        </div>

        {/* Right Side - Smaller Image Carousel */}
        <div className="w-full md:w-2/5">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;