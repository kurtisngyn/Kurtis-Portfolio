import React from "react";
import image from "../../assets/Abtassets/image.png";

function Abtmain() {
    return (
        <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="w-full max-w-none flex bg-white rounded-2xl px-6 py-4 relative"
        >
            <div className="w-1/3 mt-2">
                <img
                    src={image}
                    alt="Kurtis Nguyen"
                    className="w-full object-cover"
                />
                {/* Text below the image */}
                <p className="font-outfit text-2xl sm:text-2xl md:text-4xl text-black font-bold tracking-tight mt-4">
                    Kurtis Nguyen
                </p>
            </div>
            <div className="flex-1 pl-4">
                <h2 className="font-outfit mt-2 text-2xl sm:text-2xl md:text-4xl text-black font-bold tracking-tight">helloo</h2>
                <p className="text-lg sm:text-xl md:text-2xl text-black mt-4">
                    I'm Kurtis, a designer and creative with a passion for nature and the arts. Right now, I'm diving into UI/UX design and looking for opportunities in branding, marketing, and front-end development. I enjoy working on a variety of projects, from responsive web design to optimizing SEO for better online presence.
                </p>

                {/* Resume Button (Positioned Bottom Right) */}
                <button
                    onClick={() => window.open('https://drive.google.com/file/d/1ps0LRRFwsbk9WS_v4E5My2mJXoguL5hz/view?usp=drive_link', '_blank')} // Opens in a new tab
                    className="absolute bottom-4 right-4 px-6 py-2 bg-black text-white font-bold text-lg rounded-lg hover:bg-black-700 transition duration-300"
                >
                    Resume
                </button>
            </div>
        </div>
    );
}

export default Abtmain;
