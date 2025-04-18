import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import juketeam from "../../assets/Jukeboxphotos/juketeam.png";
import waterfall from "../../assets/Jukeboxphotos/waterfall.png";

function Jukeprocess() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="text-left pl-4 mb-10">
            {/* Process Overview Section */}
            <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                The Process
            </h2>
            <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                A structured and collaborative approach to building Jukebox.
            </h3>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                Using the waterfall methodology, our team worked step-by-step to create the Jukebox app mockup in Figma. We began by defining goals, features, and deadlines, then moved to the design phase, collaborating on wireframes and visual concepts.
            </p>

            {/* Team Dynamic Section (Image Right) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12 bg-white p-6 rounded-2xl shadow-md" data-aos="fade-up">
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                        Team Dynamic
                    </h2>
                    <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                        By assigning specific roles to each team member based on their strengths, we ensured clarity and efficiency. Some focused on research and planning, others on designing wireframes and visuals in Figma, and some on coordinating feedback and timelines. This clear division of roles allowed us to move through each phase systematically, resulting in a cohesive and well-executed app mockup.
                    </p>
                </div>
                <img src={juketeam} alt="Team Collaboration" className="w-full md:w-1/2 rounded-2xl h-auto" />
            </div>

            {/* Waterfall Methodology Section (Image Left) */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-white p-6 rounded-2xl shadow-md" data-aos="fade-up">
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                        Waterfall Methodology
                    </h2>
                    <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                        The waterfall methodology provided our team with a clear, structured approach to creating the Jukebox app mockup. By breaking the project into distinct phases—planning, design, and review—we could focus on one step at a time without overlapping tasks. This sequential process ensured every stage was thoroughly completed before moving forward, reducing confusion and keeping the team aligned.
                    </p>
                </div>
                <img src={waterfall} alt="Waterfall Diagram" className="w-full md:w-1/2 rounded-2xl h-auto" />
            </div>
        </div>
    );
}

export default Jukeprocess;
