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
          className="w-10/12 lg:w-8/12 mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8"
          data-aos="fade-up"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-black font-quicksand text-center">
            I often work with:
          </h2>
           {/* Paragraph under icons */}
           <p className="text-base sm:text-lg text-black font-quicksand text-center mt-6 mb-6 ">
            As a designer, leveraging tools like Adobe Cloud Suite, Figma, and ReactJS together creates a powerful workflow that bridges design and development seamlessly.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Tool 1 */}
            <div className="flex flex-col items-center">
              <img src={Figmaicon} alt="Figma" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-quicksand">Figma</p>
            </div>
    
            {/* Tool 2 */}
            <div className="flex flex-col items-center">
              <img src={Reacticon} alt="ReactJS" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-quicksand">ReactJS</p>
            </div>

            {/* Tool 3 */}
            <div className="flex flex-col items-center">
              <img src={Aeicon} alt="Adobe After Effects" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-quicksand">After Effects</p>
            </div>

            {/* Tool 4 */}
            <div className="flex flex-col items-center">
              <img src={Aiicon} alt="Adobe Illustrator" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-quicksand">Illustrator</p>
            </div>

            {/* Tool 5 */}
            <div className="flex flex-col items-center">
              <img src={Pricon} alt="Adobe Premiere Pro" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-quicksand">Premiere Pro</p>
            </div>

            {/* Tool 6 */}
            <div className="flex flex-col items-center">
              <img src={Psicon} alt="Adobe Photoshop" className="h-24 w-24 mb-3" />
              <p className="text-base sm:text-lg text-black font-quicksand">Photoshop</p>
            </div>
          </div>

      
        </div>
    );
};

export default ToolSection;
