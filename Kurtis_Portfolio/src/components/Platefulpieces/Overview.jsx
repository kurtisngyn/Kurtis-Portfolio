import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PlatefulOverview() {
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
                            Food delivery apps have revolutionized the way people order meals. However, traditional food delivery platforms are often designed to cater to individual or small group orders, leaving restaurants overwhelmed when faced with bulk catering requests.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-10 shadow-md" data-aos="fade-down" data-aos-delay="200">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                            The Problem
                        </h2>
                        <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                            Food delivery apps are not designed to handle large orders efficiently. They create unpredictable rushes in restaurants, straining operations and service quality. Without specialized features for bulk orders, these platforms cause more issues than they solve.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-10 shadow-md" data-aos="fade-down" data-aos-delay="400">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                            The Solution
                        </h2>
                        <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                            To address this gap, we present Plateful, a specialized food delivery application tailored exclusively for catering services and restaurants that focus on large-scale orders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlatefulOverview;
