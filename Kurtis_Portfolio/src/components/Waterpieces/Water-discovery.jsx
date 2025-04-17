import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../assets/waterphotos/bgcard.png";
import bg2 from "../../assets/waterphotos/bgcard2.png";
import bg3 from "../../assets/waterphotos/bgcard3.png";
import bg4 from "../../assets/waterphotos/bgcard4.png";

function WaterDiscovery() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="text-left mt-20 mb-20 ">
            {/* Section Heading */}
            <div className="mb-16" data-aos="fade-up">
                <h2 className="font-outfit text-4xl sm:text-5xl md:text-6xl text-black font-semibold mb-4">
                    Discovery
                </h2>
                <h3 className="font-outfit text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium mb-6">
                    Discovering the root causes of community problems is crucial, as it's the drive to implement constructive solutions.
                </h3>
                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                    This process begins with curiosity, leading to solutions as innovative ideas. Ultimately, this exploration results in a thoughtful proposal that addresses the core issues for meaningful change.
                </p>
            </div>

            {/* Discovery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-auto">

                {/* Top Left: Wider */}
<div
    className="bg-white rounded-2xl p-10 shadow-md lg:col-span-2 bg-no-repeat bg-center bg-cover
"
    data-aos="fade-down"
    style={{ backgroundImage: `url(${bg})` }}
>
    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
        Problem Statement
    </h2>
    <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
    How might we create a vibrant community platform that opens the tap 

to  showcase clean water stations, teaches sustainable habits, and reduces plastic 

pollution? 
    </p>
</div>

{/* Top Right: Regular */}
<div
    className="bg-white rounded-2xl p-10 shadow-md bg-no-repeat bg-center bg-cover"
    data-aos="fade-down"
    data-aos-delay="200"
    style={{ backgroundImage: `url(${bg2})` }}
>
    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
        Audience
    </h2>
    <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
       <ul>Eco-Conscious Consumers</ul><ul>Travelers and Commuters</ul><ul>Urban Residents</ul><ul>Students</ul>
    </p>
</div>

{/* Bottom Left: Smaller */}
<div
    className="bg-white rounded-2xl p-10 shadow-md bg-no-repeat bg-center bg-cover"
    data-aos="fade-down"
    data-aos-delay="400"
    style={{ backgroundImage: `url(${bg2})` }}
>
    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
        Root Issues
    </h2>
    <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
        <ul>Community driven based </ul> <ul>Unclear Reporting Channels </ul> <ul>Lack of Real-Time Data</ul>
    </p>
</div>

{/* Bottom Right: Wider */}
<div
    className="bg-white rounded-2xl p-10 shadow-md lg:col-span-2 bg-no-repeat bg-center bg-cover"
    data-aos="fade-down"
    data-aos-delay="600"
    style={{ backgroundImage: `url(${bg4})` }}
>
    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black font-outfit">
        Opportunity to Innovate
    </h2>
    <p className="text-xl lg:text-2xl text-black font-outfit leading-relaxed">
        To design a solution that not only maps local water sources in real-time but also lets individuals to report issues, share resources, and collaborate on sustainable practices. By giving the public intuitive, data-driven tools, we can bridge the gap between community needs and actionable change.
    </p>
</div>

            </div>
        </div>
    );
}

export default WaterDiscovery;
