import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Naturespath from "../../assets/naturephotos/naturespath.mp4";

function Naturevid() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="text-left mt-10 mb-10">
            <div className="relative mt-10 mb-10">
                <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                    Mock up
                </h2>
                <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                In this final stage, wireframes are brought to life through code, translating the visual design into a functional website. <br></br>This coding process builds the interactive elements and overall structure defined in the earlier wireframing phase.
                </h3>

                {/* Video Container */}
                <div className="w-full mb-6">
                    <video 
                        className="w-full h-[450px] md:h-[600px] border border-gray-300 rounded-lg"
                        controls 
                        muted 
                        loop
                    >
                        <source src={Naturespath} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* View Website Button outside the video container */}
                <div className="text-right">
                    <a 
                        href="https://photography.kurtisnguyen.ca/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-black text-white text-lg font-medium font-outfit px-6 py-3 rounded-2xl shadow-md hover:bg-gray-800 transition-colors"
                    >
                        View Website
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Naturevid;
