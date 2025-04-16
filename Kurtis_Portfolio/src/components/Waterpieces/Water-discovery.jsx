import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WaterDiscovery() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="text-left mt-20 mb-20 ">
            {/* Section Heading */}
            <div className="mb-16" data-aos="fade-up">
                <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                    Discovery
                </h2>
                <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                    Discovering the root causes of community problems is crucial, as it's the drive to implement constructive solutions.
                </h3>
                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                    This process begins with curiosity, leading to deeper insights and innovative ideas. Ultimately, this exploration results in a thoughtful proposal that addresses the core issues and fosters meaningful change.
                </p>
            </div>

            {/* Discovery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-auto">
                {/* Top Left: Wider */}
                <div className="bg-white rounded-2xl p-10 shadow-md lg:col-span-2" data-aos="fade-down">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                        Proposing a Solution
                    </h2>
                    <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                    Imagine a world wide app that connects individuals with the simple need of find quality water.
                    Together, they can locate water stations and keep an eye on water quality, all while teaching waste management and recycling tips.
                    </p>
                </div>

                {/* Top Right: Regular */}
                <div className="bg-white rounded-2xl p-10 shadow-md" data-aos="fade-down" data-aos-delay="200">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                    Audience
                    </h2>
                    <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                        Our research involved speaking to residents, municipal workers, and nonprofit organizations to uncover their pain points. Access inconsistency, lack of data, and no digital tools for reporting or planning were common themes.
                    </p>
                </div>

                {/* Bottom Left: Smaller */}
                <div className="bg-white rounded-2xl p-10 shadow-md" data-aos="fade-down" data-aos-delay="400">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                        Root Issues
                    </h2>
                    <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                        Inadequate infrastructure, unclear reporting channels, and outdated maps made it difficult for communities to advocate for improved water access.
                    </p>
                </div>

                {/* Bottom Right: Wider */}
                <div className="bg-white rounded-2xl p-10 shadow-md lg:col-span-2" data-aos="fade-down" data-aos-delay="600">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                        Opportunity to Innovate
                    </h2>
                    <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                        These insights helped shape our solution: a tool that empowers users to map water sources, report outages, and engage directly with their local infrastructure — giving data back to the people who need it most.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WaterDiscovery;
