import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import nature from "../../assets/nature.jpg";

function Nature() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-lavender">
            <Header />

            {/* Content Container */}
            <div className="flex-grow bg-periwinkle rounded-2xl pt-16 pb-16">
                
                {/* Image and Project Details Section */}
                <div className="mb-12 px-8 sm:px-10 md:px-16">
                    <div className="overflow-hidden rounded-2xl mb-6">
                        <img 
                            src={nature}
                            alt="Nature's Path" 
                            className="w-full h-[800px] object-cover transform scale-95" 
                        />
                    </div>

                    {/* Project Info Below the Image */}
                    <div className="text-left">
                        <h1 className="font-outfit text-5xl sm:text-6xl md:text-7xl text-black font-bold tracking-tight mb-4">
                            Nature's Path
                        </h1>
                        <div className="text-lg md:text-xl text-black space-y-2">
                            <p><strong>Role:</strong> Project Lead</p>
                            <p><strong>Date:</strong> March 2025</p>
                            <p><strong>Duration:</strong> 2 weeks</p>
                            <p><strong>Tools:</strong> React, Figma, Photoshop</p>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="text-center mb-10 px-8 sm:px-10 md:px-16">
                    <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                        Adding content soon
                    </h2>
                    <p className="font-outfit text-lg sm:text-xl text-black opacity-70">
                        This project is a fun website I made with design and development skills to showcase my photo gallery away from social media.
                    </p>
                </div>

                {/* Project Sections */}
                
            </div>

            <Footer />
        </div>
    );
}

export default Nature;
