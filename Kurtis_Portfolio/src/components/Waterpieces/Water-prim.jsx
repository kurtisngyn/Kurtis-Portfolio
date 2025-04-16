import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import textstyles from "../../assets/waterphotos/Textstyles.png";
import colours from "../../assets/waterphotos/colors.png";
import uicomponents from "../../assets/waterphotos/Uicomponent.png";

function Waterprimitives() {
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
                    Primitives
                </h2>
                <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                    The basic units of design, like colors, typography styles, spacing values, and basic layout structures.
                </h3>

                <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
                    {/* Left: Textstyles Card */}
                    <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-6">
                        <img src={textstyles} alt="Text Styles" className="w-full rounded-2xl h-auto mb-4" />
                        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-2">
                            Effective typography guides users through content, establishes hierarchy, and reinforces brand identity. By being consistent, having primitives helps transform to the final product design by having reasoning for each choice.
                        </p>
                    </div>

                    {/* Right: Colours & UI Components in a Card */}
                    <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
                        <img src={colours} alt="Colours" className="w-full rounded-2xl h-auto" />
                        <img src={uicomponents} alt="UI Components" className="w-full rounded-2xl h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Waterprimitives;
