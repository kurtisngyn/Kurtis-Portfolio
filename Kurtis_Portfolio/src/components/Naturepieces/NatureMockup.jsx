import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function NatureMockup() {
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
                    The Haul
                </h2>
                <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                    This is my Figma slides presentation of the project. It includes the design process, wireframes, showcasing the key features and design choices made throughout the project.
                </h3>
                <div className="w-full">
                    <iframe 
                        className="w-full h-[450px] md:h-[600px] border border-gray-300 rounded-lg" 
                        src="https://embed.figma.com/slides/8ABgGe7l6LNcH6ES6cylxb/Term-Project-Proposal-Web-interaction?node-id=2-30&embed-host=share" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default NatureMockup;
