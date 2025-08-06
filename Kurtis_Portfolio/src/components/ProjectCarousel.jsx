import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Your images
import MockupJukebox from "../assets/MockupJukebox.jpg";
import MockupPlateful from "../assets/mockupplateful.jpg";
import MockupWaterplus from "../assets/mockupwaterplus.jpg";
import nature from "../assets/nature.jpg";
import Tourdeforce from "../assets/Tourdeforce.jpg";

const projects = [
  { id: 1, image: MockupJukebox },
  { id: 2, image: MockupPlateful },
  { id: 3, image: MockupWaterplus },
  { id: 4, image: nature },
  { id: 5, image: Tourdeforce },
];

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full mt-12 px-4" data-aos="fade-up">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 4000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + projects.length) % projects.length;
          const isNext = index === (activeIndex + 1) % projects.length;

          let transformClass = "scale-75 opacity-50";
          if (isActive) {
            transformClass = "scale-100 z-30 opacity-100";
          } else if (isPrev) {
            transformClass += " -rotate-6 z-20";
          } else if (isNext) {
            transformClass += " rotate-6 z-20";
          } else {
            transformClass += " z-10";
          }

          return (
            <SwiperSlide key={project.id}>
              <div
                className={`transition-all duration-500 transform ${transformClass} rounded-xl shadow-xl overflow-hidden bg-white`}
              >
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-64 sm:h-96 object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
