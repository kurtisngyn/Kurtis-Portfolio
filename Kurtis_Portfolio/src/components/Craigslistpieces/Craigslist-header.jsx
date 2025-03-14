import React from "react";
import CraigslistEmblem from "../../assets/craiglistphotos/CraigslistEmblem.svg";

function CraigslistHeader() {
    return (
        <div className="bg-lavender py-12"> 
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md w-full max-w-8xl h-auto relative"> 
                    <div className="p-4 lg:p-6">
                        <h1 className="font-quicksand font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex items-center justify-between">
                            <span>Case Study</span>
                            <img src={CraigslistEmblem} alt="Craigslist Emblem" className="h-12 w-auto sm:h-16 md:h-20 lg:h-24" />
                        </h1>
                    </div>
                    <div className="h-px bg-gray-300 w-full"></div>
                    <div className="p-6 flex justify-between text-black font-quicksand font-semibold text-3xl">
                        <span>Craigslist Redesign</span>
                        <span>Kurtis Nguyen</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CraigslistHeader;