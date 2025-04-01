import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import proposedsolution from "../../assets/waterphotos/proposedsolution.jpg";
import userjourney from "../../assets/waterphotos/userjourney.jpg";
import userpersona from "../../assets/waterphotos/UXPersona.png";

function Waterresearch() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="text-left mt-10 mb-10">
            <div className="relative mt-10 mb-10">
                  <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                    Discovery
                </h2>
                <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                Discovering the root causes of community problems is crucial, as it's the drive to implement constructive solutions.
            </h3>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit">
            This process begins with curiosity, leading to deeper insights and innovative ideas. Ultimately, this exploration results in a thoughtful proposal that addresses the core issues and fosters meaningful change.
            </p>
                <img
                    src={proposedsolution}
                    alt="Discovery Frame" className="max-w-full rounded-2xl h-auto mb-10 mt-10" />
                
            </div>
            <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                Research 
            </h2>
            <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
            Understanding user needs through problem research is fundamental to creating a relevant application.
            </h3>
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit">
           Identifying and defining the problem, along with the proposed solution that highlights unqiue selling proposition, we need to take on a persona of the targeted audience to understand their needs and pain points. This process is essential for creating a user-centered design that effectively addresses the challenges faced by the target audience.
            </p>

     <div className="flex flex-col md:flex-row items-center gap-8 mb-12 mt-8">
                     <div className="w-full md:w-1/2">
                         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                             User Persona
                         </h2>
                         <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                         A user persona is a fictional character that represents a specific segment of your target audience. To helps understand the needs, goals, and behaviors of your users. I created a user persona to guide the design process and ensure that the app meets the needs of its users.
                 </p>
                     </div>
                     <img src={userpersona} alt="Empathy Mapping" className="w-full md:w-1/2 rounded-2xl h-auto" />
                 </div>
     
                 {/* Image Left - Text Right */}
                 <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
                     <div className="w-full md:w-1/2">
                         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
                             Empathy Mapping
                         </h2>
                         <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit mb-6">
                         A empathy map is a visual tool that helps teams understand the needs, feelings, and motivations of their users, helping identify pain points and opportunities for improvement. I created an empathy map to gain a deeper understanding of the users' needs and to inform the design process.
                 </p>
                     </div>
                     <img src={userjourney} alt="Persona" className="w-full md:w-1/2 rounded-2xl h-auto" />
                 </div>
        </div>
    );
}

export default Waterresearch;