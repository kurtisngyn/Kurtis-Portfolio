import React from "react";
import Reacticon from "../../assets/Abtassets/react.svg";
import Figmaicon from "../../assets/Abtassets/figma.svg";
import Aeicon from "../../assets/Abtassets/ae.svg";
import Pricon from "../../assets/Abtassets/pr.svg";
import Aiicon from "../../assets/Abtassets/ai.svg";
import Psicon from "../../assets/Abtassets/ps.svg";

function ToolSection() {
    return (
        <div
          className="w-full mx-auto bg-white mt-2 rounded-lg shadow-lg p-6 sm:p-8"
          data-aos="fade-right"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-black font-outfit text-left">
            I often work with:
          </h2>
          

          <div className="flex flex-wrap justify-start -ml-4 gap-8">
            {/* Tool 1 */}
            <div className="flex flex-col items-center">
              <img src={Figmaicon} alt="Figma" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-outfit">Figma</p>
            </div>
    
            {/* Tool 2 */}
            <div className="flex flex-col items-center">
              <img src={Reacticon} alt="ReactJS" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-outfit">ReactJS</p>
            </div>

            {/* Tool 3 */}
            <div className="flex flex-col items-center">
              <img src={Aeicon} alt="Adobe After Effects" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-outfit">After Effects</p>
            </div>

            {/* Tool 4 */}
            <div className="flex flex-col items-center">
              <img src={Aiicon} alt="Adobe Illustrator" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-outfit">Illustrator</p>
            </div>

            {/* Tool 5 */}
            <div className="flex flex-col items-center">
              <img src={Pricon} alt="Adobe Premiere Pro" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-outfit">Premiere Pro</p>
            </div>

            {/* Tool 6 */}
            <div className="flex flex-col items-center">
              <img src={Psicon} alt="Adobe Photoshop" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-outfit">Photoshop</p>
            </div>
          </div>
        </div>
    );
};

export default ToolSection;