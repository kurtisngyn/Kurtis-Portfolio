import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Plateful() {
     useEffect(() => {
                window.scrollTo(0, 0);
            }, []);

    return (
        <div className="min-h-screen flex flex-col bg-lavender">
      <Header />

      {/* Content Container */}
      <div className="flex-grow bg-periwinkle rounded-2xl px-8 sm:px-8 md:px-10 pt-16 pb-16">
        <div className="grid grid-cols-[1fr_auto] items-center mb-10">
          <h1
            data-aos="fade-right"
            className="font-outfit text-4xl sm:text-5xl md:text-7xl text-black font-bold tracking-tight"
          >
            Water+
          </h1>

         
        </div>

        <div className="flex flex-col items-center mb-20">
          <h1>Transfering the data here!</h1>
        </div>
      </div>
        
        <Footer />
        </div>
        
    );
}

export default Plateful;



