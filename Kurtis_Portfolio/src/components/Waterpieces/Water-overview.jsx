import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WaterOverview() {
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
                            In a world where sustainability is no longer a choice but a necessity, we set out to create an app that makes finding water refill stations as simple as a tap on your phone. From identifying the problem to mapping out every touchpoint of our users’ experience, we designed a water-sourcing app that not only locates refill stations, but reduces plastic waste.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-10 shadow-md" data-aos="fade-down" data-aos-delay="200">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                            Narrative
                        </h2>
                        <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                            This water sourcing app offers users find nearby refill stations, making it easier to stay hydrated while reducing plastic waste. By offering real-time station locations, water quality details, and eco-friendly rewards, the app empowers individuals to make sustainable choices effortlessly.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-10 shadow-md" data-aos="fade-down" data-aos-delay="400">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                            Project Goal
                        </h2>
                        <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                            Based on these insights, we created detailed user personas and journeys. Using Figma, we designed interactive mockups that showcase key features like real-time refill station search, ratings, navigation, and eco-tracking, all aimed at making sustainable hydration easy and rewarding for users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaterOverview;
