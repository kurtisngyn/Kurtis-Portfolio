import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Aeicon from "../../assets/Abtassets/ae.svg";
import Pricon from "../../assets/Abtassets/pr.svg";
import Aiicon from "../../assets/Abtassets/ai.svg";
import Psicon from "../../assets/Abtassets/ps.svg";

// Add all icons to the library
library.add(fab);

function Abtvalues() {
  const iconColor = "black";

  const tools = [
    { icon: ["fab", "figma"], name: "Figma" },
    { icon: ["fab", "react"], name: "ReactJS" },
    { icon: ["fab", "html5"], name: "HTML5" },
    { icon: ["fab", "css3-alt"], name: "CSS3" },
    { icon: ["fab", "js-square"], name: "JavaScript" }
  ];

  const adobeTools = [
    { src: Aiicon, name: "Illustrator" },
    { src: Psicon, name: "Photoshop" },
    { src: Pricon, name: "Premiere Pro" },
    { src: Aeicon, name: "After Effects" }
  ];

  return (
    <div className="w-full py-8" data-aos="fade-right">
      <div className="flex w-full gap-8">
        {/* Left Side - Tools Section */}
        <div className="w-2/5 p-7 bg-white rounded-2xl">
          <h2 className="font-outfit text-2xl sm:text-2xl md:text-3xl text-black font-bold tracking-tight mb-4">
            I often work with:
          </h2>
          <div className="grid grid-cols-3 gap-8 mb-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={tool.icon}
                  className="h-12 w-12 mb-2"
                  color={iconColor}
                />
                <p className="text-sm sm:text-base text-black font-outfit text-center">
                  {tool.name}
                </p>
              </div>
            ))}

            {adobeTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={tool.src}
                  alt={tool.name}
                  className="h-12 w-12 mb-2"
                />
                <p className="text-sm sm:text-base text-black font-outfit text-center">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Longer Description Card */}
        <div className="w-3/5 p-7 bg-white rounded-2xl">
          <h2 className="font-outfit text-2xl sm:text-2xl md:text-4xl text-black font-bold tracking-tight mb-4">
            values
          </h2>
          <div className="text-lg sm:text-xl md:text-2xl text-black font-outfit mt-[40px]">
            <p className="mb-3">
              I deeply value communication and the connections we build through shared experiences.
            </p>
            <p className="mb-3">
              Whether it's through meaningful conversations, collaborating on creative projects, or simply spending time with others, I believe strong relationships are the foundation of impactful work.
            </p>
            <p className="mb-3">
              I'm passionate about fostering genuine connections and using design as a tool to bring people together, solve problems, and create memorable experiences. I'm always eager to learn from others and grow through collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abtvalues;
