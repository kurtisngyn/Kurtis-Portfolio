import React from "react";
import image from "../../assets/Abtassets/image.png";

function Abtmain() {
    return (
        <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="w-full max-w-none flex bg-white rounded-2xl px-6 py-4"
        >
            <div className="w-1/3">
                <img
                    src={image}
                    alt="Kurtis Nguyen"
                    className="w-full rounded-xl object-cover"
                />
                {/* Text below the image */}
                <p className="font-outfit text-2xl sm:text-2xl md:text-4xl text-black font-bold tracking-tight mt-4">
                    Kurtis Nguyen
                </p>
            </div>
            <div className="flex-1 pl-4">
                <h2 className="font-outfit text-2xl sm:text-2xl md:text-4xl text-black font-bold tracking-tight">Helloo</h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-4">
                I'm Kurtis, a designer and creative with a passion for nature and the arts. Right now, I'm diving into UI/UX design and looking for opportunities in branding, marketing, and front-end development. I enjoy working on a variety of projects, from responsive web design to optimizing SEO for better online presence. 
                </p>
            </div>
        </div>
    );
}

export default Abtmain;
