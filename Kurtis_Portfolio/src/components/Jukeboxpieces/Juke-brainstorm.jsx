import React from "react";
import jukeoverview from "../../assets/Jukeboxphotos/jukeoverview.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Jukebrainstorm() {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="text-left pl-4 mb-10">
            {/* Brainstorming Section */}
            <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                Brainstorm Phase
            </h2>
            <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                Collaborating to create an engaging music experience.
            </h3>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                The brainstorming process for creating our hypothetical app was a dynamic and collaborative effort that involved multiple stages of ideation and creativity. We began by gathering our team to discuss the app's purpose and target audience, encouraging each member to share their ideas freely.
            </p>

            {/* Discovery Section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12 bg-white p-6 rounded-2xl shadow-md" data-aos="fade-down">
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                        Jukebox Discovery
                    </h2>
                    <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                        We designed Jukebox to be a dynamic and engaging music streaming platform that caters to the needs of music enthusiasts who value discovery, interaction, and simplicity. By combining innovative tools with a user-friendly design, Jukebox offers a seamless experience that bridges the gap between listening and sharing.
                    </p>
                </div>
                <img
                    src={jukeoverview}
                    alt="Jukebox Discovery"
                    className="w-full md:w-1/2 rounded-2xl h-auto"
                />
            </div>

            {/* Additional Sections can be added below as needed, such as "User Persona" or "Challenges", following the similar pattern */}
        </div>
    );
}

export default Jukebrainstorm;
