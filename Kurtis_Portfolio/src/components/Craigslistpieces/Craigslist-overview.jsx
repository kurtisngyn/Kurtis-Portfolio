import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CraigslistOverview() {
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
                        <p className="text-gray-700 font-quicksand">As user expectations have evolved, there's a growing demand for more intuitive, visually appealing, and mobile-friendly websites. Craigslist's outdated design has led to frustration among users and advertisers, especially as competitors with modern interfaces take the lead. This overview will highlight why Craigslist needs a redesign to remain relevant and enhance user engagement in today's digital landscape.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md font-quicksand" data-aos="fade-down" data-aos-delay="200">
                        <h2 className="text-xl font-bold mb-4 text-black font-quicksand">Narrative</h2>
                        <p className="text-gray-700">The Craigslist project is to create a redesigned product that corrects the understanding of having modern UI/UX standards using user research and Figma mockup prototyping</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md font-quicksand" data-aos="fade-down" data-aos-delay="400">
                        <h2 className="text-xl font-bold mb-4 text-black font-quicksand">Project Goal</h2>
                        <p className="text-gray-700">The goal is to create a high-fidelity prototype using Figma in MDIA-2540 UI/UX Strategy 1 by creating a new redesigned craigslist adding intuitive design through research and prototyping to complete a more user focused & goal focused design on Figma.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CraigslistOverview;