import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Watermockup() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="text-left mt-10 mb-10">
            <div className="relative mt-10 mb-10">
                <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                    Mock up
                </h2>
                <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                    This final phase involves creating low-fidelity wireframes to outline the basic structure and layout of key screens, followed by iterative refinements with images to provide a finished high-fidelity mockup.
                </h3>
                <div className="w-full">
                    <iframe 
                        className="w-full h-[450px] md:h-[600px] border border-gray-300 rounded-lg" 
                        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/nRZ8hMBVSR5as0NoRUbaEf/Water%2B?node-id=41-80" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Watermockup;
