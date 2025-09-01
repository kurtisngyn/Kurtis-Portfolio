import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Aeicon from "../../assets/Abtassets/ae.svg";
import Pricon from "../../assets/Abtassets/pr.svg";
import Aiicon from "../../assets/Abtassets/ai.svg";
import Psicon from "../../assets/Abtassets/ps.svg";
import Reacticon from "../../assets/Abtassets/react.svg";

library.add(fab);

function ToolCard() {
  const iconColor = "black";

  const allTools = [
    { icon: ["fab", "figma"], name: "Figma" },
    // { icon: ["fab", "react"], name: "ReactJS" },
    { src: Reacticon, name: "ReactJS" },
    { icon: ["fab", "html5"], name: "HTML5" },
    { icon: ["fab", "css3-alt"], name: "CSS3" },
    { icon: ["fab", "js-square"], name: "JavaScript" },
    { src: Aiicon, name: "Illustrator" },
    { src: Psicon, name: "Photoshop" },
    { src: Pricon, name: "Premiere Pro" },
    { src: Aeicon, name: "After Effects" }
  ];

  return (
    <div className="w-full mt-1 mb-8" data-aos="fade-right">
      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* Left Side - Tools Section */}
        <div className="w-full lg:w-2/5 p-4 sm:p-7 bg-white rounded-2xl">
          <h2 className="font-outfit text-xl sm:text-2xl lg:text-3xl text-black font-bold mb-6 tracking-tight mb-4">
            I often work with:
          </h2>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-4">
            {allTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                {tool.icon ? (
                  <FontAwesomeIcon
                    icon={tool.icon}
                    className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2"
                    color={iconColor}
                  />
                ) : (
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mb-2"
                  />
                )}
                <p className="text-xs sm:text-sm lg:text-base text-black font-outfit text-center">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Longer Description Card */}
        <div className="w-full lg:w-3/5 p-4 sm:p-7 bg-white rounded-2xl">
          <h2 className=" font-outfit text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold tracking-tight">
            design philosophy
          </h2>
          <div className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mt-[30px]">
            <p className="mb-3 sm:mb-4 lg:mb-5">
              As a designer, I believe that good design is not just about aesthetics, but about creating meaningful, user-centered experiences.
            </p>
            <p className="mb-3 sm:mb-4 lg:mb-5">
              Bringing purpose through design, crafting intuitive experiences that feel natural and engaging. While rooted in empathy, understanding the user's needs.
            </p>
            <p className="mb-3 sm:mb-4">
              With a year of experience in automotive, retail, and hospitality, I've learned how to understand people's needs and create solutions that actually make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolCard;
