import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import nature from "../../assets/nature.jpg";
import NatureOverview from "../../components/Naturepieces/Nature-overview";
import NatureMockup from "../../components/Naturepieces/NatureMockup";
import Naturevid from "../../components/Naturepieces/Naturevid";

function Nature() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-lavender">
            <Header />

            {/* Content Container */}
            <div className="flex-grow bg-periwinkle rounded-2xl px-8 sm:px-8 md:px-10 pt-16 pb-16">
                
                {/* Full-width Hero Image */}
                <div className="mb-10">
                    <img 
                        src={nature}
                        alt="Nature's Path" 
                        className="w-full h-[800px] object-cover " 
                    />
                </div>

                {/* Project Details (below image) */}
                <div className="mb-20  text-left">
                    <h1 className="font-outfit text-6xl sm:text-7xl md:text-8xl text-black font-bold tracking-tight mb-6">
                        Nature's Path
                    </h1>
                    <div className="text-xl md:text-2xl text-black space-y-2">
                        <p><strong>Role:</strong> Project Lead</p>
                        <p><strong>Date:</strong> March 2025</p>
                        <p><strong>Duration:</strong> 2 weeks</p>
                        <p><strong>Tools:</strong> React, Figma, Photoshop</p>
                    </div>
                </div>

                {/* Description Section */}
                <div className="text-center mb-10 px-4 sm:px-8 md:px-16">
                    <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                        Personal photo gallery
                    </h2>
                    <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                        This project is a fun website I made with design and development skills to showcase my photo gallery away from social media.
                    </p>
                </div>

                {/* Project Sections */}
                <NatureOverview />
                <NatureMockup />
                <Naturevid />
            </div>

            <Footer />
        </div>
    );
}

export default Nature;
