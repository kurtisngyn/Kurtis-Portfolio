import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Pose from "../../assets/Abtassets/Resultphoto.jpg";
import Photoshoot from "../../assets/Abtassets/Photoshoot.jpg";
import Naruto from "../../assets/Abtassets/Naruto.jpg";

import Larrabee from "../../assets/Abtassets/Larrabee.jpg";
import VideoFile from "../../assets/Abtassets/Hikevid.mp4"; // Video file
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function ImageCarousel() {
  const media = [
    { type: "video", src: VideoFile, description: "diez vistas trail" },
    { type: "image", src: Naruto, description: "learning my ninja way!" },
    { type: "image", src: Larrabee, description: "exploring washington" },
    { type: "image", src: Photoshoot, description: "photoshoot" },
    { type: "image", src: Pose, description: "→ results" },
  ];

  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 9000,
    cssEase: "ease-in-out",
  };

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden relative flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Custom Navigation Arrows */}
      <button
        onClick={goToPrev}
        className={`absolute bottom-4 left-4 text-white text-3xl cursor-pointer z-20 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: isHovered ? "auto" : "none" }}
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={goToNext}
        className={`absolute bottom-4 right-4 text-white text-3xl cursor-pointer z-20 transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: isHovered ? "auto" : "none" }}
      >
        <FaArrowRight />
      </button>

      <Slider ref={sliderRef} {...settings} className="w-full">
        {media.map((item, index) => (
          <div key={index} className="relative w-full flex justify-center items-center bg-black">
           <div className="relative w-full h-[80vh] flex justify-center items-center bg-black">
           {item.type === "video" ? (
  <video
    src={item.src}
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
) : (
  <img
    src={item.src}
    alt={`Slide ${index + 1}`}
    className="w-full h-full object-cover"
  />
)}
</div>


            {/* Overlay with Description */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white text-lg font-semibold text-center mb-5 px-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
