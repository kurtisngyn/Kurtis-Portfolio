import React from "react";
import craigslistpersona from "../../assets/craiglistphotos/craigslistpersona.png";
import craigslistempathymap from "../../assets/craiglistphotos/craigslistempathymap.png";


function Craigslistsbrainstorm() {
    return (
        <div className="bg-lavender py-12">
            <div className="container mx-auto px-4">
                <div className="flex-grow flex flex-col items-center justify-center">

                    <h1 className="mb-4 text-black font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Brainstorm Phase
                    </h1>
                    <p className="mb-12 text-black font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-left max-w-3xl text-center">
                    The Craigslist redesign brainstorming phase is a strategic exploration focused on understanding user needs, identifying pain points, and reimagining the platform's user experience. By conducting user research, creating personas, analyzing competitive landscapes, and generating innovative design concepts, the team aims to enhance navigation, improve safety, and create a more intuitive interface while maintaining the platform's core simplicity and functionality. </p>

                    <div className="bg-white text-black shadow-lg rounded-lg p-6 mb-8 w-full flex flex-col items-center">
                        <h2 className="mb-4 font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                            User Persona
                        </h2>
                        <p className="mb-6 text-black font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl">
                            A user persona is a fictional character that represents a user type within a targeted demographic. Creating personas helps to understand users' needs, experiences, behaviors, and goals.
                        </p>
                        <p className="mb-6 font-quicksand text-black text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl">
                            Craigslist offers a versatile platform that caters to two primary user types: sellers looking to profit off goods, and buyers seeking to find specific items or solutions. Here's an example of a user persona.
                        </p>
                        <img
                            src={craigslistpersona}
                            alt="Craigslist Persona"
                            className="max-w-full h-auto mb-10"
                        />
                    </div>


                    {/* Empathy Map Card */}
                    <div className="bg-white text-black shadow-lg rounded-lg p-6 mb-8 w-full flex flex-col items-center">
                        <h2 className="mb-4 font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                            Empathy Map
                        </h2>
                        <p className="mb-6 font-quicksand text-black text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl">
                            An empathy map is a collaborative tool used to gain a deeper insight into customers. It helps teams visualize what users say, think, feel, and do, aiding in understanding their experiences and needs.
                        </p>
                        <img
                            src={craigslistempathymap}
                            alt="Craigslist Empathy Map"
                            className="max-w-full h-auto mb-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Craigslistsbrainstorm;


