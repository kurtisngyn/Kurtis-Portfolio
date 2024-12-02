import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Craigslistresearch from "./Craigslist-research";
import Craigslistbrainstorm from "./Craigslist-brainstorm";
import Craigslistmockup from "./Craigslist-mockup";


function Craigslistselect() {
    const [selectedComponent, setSelectedComponent] = useState(<Craigslistresearch />);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const renderComponent = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className="bg-lavender py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
                    <button 
                        className="w-full md:w-64 px-6 py-4 bg-periwinkle-500 text-white text-lg rounded-lg hover:text-black font-quicksand shadow-md transition duration-300 ease-in-out transform hover:scale-105" 
                        data-aos="fade-up"
                        onClick={() => renderComponent(<Craigslistresearch />)}
                    >
                        Research
                    </button>
                    <button 
                        className="w-full md:w-64 px-6 py-4 bg-periwinkle-500 text-white text-lg rounded-lg hover:text-black font-quicksand shadow-md transition duration-300 ease-in-out transform hover:scale-105" 
                        data-aos="fade-up" 
                        data-aos-delay="100"
                        onClick={() => renderComponent(<Craigslistbrainstorm />)}
                    > Brainstorm
                    </button>
                    <button 
                        className="w-full md:w-64 px-6 py-4 bg-periwinkle-500 text-white text-lg rounded-lg hover:text-black font-quicksand shadow-md transition duration-300 ease-in-out transform hover:scale-105" 
                        data-aos="fade-up" 
                        data-aos-delay="200"
                        onClick={() => renderComponent(<Craigslistmockup  />)}
                    >
                      Mockup
                    </button>
                </div>
                <div className="mt-8" data-aos="fade-up">
                    {selectedComponent}
                </div>
            </div>
        </div>
    );
}

export default Craigslistselect;