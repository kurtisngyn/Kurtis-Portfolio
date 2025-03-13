import React from "react";

function Abtvalues() {
  return (
    <div className="w-full py-8" data-aos="fade-right">
      <div className="flex w-full gap-8">
        {/* Left Side - Larger Description Card */}
        <div className="w-3/5 p-7 bg-white rounded-2xl shadow-lg h-[340px] overflow-auto">
          <h2 className="font-outfit text-2xl sm:text-2xl md:text-3xl text-black font-bold tracking-tight mb-4">
          Values
          </h2>
          <div className="text-base sm:text-lg md:text-xl text-black  font-outfit">
            <p className="mb-4 mt-[48px]">
            I deeply value communication and the connections we build through shared experiences.
            </p>
            <p className="mb-4">
            Whether it's through meaningful conversations, collaborating on creative projects, or simply spending time with others, I believe strong relationships are the foundation of impactful work.
            </p>
            <p>
            I'm passionate about fostering genuine connections and using design as a tool to bring people together, solve problems, and create memorable experiences. I'm always eager to learn from others and grow through collaboration.
            </p>
          </div>
        </div>

        {/* Right Side - Another Description Card */}
        <div className="w-3/5 p-7 bg-white rounded-2xl shadow-lg h-[340px] overflow-auto">
          <h2 className="font-outfit text-2xl sm:text-2xl md:text-3xl text-black font-bold tracking-tight mb-4">
            Inspiration
          </h2>
          <div className="text-base sm:text-lg md:text-xl text-black font-outfit">
          <p className="mb-4 mt-[48px]">
              I continually draw inspiration from my surroundings.
            </p>
            <p className="mb-4">
            Through experiences like hiking, traveling to new places, and exploring different hobbies, I cultivate fresh ideas and perspectives that enrich my design work.
            </p>
            <p>
              I'm passionate about crafting meaningful experiences and using design to solve problems, making a positive impact on people's lives and brightening their day. I'm always looking for opportunities to collaborate and learn from others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abtvalues;
