import React from "react";
import craigslisthomepage from "../../assets/craiglistphotos/craigslisthomepage.png";
import craiglisttrust from "../../assets/craiglistphotos/craigslisttrust.png";

function Craigslistresearch() {
    return (
        <div className="bg-lavender py-12">
            <div className="container mx-auto px-4">
                <div className="flex-grow flex flex-col items-center justify-center">

                    <h1 className="mb-4 text-black font-quicksand font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Research Phase
                    </h1>
                    <p className="mb-6 text-black font-quicksand text-sm sm:text-base md:text-lg lg:text-xl text-left max-w-3xl text-center">
                        During this phase, it consisted of research that involved finding flaws of the current design of Craigslist. The process of finding the flaws consisted of prioritizing the level of flaws that came up, with taking valued input from multiple users to make sure it's a credible and worth looking into. From the flaws highlighted, with the user research identifying the flaws, it informed what solutions could be done to imagine the user flow of the new redesigned look.
                    </p>
                    {/* Existing Research Phase Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full mt-8">
                        <div className="flex flex-col items-center justify-start">


                            <h1 className="mb-6 mt-2 text-black font-quicksand font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                                Researched Flaws
                            </h1>

                            <img
                                src={craiglisttrust}
                                alt="Craigslist Trustable?"
                                className="max-w-full h-auto mb-10"
                            />

                            <img
                                src={craigslisthomepage}
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
        </div>
    );
}

export default Craigslistresearch;