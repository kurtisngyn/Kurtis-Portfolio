import React from "react";

function Craigslistmockup() {
    return (
        <div className="bg-lavender py-8 sm:py-12">
            <div className="container mx-auto px-4">
                <div className="flex-grow flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-black font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Mockup Phase
                    </h1>
                    <p className="mb-6 text-black font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl">
                    This phase involves creating low-fidelity wireframes to outline the basic structure and layout of key pages, followed by iterative refinements based on usability feedback to a finished high-fidelity prototype.
                    </p>
                    <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-8 w-full mt-8">
                        <div className="flex flex-col items-center justify-start">
                            <iframe 
                                style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
                                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
                                src="https://embed.figma.com/design/j5wL98R7WrJYOboXLl5Tdg/CRAIGLIST-PROTOTYPES?node-id=28-574&embed-host=share" 
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Craigslistmockup;
