import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import platefulempathy from "../../assets/platefulphotos/Platefulempathy.png";
import platefulpersona from "../../assets/platefulphotos/persona.png";

function PlatefulResearch() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="text-left pl-4 mb-10">
            {/* Research Section */}
            <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                Research
            </h2>
            <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                Understanding user needs to create a seamless catering experience.
            </h3>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                With that discovery, I wanted to have the app showcase all restaurants with clear communication to make catering efficient and easy. I obviously needed to conduct more user research to understand the needs of the users, which can be done through competitive analysis.
            </p>

            {/* Competitive Analysis Section */}
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                Competitive Analysis
            </h2>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                Figuring out the popular food service apps, I identified the top-rated food delivery services. From this, I conducted an analysis, coupled with a comprehensive compilation of user reviews highlighting the strengths and weaknesses of these apps. Within this research, it became apparent that many of these apps struggled to optimize for the general user, leading to significant pain points.
            </p>

            {/* Entire Section (Image Right - Text Left) with White Background Card */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12 bg-white p-6 rounded-2xl shadow-md">
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                        User Persona
                    </h2>
                    <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                        A user persona is a fictional character that represents a specific segment of your target audience. It helps understand the needs, goals, and behaviors of your users. I created a user persona to guide the design process and ensure that the app meets the needs of its users.
                    </p>
                </div>
                <img src={platefulpersona} alt="Empathy Mapping" className="w-full md:w-1/2 rounded-2xl h-auto" />
            </div>

            {/* Entire Section (Image Left - Text Right) with White Background Card */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-white p-6 rounded-2xl shadow-md">
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                        Empathy Mapping
                    </h2>
                    <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                        An empathy map is a visual tool that helps teams understand the needs, feelings, and motivations of their users, helping identify pain points and opportunities for improvement. I created an empathy map to gain a deeper understanding of the users' needs and to inform the design process.
                    </p>
                </div>
                <img src={platefulempathy} alt="Persona" className="w-full md:w-1/2 rounded-2xl h-auto" />
            </div>
        </div>
    );
}

export default PlatefulResearch;
