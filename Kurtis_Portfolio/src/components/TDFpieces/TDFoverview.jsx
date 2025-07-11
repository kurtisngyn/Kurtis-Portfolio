import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TDFoverview() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="flex flex-col items-center gap-8 mb-12 bg-white p-6 rounded-2xl shadow-md" data-aos="fade-up">
            <div className="w-full">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black font-outfit">
                    Project Overview
                </h2>
                <div className="space-y-6 text-lg sm:text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                    <p>
                        section
                    </p>
                    <p>
                        section
                    </p>
                    <p>
                        section
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TDFoverview;
