import React, { useEffect } from "react";
import Header from "../../components/Header";
import Jukeboxphoto from "../../assets/Jukeboxphotos/Jukeboxphoto.jpg";
import Footer from "../../components/Footer";
import JukeboxOverview from "../../components/Jukeboxpieces/Juke-overview";
import Jukebrainstorm from "../../components/Jukeboxpieces/Juke-brainstorm";
import Jukeprocess from "../../components/Jukeboxpieces/Juke-process";
import Jukemockup from "../../components/Jukeboxpieces/Juke-mockup";

function Jukebox() {
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
            src={Jukeboxphoto}
            alt="Jukebox Intro Photo" 
            className="w-full h-[800px] object-cover rounded-2xl mb-10" 
          />
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="font-outfit text-6xl sm:text-7xl md:text-8xl text-black font-bold tracking-tight mb-4">
              Jukebox
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
            A user-centric music app with a sleek interface
          </h2>
          <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
            A digital jukebox app that focuses on delivering a smooth music experience with a karaoke feature for users to enjoy their favorite songs in a fun and interactive way.
          </p>
        </div>

  
        <JukeboxOverview />
        <Jukebrainstorm />
        <Jukeprocess />
        <Jukemockup />

     
      </div>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Jukebox;
