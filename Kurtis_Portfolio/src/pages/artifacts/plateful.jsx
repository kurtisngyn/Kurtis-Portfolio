import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlatefulOverview from "../../components/Platefulpieces/Overview";
import PlatefulResearch from "../../components/Platefulpieces/Research";
import PlatefulDiscovery from "../../components/Platefulpieces/Discovery";
import PlatefulPrimitives from "../../components/Platefulpieces/Primitives";
import Platefulproduct from "../../assets/platefulphotos/platefulproduct.png";

function Plateful() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-lavender">
      <Header />

      {/* Content Container */}
      <div className="flex-grow bg-periwinkle rounded-2xl px-8 sm:px-8 md:px-10 pt-16 pb-16">
        {/* Image and Project Details Section */}
        <div className="relative mb-20">
          <img 
            src={Platefulproduct}
            alt="Plateful Placeholder" 
            className="w-full h-[800px] object-cover rounded-2xl mb-10" 
          />
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="font-outfit text-6xl sm:text-7xl md:text-8xl text-black font-bold tracking-tight mb-4">
              Plateful
            </h1>
            <div className="text-xl md:text-2xl text-black">
              <p className="mb-2"><strong>Role:</strong> Project Lead</p>
              <p className="mb-2"><strong>Date:</strong> March 2025</p>
              <p className="mb-2"><strong>Duration:</strong> 3 months</p>
              <p className="mb-2"><strong>Tools:</strong> Figma</p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="text-center mb-10">
          <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
            Customizable menus, flexible scheduling, seamless bulk ordering
          </h2>
          <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                     A app focusing on helping the resturant industry with catering and bulk ordering.
                     </p>
        </div>

        {/* Plateful Overview Component */}
        <PlatefulOverview />
        <PlatefulDiscovery />
        <PlatefulResearch />
        <PlatefulPrimitives />
      </div>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Plateful;
