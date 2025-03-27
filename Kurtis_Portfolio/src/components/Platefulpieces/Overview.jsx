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
        <div className="bg-white rounded-2xl py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* First Paragraph */}
                    <div data-aos="fade-down">
                        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">Overview</h2>
                        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit">
                            Food delivery apps have revolutionized the way people order meals. However, traditional food delivery platforms are often designed to cater to individual or small group orders, leaving restaurants overwhelmed when faced with bulk catering requests.
                        </p>
                    </div>

                    {/* Second Paragraph */}
                    <div data-aos="fade-down" data-aos-delay="200">
                        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">The Problem</h2>
                        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit">
                            Food delivery apps are not designed to handle large orders efficiently. They create unpredictable rushes in restaurants, straining operations and service quality. Without specialized features for bulk orders, these platforms cause more issues than they solve.
                        </p>
                    </div>

                    {/* Third Paragraph */}
                    <div data-aos="fade-down" data-aos-delay="400">
                        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">The Solution</h2>
                        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit">
                            To address this gap, we present Plateful, a specialized food delivery application tailored exclusively for catering services and restaurants that focus on large-scale orders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlatefulOverview;
