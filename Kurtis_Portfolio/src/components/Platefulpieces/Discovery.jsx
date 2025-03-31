import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import frame from "../../assets/platefulphotos/frame.png";

function PlatefulDiscovery() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="text-left pl-4 mt-10 mb-10">
            <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                Discovery
            </h2>
            <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                Finding the right catering service often involves extensive research and inquiries, which can be time-consuming and overwhelming.
            </h3>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit">
                I wanted to understand how people discover catering services and evaluate the overall quality of their experiences. To gain deeper insights, I reached out to friends and acquaintances who have used catering services to learn more about their opinions and experiences.
            </p>
            <img src={frame} alt="Discovery Frame" className="max-w-full rounded-2xl h-auto mb-10 mt-10" />
        </div>
    );
}

export default PlatefulDiscovery;
