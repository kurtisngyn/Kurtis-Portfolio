import React from "react";
import CraigslistEmblem from "../assets/CraigslistEmblem.svg";

function CraiglistHeader() {
    return (
        <div className="flex-grow flex items-center justify-center px-4 lg:px-6 my-6 mx-50">
            <div className="bg-white rounded-lg p-4 shadow-md px-4 lg:px-6">
                <h1 className="font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex items-center">
                    Case Study
                    <img src={CraigslistEmblem} alt="Craigslist Emblem" className="ml-4 h-12 w-auto sm:h-16 md:h-20 lg:h-24" />
                </h1>
            </div>
        </div>
    );
}

export default CraiglistHeader;