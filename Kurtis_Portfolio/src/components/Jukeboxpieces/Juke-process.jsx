import React from "react";
import juketeam from "../../assets/Jukeboxphotos/juketeam.png";
import waterfall from "../../assets/Jukeboxphotos/waterfall.png";

function Jukeprocess() {
    return (
        <div className="bg-lavender py-12">
            <div className="container mx-auto px-4">
                <div className="flex-grow flex flex-col items-center justify-center">

                    <h1 className="mb-4 font-quicksand font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        The Process
                    </h1>
                    <p className="mb-12 font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-black text-left max-w-3xl text-center">
                        Using the waterfall methodology, our team worked step-by-step to create the Jukebox app mockup in Figma. We began by defining goals, features, and deadlines, then moved to the design phase, collaborating on wireframes and visual concepts. </p>

                    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full flex flex-col items-center">
                        <h2 className="mb-4 font-quicksand font-semibold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                            Team Dynamic
                        </h2>
                        <p className="mb-6 font-quicksand text-sm sm:text-base text-black md:text-lg lg:text-xl text-center max-w-3xl">
                            By assigning specific roles to each team member based on their strengths, ensuring clarity and efficiency. Some focused on research and planning, others on designing wireframes and visuals in Figma, and some on coordinating feedback and timelines. This clear division of roles allowed us to move through each phase systematically, ensuring a cohesive and well-executed app mockup.
                        </p>

                        <img
                            src={juketeam}
                            alt="Craigslist Persona"
                            className="max-w-full h-auto mb-10"
                        />

                        <img
                            src={waterfall}
                            alt="Craigslist Homepage"
                            className="max-w-full h-auto mb-6"
                        />
                        <p className="mb-6 text-black font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-left max-w-3xl text-center">
                            Craigslist's user experience is outdated and inconsistent. The platform's design feels out of date compared to modern standards, with a cluttered layout and lack of intuitive navigation. These design flaws make it difficult for users to find what they need but also creates a lack of trust and security. This creates a frustrating user experience.
                            While Craigslist has maintained a loyal user base, its outdated interface is limiting its potential to attract a wider audience and meet the expectations of today's users. with taking valued input from multiple users to make sure it's a credible and worth looking into. From the flaws highlighted, with the user research identifying the flaws, it informed what solutions could be done to imagine the user flow of the new redesigned look.
                        </p>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Jukeprocess;

