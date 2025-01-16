import React from "react";


function Featurebanner() {
  return (
    <div className="w-full bg-lavender py-12">
      {/* Section title */}
      <div className="text-center mb-8">
        <h1 className="font-quicksand font-bold text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Featured Projects
        </h1>
      </div>

      {/* Banner */}
      <div className="w-full bg-black py-8">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <h2 className="font-quicksand font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            yi
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Featurebanner;
