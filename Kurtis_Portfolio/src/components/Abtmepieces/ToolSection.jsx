import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Reacticon from "../../assets/Abtassets/react.svg";
import Figmaicon from "../../assets/Abtassets/figma.svg";
import Aeicon from "../../assets/Abtassets/ae.svg";
import Pricon from "../../assets/Abtassets/pr.svg";
import Aiicon from "../../assets/Abtassets/ai.svg";
import Psicon from "../../assets/Abtassets/ps.svg";

function ToolSection() {
    const iconWrapperRef = useRef(null);

    useEffect(() => {
        const iconWrapper = iconWrapperRef.current;
        const iconWidth = iconWrapper.scrollWidth / 2;

        gsap.to(iconWrapper, {
            x: -iconWidth,
            ease: "none",
            duration: 20,
            repeat: -1,
        });
    }, []);

    const IconItem = ({ src, alt, }) => (
        <div className="flex flex-col items-center mx-4">
            <img src={src} alt={alt} className="h-24 w-24 mb-3" />
            <p className="text-base sm:text-lg text-black font-quicksand">{name}</p>
        </div>
    );

    const icons = [
        { src: Figmaicon, alt: "Figma", name: "Figma" },
        { src: Reacticon, alt: "ReactJS", name: "ReactJS" },
        { src: Aeicon, alt: "Adobe After Effects", name: "After Effects" },
        { src: Aiicon, alt: "Adobe Illustrator", name: "Illustrator" },
        { src: Pricon, alt: "Adobe Premiere Pro", name: "Premiere Pro" },
        { src: Psicon, alt: "Adobe Photoshop", name: "Photoshop" },
    ];

    return (
        <div
            className="w-10/12 lg:w-8/12 mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8"
            data-aos="fade-up"
        >
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-black font-quicksand text-left">
                Toolkit
            </h2>
            {/* <p className="text-base sm:text-lg text-black font-quicksand text-center mt-6 mb-6">
                As a designer, leveraging tools like Adobe Cloud Suite, Figma, and ReactJS together creates a powerful workflow that bridges design and development seamlessly.
            </p> */}
            <div className="overflow-hidden">
                <div ref={iconWrapperRef} className="flex whitespace-nowrap">
                    {[...icons, ...icons].map((icon, index) => (
                        <IconItem key={index} {...icon} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ToolSection;
