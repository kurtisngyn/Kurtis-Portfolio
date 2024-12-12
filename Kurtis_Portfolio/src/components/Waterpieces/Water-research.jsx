import React from "react";
import proposedsolution from "../../assets/waterphotos/proposedsolution.jpg";

function Waterresearch() {
    return (
        <div className="bg-lavender py-12">
            <div className="container mx-auto px-4">
                <div className="flex-grow flex flex-col items-center justify-center">

                    <h1 className="mb-4 text-black font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Research Phase
                    </h1>
                    <p className="mb-12 text-black font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-left max-w-3xl text-center">
                    When researching a problem, a sense of discovery and the desire to propose a solution are vital. This process begins with curiosity, leading to deeper insights and innovative ideas. Ultimately, this exploration results in a thoughtful proposal that addresses the core issues and fosters meaningful change. </p>

                    <div className="bg-white text-black shadow-lg rounded-lg p-6 mb-8 w-full flex flex-col items-center">
                        <h2 className="mb-4 font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                            Discovery
                        </h2>
                        <img
                            src={proposedsolution}
                            alt="Water+ Proposed Solution"
                            className="max-w-full h-auto mb-10"
                        />
                    </div>
                </div>
                </div>
                </div>
    );
}

export default Waterresearch;
