import React from "react";

function PersonalCard() {
  return (
    <div
      className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-black font-quicksand mb-4">
            Outside of work...
          </h2>
          <p className="text-black font-quicksand text-base sm:text-lg leading-relaxed">
            I’m always seeking inspiration from the world around me. Whether it’s hiking through nature, exploring new destinations, or diving into new hobbies, I enjoy using these adventures to spark new ideas that bring fresh perspectives to my design work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalCard;
