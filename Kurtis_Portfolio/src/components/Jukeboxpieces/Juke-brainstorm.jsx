import React from "react";

import craigslistempathymap from "../../assets/craiglistphotos/craigslistempathymap.png";
import jukeoverview from "../../assets/Jukeboxphotos/jukeoverview.png";


function Jukebrainstorm() {
    return (
        <div className="bg-lavender py-12">
            <div className="container mx-auto px-4">
                <div className="flex-grow flex flex-col items-center justify-center">

                    <h1 className="mb-4 font-quicksand font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Brainstorm Phase
                    </h1>
                    <p className="mb-12 font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-black text-left max-w-3xl text-center">
                    The brainstorming process for creating our hypothetical app was a dynamic and collaborative effort that involved multiple stages of ideation and creativity. We began by gathering our team to discuss the app's purpose and target audience, encouraging each member to share their ideas freely. </p>

                    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full flex flex-col items-center">
                        <h2 className="mb-4 font-quicksand font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                            Jukebox Discovery
                        </h2>
                        <p className="mb-6 font-quicksand text-sm sm:text-base text-black md:text-lg lg:text-xl text-center max-w-3xl">
                        We designed Jukebox to be a dynamic and engaging music streaming platform that caters to the needs of music enthusiasts who value discovery, interaction, and simplicity. By combining innovative tools with a user-friendly design, Jukebox offers a seamless experience that bridges the gap between listening and sharing. Our goal was to create an app that not only delivers high-quality music streaming but also fosters creativity and connection among its users.
                        </p>
                        
                        <img
                            src={jukeoverview}
                            alt="Craigslist Persona"
                            className="max-w-full h-auto mb-10"
                        />
                    </div>


                  
                </div>
            </div>
        </div>
    );
}

export default Jukebrainstorm;


