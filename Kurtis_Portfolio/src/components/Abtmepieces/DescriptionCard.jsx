import React from "react";
import ImageCarousel from "./ImageCarousel";

function DescriptionCard() {
  return (
    <div className="w-full py-8" data-aos="fade-right">
      <div className="flex w-full gap-8">
        {/* Left Side - Larger Description Card */}
        <div className="w-3/5 p-7 bg-white rounded-2xl">
          <h2 className="font-outfit text-2xl sm:text-2xl md:text-4xl text-black font-bold tracking-tight mb-4">
          multidisciplinary creative from Vancouver, Canada. 
          </h2>
          <div className="text-lg sm:text-xl md:text-2xl text-black font-outfit mt-[40px]">
            <p className="mb-8">
              I continually draw inspiration from my surroundings 🫡
            </p>
            <p className="mb-8">
              Through experiences like hiking, traveling to new places, and exploring different hobbies, I cultivate fresh ideas and perspectives that enrich my design work.
            </p>
            <p>
              I'm passionate about crafting meaningful experiences and using design to solve problems, making a positive impact on people's lives and brightening their day. I'm always looking for opportunities to collaborate and learn from others.
            </p>
            
          </div>
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
