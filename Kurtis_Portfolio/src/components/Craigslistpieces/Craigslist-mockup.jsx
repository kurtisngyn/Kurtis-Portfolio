import React from "react";

function Craigslistmockup() {
    return (
        <div className="flex-grow flex flex-col items-center justify-center">
            <h1 className="mb-4 font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Mockup Phase
            </h1>
            <p className="mb-6 font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-left max-w-3xl text-center">
                During this phase, a finished look for a Craigslist redesign is created in hopes showing the improved UX/UI. This is a high 
            </p>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full mt-8">
                <div className="flex flex-col items-center justify-start">
                    <iframe 
                        style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
                        width="800" 
                        height="450" 
                        src="https://embed.figma.com/design/j5wL98R7WrJYOboXLl5Tdg/CRAIGLIST-PROTOTYPES?node-id=28-574&embed-host=share" 
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}

export default Craigslistmockup;