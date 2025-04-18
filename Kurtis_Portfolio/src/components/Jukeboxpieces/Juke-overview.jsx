import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function JukeOverview() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="py-16">
            <div className="w-full px-0 sm:px-4 md:px-8 lg:px-16 xl:px-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-10 shadow-md" data-aos="fade-down">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                            Overview
                        </h2>
                        <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                            Imagine a world where the joy of karaoke meets the convenience of modern technology—a world where you can transform any gathering into a vibrant musical experience at the touch of a button. Welcome to the Jukebox Project, a groundbreaking conceptual app designed to revolutionize karaoke through a user-friendly interface and stunning visual design.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-10 shadow-md" data-aos="fade-down" data-aos-delay="200">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                            Narrative
                        </h2>
                        <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                            The Jukebox project is a conceptual app for a karaoke music streaming platform, offering a user-friendly experience and a visually attractive design through functionality. As a team, we were put together to learn about the Waterfall methodology and create a solid app launch.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-10 shadow-md" data-aos="fade-down" data-aos-delay="400">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                            Project Goal
                        </h2>
                        <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                            The project aimed to create an innovative and user-centric mobile app interface using Figma, a powerful collaborative design tool. This endeavor involved comprehensive research, creative ideation, and meticulous design execution to produce a visually appealing and highly functional app interface.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JukeOverview;
