import React from "react";
import userjourney from "../../assets/waterphotos/userjourney.jpg";

function Watermockup() {
    return (
        <div className="bg-lavender py-12">
                    <div className="container mx-auto px-4">
                        <div className="flex-grow flex flex-col items-center justify-center">
        
                            <h1 className="mb-4 text-black font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                Brainstorm Phase
                            </h1>
                            <p className="mb-12 text-black font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-left max-w-3xl text-center">
                            The brainstorming process for creating a water-sourcing app began with identifying the core problem: the difficulty many individuals face in locating accessible and reliable water refill stations. We began by defining our user personas, including their goals, challenges, and behaviors. </p>
        
                            <div className="bg-white text-black shadow-lg rounded-lg p-6 mb-8 w-full flex flex-col items-center">
                                <h2 className="mb-4 font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                                    User Journey
                                </h2>
                                <p className="mb-6 text-black font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl">
                                A user journey map visualizes the steps a user takes to achieve a goal, highlighting their experiences, emotions, and pain points. It helps identify areas for improving the overall user experience.
                                </p>
                                <img
                                    src={userjourney}
                                    alt="Water+ User Journey"
                                    className="max-w-full h-auto mb-10"
                                />
                            </div>
                        </div>
                        </div>
                        </div>
    );
}

export default Watermockup;

