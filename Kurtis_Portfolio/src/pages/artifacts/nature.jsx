import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WaterOverview from "../../components/Waterpieces/Water-overview";
import Waterphoto from "../../assets/waterphotos/waterphoto.jpg";
import WaterDiscovery from "../../components/Waterpieces/Water-discovery";
import WaterResearch from "../../components/Waterpieces/Water-research";
import Waterprimitives from "../../components/Waterpieces/Water-prim";
import Watermockup from "../../components/Waterpieces/Water-mockup";
function Nature() {
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
                        src={Waterphoto}
                        alt="Water+ Placeholder" 
                        className="w-full h-[800px] object-cover rounded-2xl mb-10" 
                    />
                    <div className="absolute bottom-4 left-4 text-left">
                        <h1 className="font-outfit text-6xl sm:text-7xl md:text-8xl text-black font-bold tracking-tight mb-4">
                            Nature's Path
                        </h1>
                        <div className="text-xl md:text-2xl text-black">
                            <p className="mb-2"><strong>Role:</strong> Project Lead</p>
                            <p className="mb-2"><strong>Date:</strong> March 2025</p>
                            <p className="mb-2"><strong>Duration:</strong> 2 weeks</p>
                            <p className="mb-2"><strong>Tools:</strong> React, Figma, Photoshop</p>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="text-center mb-10">
                    <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                        Water source mapping & community engagement
                    </h2>
                    <p className="font-outfit text-lg sm:text-xl text-black opacity-70">
        This project focuses on mapping water sources to empower local communities through collaborative engagement and innovative solutions.
    </p>
                </div>

                {/* Water+ Overview Component */}
                <WaterOverview />
                <WaterDiscovery />
                <WaterResearch />
                <Waterprimitives />
                <Watermockup />
            </div>
            
            {/* Footer Section */}
            <Footer />
        </div>
    );
}

export default Nature;
