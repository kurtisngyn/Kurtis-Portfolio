import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Tourdeforce from "../../assets/TourDeForce.jpg";
import TDFoverview from "../../components/TDFpieces/TDFoverview";


function TDF() {
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
                        src={Tourdeforce}
                        alt="Tour De Force" 
                        className="w-full h-[800px] object-cover " 
                    />
                </div>

                {/* Project Details (below image) */}
                <div className="mb-20  text-left">
                    <h1 className="font-outfit text-6xl sm:text-7xl md:text-8xl text-black font-bold tracking-tight mb-6">
                        Tour De Force
                    </h1>
                    <div className="text-xl md:text-2xl text-black space-y-2">
                        <p><strong>Role:</strong> Project Lead</p>
                        <p><strong>Date:</strong> March 2025</p>
                        <p><strong>Duration:</strong> 2 weeks</p>
                        <p><strong>Tools:</strong> Indesign</p>
                    </div>
                </div>

                {/* Description Section */}
                <div className="text-center mb-10 px-4 sm:px-8 md:px-16">
                    <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                        Luxury Magazine Booklet
                    </h2>
                    <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                        Designed a high-end magazine booklet for a construction company to showcase their building process and craftsmanship. Focused on clean layouts, premium visuals, and a refined tone to reflect the brand’s luxury positioning. The booklet is used as a marketing piece for client presentations and events.
                    </p>
                </div>

                {/* Project Sections */}
                <TDFoverview />
            </div>

            <Footer />
        </div>
    );
}

export default TDF;
