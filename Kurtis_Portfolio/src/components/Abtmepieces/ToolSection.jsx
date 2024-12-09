import React from "react";
import Reacticon from "../../assets/Abtassests/react.svg";
import Figmaicon from "../../assets/Abtassests/figma.svg";
import Adobeicon from "../../assets/Abtassests/Adobecloud.svg";

function ToolSection() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full md:w-3/4 lg:w-2/3 mx-auto flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-6im  text-black font-quicksand ">I often work with:</h2>
          <div className="grid grid-cols-3 gap-12">
            {/* Tool 1 */}
            <div className="flex flex-col items-center">
              <img src={Figmaicon} alt="Figma" className="h-40 w-40 mb-3" />
              <p className="text-base text-black font-quicksand ">Figma</p>
            </div>
    
            {/* Tool 2 */}
            <div className="flex flex-col items-center">
              <img src={Reacticon} alt="ReactJS" className="h-40 w-40 mb-3" />
              <p className="text-base text-black font-quicksand ">ReactJS</p>
            </div>

            {/* Tool 3 */}
            <div className="flex flex-col items-center">
              <img src={Adobeicon} alt="Adobe Cloud Suite" className="h-40 w-40 mb-3" />
              <p className="text-base text-black font-quicksand ">Adobe Cloud Suite</p>
            </div>
          </div>
        </div>
    );
};

export default ToolSection;