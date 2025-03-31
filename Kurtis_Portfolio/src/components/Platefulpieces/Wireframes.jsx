import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import designassets from "../../assets/platefulphotos/designassets.png";

function PlatefulWireframes() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
         <div className="text-left pl-4 mt-10 mb-10">
                    <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                        Wireframes
                    </h2>
                    <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                       Creating the look & feel of the app to ensure a seamless user experience.
                    </h3>
                    <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit">
                        Starting with creating typography and color palette, I wanted to create a clean and modern look for the app while having a consistent design system. <br></br>This included defining the typography, color palette, and UI components that would be used throughout the app. The design system served as a reference point for the entire design process, ensuring that all elements were cohesive and aligned with the overall vision of the app.
                    </p>
                    <img src={designassets} alt="Discovery Frame" className="max-w-full rounded-2xl h-auto mb-10 mt-10" />
                </div>
    );
}

export default PlatefulWireframes;
