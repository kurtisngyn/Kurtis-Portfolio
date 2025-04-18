import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function NatureOverview() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="py-16">
            <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
                <div
                    className="bg-white rounded-2xl p-10 shadow-md"
                    data-aos="fade-up"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black font-outfit">
                        Project Overview
                    </h2>
                    <div className="space-y-6 text-xl lg:text-2xl text-black font-outfit leading-relaxed">
                        <p>
                        As I journey through new places and experiences, I’ve created this space to share my photography away from the limitations of social media. Here, I can present each image with purpose—highlighting stories through thoughtful composition and visual simplicity. From quiet, everyday moments to dramatic landscapes, every photo offers a glimpse into how I see the world: with curiosity, creativity, and care.
                        </p>
                        <p>
                        I wanted a personal website where I could thoughtfully curate and display my favorite photos—free from the algorithms and noise of social platforms. This site is a space that’s truly mine, where my work can live with clarity and intention.
                        </p>
                        <p>
                            To summarize I present <strong>Nature's Path</strong>, a cool website design to share.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NatureOverview;
