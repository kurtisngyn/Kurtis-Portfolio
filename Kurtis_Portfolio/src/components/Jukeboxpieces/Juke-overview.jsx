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
        <div className="bg-lavender py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-down">
                        <h2 className="text-xl font-bold mb-4 text-black font-quicksand">Overview</h2>
                        <p className="text-gray-700 font-quicksand">Imagine a world where the joy of karaoke meets the convenience of modern technology—a world where you can transform any gathering into a vibrant musical experience at the touch of a button. Welcome to the Jukebox Project, a groundbreaking conceptual app designed to revolutionize karaoke through a user-friendly interface and stunning visual design.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md font-quicksand" data-aos="fade-down" data-aos-delay="200">
                        <h2 className="text-xl font-bold mb-4 text-black font-quicksand">Narrative</h2>
                        <p className="text-gray-700">The Jukebox project is a conceptual app for a karaoke music streaming platform, offering a user-friendly experience and a visually attractive design through functionality. As a team we were put 
together to learn about the Waterfall methodology and create a solid App launch.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md font-quicksand" data-aos="fade-down" data-aos-delay="400">
                        <h2 className="text-xl font-bold mb-4 text-black font-quicksand">Project Goal</h2>
                        <p className="text-gray-700">The project aimed to create an innovative and user-centric mobile app interface using Figma, a powerful collaborative design tool. This endeavor will involve comprehensive research, creative ideation, and meticulous design execution to produce a visually appealing and highly functional app interface.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JukeOverview;