import React from "react";
import craigslisthomepage from "../../assets/craigslisthomepage.png";

function Craigslistresearch() {
    return (
        <div className="flex-grow flex flex-col items-center justify-center px-4 lg:px-24">
            <h1 className="mb-4 font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Research Phase
            </h1>
            <div className="flex flex-row items-start justify-start w-full max-w-7xl mx-auto"> {/* Adjusted justify-start */}
                <p className="mb-6 font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-left max-w-3xl mr-8"> {/* Added margin-right */}
                    During this phase, it consisted of research that involved finding flaws of the current design of Craigslist. The process of finding the flaws consisted of prioritizing the level of flaws that came up, with taking valued input from multiple users to make sure it's a credible and worth looking into. From the flaws highlighted, with the user research identifying the flaws, it informed what solutions could be done to imagine the user flow of the new redesigned look.
                </p>
                <img 
                    src={craigslisthomepage} 
                    alt="Craigslist Homepage"
                    className="max-w-full h-auto justify-right" // Removed margin-left for better alignment
                />
            </div>
        </div>
    );
}

export default Craigslistresearch;